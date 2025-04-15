import express, { Request, Response, NextFunction } from "express";
import { Server as HttpServer } from "http";

import { Server as SocketIOServer } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Socket.IO related data structures
interface User {
  name: string;
}

interface Room {
  users: Map<string, string>;
  hostSocketId: string | null;
  autoAllow: boolean;
  pendingRequests: Map<string, string>;
  hostOnlyMode?: boolean;
}

interface ChatMessage {
  name: string;
  message: string;
}

interface FileMessage {
  userName?: string;
  name: string;
  fileData: any;
}

const roomMessages: Record<string, Array<ChatMessage | FileMessage>> = {};
const activeRooms = new Map<string, Room>();

// Express app setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Request/response logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Helper functions
function generateRoomCode(): string {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  return !activeRooms.has(code) ? code : generateRoomCode();
}

function generateFunnyName(): string {
  const adjectives = ["Witty", "Grumpy", "Happy", "Sleepy", "Sassy", "Sneaky", "Elegant",
    "Curious", "Brave", "Mysterious", "Clumsy", "Energetic", "Majestic", 
    "Quirky", "Gentle", "Fierce", "Mischievous", "Bashful", "Wise",
    "Radiant", "Wise", "Playful", "Charming", "Grouchy", "Dazzling"];

  const animals = ["Penguin", "Tiger", "Koala", "Sloth", "Unicorn", "Panda",
    "Dolphin", "Fox", "Owl", "Elephant", "Raccoon", "Hedgehog",
    "Flamingo", "Octopus", "Narwhal", "Cheetah", "Lemur", "Otter",
    "Peacock", "Beaver", "Jaguar", "Platypus", "Chameleon", "Walrus"];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adjective} ${animal}`;
}

// Main route handlers
// Serve landing page at root URL instead of redirecting
// app.get("/room", (req, res) => {
//   // Serve your landing page HTML
//   const landingPagePath = path.resolve(process.cwd(), 'attached_assets', 'room.html');
//   res.sendFile(landingPagePath);
// });
app.get("/room", (req, res) => {
  // Generate a random room code
  const roomCode = generateRoomCode();

  // Redirect to the new room URL
  res.redirect(`/room/${roomCode}`);
});

// Route to create a new room and redirect to it
app.get("/create-room", (req, res) => {
  const roomCode = generateRoomCode();
  activeRooms.set(roomCode, {
    users: new Map(),
    hostSocketId: null,
    autoAllow: true,
    pendingRequests: new Map()
  });

  res.redirect(`/room/${roomCode}`);
});

// Changed route pattern to /room/:roomId and updated path to room.html
app.get("/room/:roomId", (req, res) => {
  const roomHtmlPath = path.resolve(process.cwd(), 'attached_assets', 'room.html');
  res.sendFile(roomHtmlPath);
});

// Main initialization
(async () => {
  const server = await registerRoutes(app);
  const io = new SocketIOServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    maxHttpBufferSize: 50e6, // 50MB max buffer size
  });

  // Socket.IO connection handling
  io.on("connection", (socket) => {
    let currentRoom: string | null = null;
    let userName: string | null = null;

    socket.on("join-room", (roomId: string) => {
      currentRoom = roomId;
      userName = generateFunnyName();
    
      if (!activeRooms.has(roomId)) {
        activeRooms.set(roomId, {
          users: new Map(),
          hostSocketId: socket.id,
          autoAllow: true,
          pendingRequests: new Map()
        });
      }
    
      const room = activeRooms.get(roomId)!;
    
      // If first user, they are host
      if (room.users.size === 0) {
        room.hostSocketId = socket.id;
      }
    
      if (room.autoAllow || socket.id === room.hostSocketId) {
        joinUser();
      } else {
        // Store pending request
        room.pendingRequests.set(socket.id, userName);
    
        // Notify host
        io.to(room.hostSocketId!).emit("join-request", {
          socketId: socket.id,
          userName
        });
      }
    
      function joinUser() {
        socket.join(roomId);
        room.users.set(socket.id, userName!);
    
        socket.emit("user-name", userName);
        socket.emit("host-status", socket.id === room.hostSocketId);
        socket.emit("host-only-mode-changed", room.hostOnlyMode || false);
        socket.emit("chat-history", roomMessages[roomId] || []);
    
        io.to(roomId).emit("user-count", room.users.size);
      }
    });

    socket.on("approve-user", (userSocketId: string) => {
      if (!currentRoom) return;
      const room = activeRooms.get(currentRoom);
      if (!room) return;
      
      if (socket.id === room.hostSocketId && room.pendingRequests.has(userSocketId)) {
        const approvedName = room.pendingRequests.get(userSocketId);
        io.to(userSocketId).emit("join-approved", approvedName);
        room.pendingRequests.delete(userSocketId);
      }
    });
    
    socket.on("deny-user", (userSocketId: string) => {
      if (!currentRoom) return;
      const room = activeRooms.get(currentRoom);
      if (!room) return;
      
      if (socket.id === room.hostSocketId && room.pendingRequests.has(userSocketId)) {
        io.to(userSocketId).emit("join-denied");
        room.pendingRequests.delete(userSocketId);
      }
    });
    
    socket.on("toggle-auto-allow", (enabled: boolean) => {
      if (currentRoom && activeRooms.has(currentRoom)) {
        const room = activeRooms.get(currentRoom)!;
        if (socket.id === room.hostSocketId) {
          room.autoAllow = enabled;
          io.to(currentRoom).emit("auto-allow-updated", enabled);
        }
      }
    });

    socket.on("chat-message", ({ roomId, message }: { roomId: string, message: string }) => {
      if (!userName) return;
      
      const userMessage = { name: userName, message };
  
      // Save the message in memory
      if (!roomMessages[roomId]) {
        roomMessages[roomId] = [];
      }
      roomMessages[roomId].push(userMessage);
  
      if (currentRoom) {
        io.to(currentRoom).emit("chat-message", { name: userName, message });
      }
    });
  
    socket.on('file-transfer', ({ roomId, fileName, fileData }: { roomId: string, fileName: string, fileData: any }) => {
      if (!userName || !currentRoom) return;
      
      //save in memory 
      const userMessage = { userName, name: fileName, fileData };
  
      if (!roomMessages[roomId]) {
        roomMessages[roomId] = [];
      }
      roomMessages[roomId].push(userMessage);
  
      // Broadcast the file to all users in the room
      io.to(currentRoom).emit('file-transfer', {
        name: userName, 
        fileName,       
        fileData        
      });
    });
  
    socket.on("toggle-host-only-mode", (enabled: boolean) => {
      if (currentRoom && activeRooms.has(currentRoom)) {
        // Check if the user is the host
        const room = activeRooms.get(currentRoom)!;
        if (socket.id === room.hostSocketId) {
          // Update the room's host-only mode status
          room.hostOnlyMode = enabled;
          
          // Broadcast the new status to all users in the room
          io.to(currentRoom).emit("host-only-mode-changed", enabled);
        }
      }
    });
  
    socket.on("change-username", ({ roomId, newUsername }: { roomId: string, newUsername: string }) => {
      if (currentRoom && activeRooms.has(currentRoom)) {
        const oldName = userName;
        // Update username in the room's user map
        activeRooms.get(currentRoom)!.users.set(socket.id, newUsername);
        
        // Update the current username
        userName = newUsername;
        
        // Optionally notify other users about the name change
        socket.to(currentRoom).emit("user-renamed", { 
          oldName, 
          newName: newUsername 
        });
      }
    });
  
    socket.on("disconnect", () => {
      if (currentRoom && activeRooms.has(currentRoom)) {
        const room = activeRooms.get(currentRoom)!;
        room.users.delete(socket.id);
  
        if (room.users.size === 0) {
          // Clear all room data
          activeRooms.delete(currentRoom);
          delete roomMessages[currentRoom];
          log(`Room ${currentRoom} has been cleared.`);
        } else {
          // Broadcast updated user count
          io.to(currentRoom).emit("user-count", room.users.size);
        }
      }
    });
  });

  // API endpoint for creating a new room and returning its code
  app.get("/api/create-room", (req, res) => {
    const roomCode = generateRoomCode();
    activeRooms.set(roomCode, {
      users: new Map(),
      hostSocketId: null,
      autoAllow: true,
      pendingRequests: new Map()
    });
    
    res.json({ roomCode });
  });

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(status).json({ message });
    throw err;
  });

  // Set up Vite in development or serve static files in production
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 5000; // Allows hosting services to assign a port
  const host = "0.0.0.0"; // Public-facing
  // const host = "127.0.0.1";
  
  try {
    server.listen({ port, host }, () => {
      log(`Server running on http://${host}:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
  
  
})();