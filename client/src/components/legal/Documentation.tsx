import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-gray-300 pt-16 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <a
            href="/"
            className="inline-flex items-center text-sky-400 hover:text-white transition"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>

          <h1 className="text-4xl font-bold mt-6 text-gray-200">ShareZet Documentation</h1>
          <p className="text-sm text-gray-500 mt-2">Last updated: May 2025</p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Welcome to ShareZet! This documentation will guide users and developers through how to use, understand, and contribute to the ShareZet platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10"
        >
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Overview</h2>
            <p className="text-gray-300">
              ShareZet is a fast, anonymous, and private file and message sharing platform. No login is required, and no data is saved to the cloud. Users can instantly share text, code, images, and files in temporary chat rooms via room codes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li><span className="text-emerald-500">Anonymous usage</span> – No registration or login required.</li>
              <li><span className="text-emerald-500">Temporary chat rooms</span> – Created via unique room codes.</li>
              <li><span className="text-emerald-500">Instant sharing</span> – Send text, images, code, and files.</li>
              <li><span className="text-emerald-500">Room permissions</span> – Owners can restrict sending messages.</li>
              <li><span className="text-emerald-500">Chat export</span> – Export conversations to your device.</li>
              <li><span className="text-emerald-500">No cloud storage</span> – Data vanishes when the session ends.</li>
              <li><span className="text-emerald-500">Unlimited users</span> – Anyone with the code can join.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Getting Started</h2>

            <h3 className="text-lg font-semibold text-sky-400 mt-4">Creating a Room</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-1 mt-2">
              <li>Go to the ShareZet homepage.</li>
              <li>Click on <strong>"Get Started"</strong>.</li>
              <li>Enter your unique room code and click on <strong>"Update Room"</strong>.</li>
              <li>Share this room code or QR code with others to invite them.</li>
            </ol>

            <h3 className="text-lg font-semibold text-sky-400 mt-6">Joining a Room</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-1 mt-2">
              <li>Enter the room code and click on <strong>"Update Room"</strong>.</li>
              <li>Set a nickname (optional).</li>
              <li>Start chatting or sharing files.</li>
            </ol>

            <h3 className="text-lg font-semibold text-sky-400 mt-6">Sending Messages & Files</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
              <li>Type into the chat input to send a message.</li>
              <li>Use the upload button to send a file or image.</li>
              <li>Paste or drag & drop code snippets to format them.</li>
            </ul>

            <h3 className="text-lg font-semibold text-sky-400 mt-6">Exporting Chat</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
              <li>Click on the <strong>"Export Chat"</strong> option.</li>
              <li>Download the session as a text file.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Room Settings</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Restrict message sending in room (host-only mode).</li>
              <li>Change font size.</li>
              <li>Export chats as PDF.</li>
              <li>Change your nickname anytime.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Privacy & Security</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>No tracking or analytics.</li>
              <li>No message or file storage on any server.</li>
              <li>All data is local and temporary.</li>
              <li>Once a room is closed, all data is lost forever.</li>
              <li>No user data is collected or linked to identity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. FAQs</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="text-lg font-medium text-white">Do I need to register?</h4>
                <p>No. ShareZet works without any user account.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Can I retrieve old chat messages?</h4>
                <p>No. All sessions are temporary and deleted after use.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Is ShareZet free?</h4>
                <p>Yes, it's 100% free to use.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Can I use ShareZet on mobile?</h4>
                <p>Yes, it’s fully responsive and mobile-friendly.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Contact Support</h2>
            <p className="text-gray-300">Need help or have suggestions? Reach out to us anytime:</p>
            {/* <p className="mt-2 text-gray-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@sharezet.com" className="text-sky-400 hover:underline">
               
              </a>
            </p> */}
          </section>
        </motion.div>
      </div>
    </div>
  );
}
