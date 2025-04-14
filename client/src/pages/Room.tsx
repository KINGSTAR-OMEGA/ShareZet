import { useEffect, useState } from "react";
import "@/styles.css"; // Adjust the path if needed

function Room() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Load external script
    const script = document.createElement("script");
    script.src = "/script.js"; // Put script.js in the public folder
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>ShareZet</h2>
        <div className="room-input-container">
          <input type="text" id="roomCodeInput" placeholder="Enter Room Code" />
          <button>Update Room</button>
        </div>
        <div className="qr-code-container">
          <button onClick={toggleQRCode}>Show QR Code</button>
          <div id="qrcode" style={{ display: showQRCode ? "block" : "none" }}></div>
        </div>

        <div className="user-count">Users: <span id="userCount">1</span></div>
        <div className="settings-container">
          <button id="settingsButton" className="settings-button" onClick={toggleSettings}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="settingsPopup" className="settings-popup" style={{ display: showSettings ? "block" : "none" }}>
        <div className="settings-popup-content">
          <div className="settings-header">
            <h3>Settings</h3>
            <button id="closeSettings" className="close-button" onClick={toggleSettings}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="settings-body">
            <div className="setting-item" id="hostModeControl" style={{ display: "none" }}>
              <label htmlFor="hostOnlyToggle">Host Only Mode</label>
              <label className="switch" style={{ marginLeft: "39%" }}>
                <input type="checkbox" id="hostOnlyToggle" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="setting-item">
              <label htmlFor="fontSizeSelect">Font Size</label>
              <div className="font-size-selector">
                <select id="fontSizeSelect" className="select-dropdown" defaultValue="14">
                  {[...Array(11)].map((_, i) => {
                    const value = 10 + i;
                    return <option key={value} value={value}>{value}px</option>;
                  })}
                </select>
              </div>
            </div>
            <div id="joinRequests"></div>
            <label>
              <input type="checkbox" id="autoAllowToggle" defaultChecked />
              Auto Allow Users
            </label>
            <div>
              <label htmlFor="usernameInput">Change Username</label>
              <div className="username-input-container">
                <input type="text" id="usernameInput" className="settings-input" placeholder="Enter new username" />
                <button id="saveUsername" className="settings-save-button">Save</button>
              </div>
            </div>
            <div className="setting-item">
              <button id="exportChat" className="export-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
                  <path d="M12 16c-.4 0-.8-.1-1.1-.4l-3.5-3.5c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l1.4 1.4V6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.4l1.4-1.4c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1l-3.5 3.5c-.2.3-.6.4-1 .4z"></path>
                  <path d="M18 20H6c-1.1 0-2-.9-2-2v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v1h10v-1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 1.1-.9 2-2 2z"></path>
                </svg>
                Export Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="message-container" id="messages">
        {showQRCode && (
          <div id="qrCodeOverlay">
            <div id="qrcode"></div>
          </div>
        )}
      </div>

      <div className="hostmode">
        <span>
          <button className="toggle-btn">
            <span id="arrowIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
        </span>
        <div className="messageing-conttainer" id="hiddenContainer">
          <div className="message-input-container">
            <textarea id="messageInput" placeholder="Type a message..." />
            <button>Send</button>
          </div>
          <div className="file-input-container">
            <input type="file" id="fileInput" multiple />
            <button id="attachButton">sendFile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;