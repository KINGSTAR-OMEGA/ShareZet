import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-90 pt-16 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground  text-gray-200 mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">1. Information We Do Not Collect</h2>
            <p>ShareZet is designed with privacy in mind. We do not:</p>
            <ul>
              <li>Require registration or user accounts</li>
              <li>Save chat messages, files, or code snippets</li>
              <li>Track IP addresses, device IDs, or geolocation data</li>
              <li>Use cookies, analytics, or third-party trackers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">2. How ShareZet Works</h2>
            <p>
              Chat rooms are created using unique codes. All messages and files exist only temporarily during your session. Once the room is closed or no one remains in the room, all content is permanently deleted. No data is stored on our servers or in the cloud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">3. Data Usage</h2>
            <p>We do not use or process any user data for:</p>
            <ul>
              <li>Marketing</li>
              <li>Profiling</li>
              <li>Advertising</li>
              <li>Analytics</li>
            </ul>
            <p>
              Any temporary data (such as messages or files shared in a room) remains in memory and is lost after the session ends.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">4. Cookies and Tracking</h2>
            <p>
              We do not use cookies or tracking technologies. ShareZet is fully functional without storing any data in your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">5. Third-Party Services</h2>
            <p>
              We may use secure infrastructure providers, but:
            </p>
            <ul>
              <li>No user data is passed to or stored by third parties</li>
              <li>We do not use any external analytics or advertising platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">6. Security</h2>
            <p>
              All connections to ShareZet are encrypted using HTTPS. Since no personal data is stored, there is minimal risk of data exposure or breaches. We recommend users avoid sharing sensitive personal information in any chat or file.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">7. User Rights</h2>
            <p>
              Because we do not collect or store data, there is no personal information to access, modify, or delete. If you have questions or concerns about privacy, feel free to contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect improvements or legal compliance. Any changes will be posted here with the updated date.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
