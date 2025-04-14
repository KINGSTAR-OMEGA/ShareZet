const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 50e6, 
});
const path = require("path");
const roomMessages = {}; // Stores messages per room
const activeUsers = {}; // Tracks active users per room


app.use(express.static("public"));

const activeRooms = new Map();

// Generate random 4-digit code
function generateRoomCode() {
  const code = Math.floor(1000 + Math.random() * 9000).toString();
  return !activeRooms.has(code) ? code : generateRoomCode();
}

// Generate funny name
function generateFunnyName() {
  
  const adjectives = ["Witty", "Grumpy", "Happy", "Sleepy", "Sassy", "Sneaky","Elegant",
                      "Curious", "Brave", "Mysterious", "Clumsy", "Energetic","Majestic", 
                      "Quirky", "Gentle", "Fierce", "Mischievous", "Bashful","Wise",
                      "Radiant", "Wise", "Playful", "Charming", "Grouchy", "Dazzling"];


  const animals = ["Penguin", "Tiger", "Koala", "Sloth", "Unicorn", "Panda",
                  "Dolphin", "Fox", "Owl", "Elephant", "Raccoon", "Hedgehog",
                  "Flamingo", "Octopus", "Narwhal", "Cheetah", "Lemur", "Otter",
                  "Peacock", "Beaver", "Jaguar", "Platypus", "Chameleon", "Walrus"];


  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adjective} ${animal}`;
}

// Serve main page
app.get("/", (req, res) => {
  const roomCode = generateRoomCode();
  //activeRooms.set(roomCode, { users: new Map(),hostSocketId: null });
  activeRooms.set(roomCode, {
    users: new Map(),
    hostSocketId: null,
    autoAllow: true,
    pendingRequests: new Map()
  });
  

  res.redirect(`/${roomCode}`);
});

// Serve room page
app.get("/:roomId", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "room.html"));
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  let currentRoom = null;
  let userName = null;

  socket.on("join-room", (roomId) => {
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
  
    const room = activeRooms.get(roomId);
  
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
      io.to(room.hostSocketId).emit("join-request", {
        socketId: socket.id,
        userName
      });
    }
  
    function joinUser() {
      socket.join(roomId);
      room.users.set(socket.id, userName);
  
      socket.emit("user-name", userName);
      socket.emit("host-status", socket.id === room.hostSocketId);
      socket.emit("host-only-mode-changed", room.hostOnlyMode || false);
      socket.emit("chat-history", roomMessages[roomId] || []);
  
      io.to(roomId).emit("user-count", room.users.size);
    }
  });
  socket.on("approve-user", (userSocketId) => {
    const room = activeRooms.get(currentRoom);
    if (socket.id === room.hostSocketId && room.pendingRequests.has(userSocketId)) {
      const approvedName = room.pendingRequests.get(userSocketId);
      io.to(userSocketId).emit("join-approved", approvedName);
      room.pendingRequests.delete(userSocketId);
    }
  });
  
  socket.on("deny-user", (userSocketId) => {
    const room = activeRooms.get(currentRoom);
    if (socket.id === room.hostSocketId && room.pendingRequests.has(userSocketId)) {
      io.to(userSocketId).emit("join-denied");
      room.pendingRequests.delete(userSocketId);
    }
  });
  
  socket.on("toggle-auto-allow", (enabled) => {
    if (currentRoom && activeRooms.has(currentRoom)) {
      const room = activeRooms.get(currentRoom);
      if (socket.id === room.hostSocketId) {
        room.autoAllow = enabled;
        io.to(currentRoom).emit("auto-allow-updated", enabled);
      }
    }
  });
    

  // socket.on("join-room", (roomId) => {
  //   currentRoom = roomId;
  //   userName = generateFunnyName();
  //   socket.join(roomId);


  //   if (!activeRooms.has(roomId)) {
  //     activeRooms.set(roomId, { users: new Map(), hostSocketId: socket.id });
  //   } else if (activeRooms.get(roomId).users.size === 0) {
  //     // If room exists but is empty, current user becomes host
  //     activeRooms.get(roomId).hostSocketId = socket.id;
  //   }

  //   if (activeRooms.has(roomId)) {
  //     const hostOnlyMode = activeRooms.get(roomId).hostOnlyMode || false;
  //     socket.emit("host-only-mode-changed", hostOnlyMode);
  //   }
    
    
  //   if (roomMessages[roomId]) {

  //     socket.emit("chat-history", roomMessages[roomId]);
  //   } else {
  //     roomMessages[roomId] = []; // Initialize room messages
  //   }


  //   activeRooms.get(roomId).users.set(socket.id, userName);

  //   const isHost = socket.id === activeRooms.get(roomId).hostSocketId;
  //   socket.emit("host-status", isHost);

  //   // Send user name to the client
  //   socket.emit("user-name", userName);

  //   // Broadcast user count
  //   io.to(roomId).emit("user-count", activeRooms.get(roomId).users.size);
  // });

  socket.on("chat-message", ({ roomId, message }) => {
  const userMessage = { name: userName, message };

    // Save the message in memory
    if (roomMessages[roomId]) {
      roomMessages[roomId].push(userMessage);
    }


    if (currentRoom && userName) {
      io.to(currentRoom).emit("chat-message", { name: userName, message });
    }
  });

  
// Handle file transfer
socket.on('file-transfer', ({roomId, fileName, fileData }) => {
  //save in memory 
  const userMessage = {userName, name: fileName, fileData };

  if (roomMessages[roomId]) {
    roomMessages[roomId].push(userMessage);
  }


    // Broadcast the file to all users in the room

    io.to(currentRoom).emit('file-transfer', {
        name: userName, 
        fileName,       
        fileData        
    });
});

// Add to your socket.io connection handling
socket.on("toggle-host-only-mode", (enabled) => {
  if (currentRoom && activeRooms.has(currentRoom)) {
    // Check if the user is the host
    if (socket.id === activeRooms.get(currentRoom).hostSocketId) {
      // Update the room's host-only mode status
      activeRooms.get(currentRoom).hostOnlyMode = enabled;
      
      // Broadcast the new status to all users in the room
      io.to(currentRoom).emit("host-only-mode-changed", enabled);
    }
  }
});


socket.on("change-username", ({ roomId, newUsername }) => {
  if (currentRoom && activeRooms.has(currentRoom)) {
    // Update username in the room's user map
    activeRooms.get(currentRoom).users.set(socket.id, newUsername);
    
    // Update the current username
    userName = newUsername;
    
    // Optionally notify other users about the name change
    socket.to(currentRoom).emit("user-renamed", { 
      oldName: userName, 
      newName: newUsername 
    });
  }
});

socket.on("disconnect", () => {
  if (currentRoom && activeRooms.has(currentRoom)) {
      const room = activeRooms.get(currentRoom);
      room.users.delete(socket.id);

      if (room.users.size === 0) {
          // Clear all room data
          activeRooms.delete(currentRoom);
          delete roomMessages[currentRoom];
          console.log(`Room ${currentRoom} has been cleared.`);
      } else {
          // Broadcast updated user count
          io.to(currentRoom).emit("user-count", room.users.size);
      }
   }
  });  
});
http.listen(3000, () => {
  console.log("Server running on port 3000");
});
