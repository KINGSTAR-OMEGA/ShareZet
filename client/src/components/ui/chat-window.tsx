import { useState } from "react";
import { FaUser, FaUserCircle, FaPaperPlane } from "react-icons/fa";

export default function ChatWindow() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-xl shadow-primary/10">
      <div className="bg-background px-4 pt-3 pb-2 border-b border-border flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 flex-1 text-center">
          <span className="bg-muted rounded-md px-4 py-1 text-xs text-muted-foreground">ShareZet Room</span>
        </div>
      </div>

      <div className="p-6 bg-card">
        <div className="flex mb-4 space-x-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <FaUser />
          </div>
          <div className="flex-1 bg-card/70 backdrop-blur-md p-3 rounded-lg">
            <p className="text-muted-foreground">Hey, here's the code snippet we discussed!</p>
          </div>
        </div>

        <div className="bg-background rounded-lg p-4 mb-4 text-sm overflow-hidden">
          <pre><code className="text-muted-foreground">
            {`function shareData(text, files) {
  // Create a secure room with encryption
  const roomId = "secureRoom123";
  // Send data to recipients in the room
  return sendSecurely(roomId, text, files);
}`}
          </code></pre>
        </div>

        <div className="flex justify-end mb-4 space-x-4">
          <div className="flex-1 bg-card/70 backdrop-blur-md p-3 rounded-lg">
            <p className="text-muted-foreground">Thanks! I'll implement this right away.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
            <FaUserCircle />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full bg-background border border-border rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-r-lg transition">
            <span className="sr-only">Send</span>
            <FaPaperPlane />
          </button>

        </div>
      </div>
    </div>
  );
}
