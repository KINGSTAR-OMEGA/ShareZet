import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from 'path';
import fs from 'fs';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });
  
  // Add an endpoint to serve the room.html file
  app.get('/room.html', (req, res) => {
    const roomHtmlPath = path.resolve(process.cwd(), 'attached_assets', 'room.html');
    
    // Check if the file exists
    if (fs.existsSync(roomHtmlPath)) {
      res.sendFile(roomHtmlPath);
    } else {
      res.status(404).send('Room page not found');
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
