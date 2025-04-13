import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global CSS for fonts
const globalStyles = document.createElement('style');
globalStyles.textContent = `
  body {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }
  
  .code-font {
    font-family: 'JetBrains Mono', monospace;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1E1E1E;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #4B5563;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #9333EA;
  }
`;
document.head.appendChild(globalStyles);

createRoot(document.getElementById("root")!).render(<App />);
