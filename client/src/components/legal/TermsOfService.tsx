import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground  text-gray-200 mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: May 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="mb-6">
            Welcome to ShareZet, a fast and secure platform for anonymous message and file sharing. 
            By using ShareZet, you agree to the following terms and conditions. Please read them carefully.
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ShareZet (the "Service"), you agree to be legally bound by these Terms and Conditions and our Privacy Policy. 
              If you do not agree, please do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">2. Service Overview</h2>
            <p>ShareZet allows users to:</p>
            <ul>
              <li>Share messages, files and codes instantly</li>
              <li>Join or create rooms using unique codes</li>
              <li>Participate anonymously or set a display name</li>
              <li>Control room settings</li>
              <li>Export conversations locally</li>
              <li>Enjoy a serverless experience – no data is stored on the cloud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">3. User Responsibilities</h2>
            <p>You agree to use ShareZet lawfully and responsibly. You must not:</p>
            <ul>
              <li>Share illegal, harmful, or offensive content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others or impersonate anyone</li>
              <li>Upload malicious software or disrupt the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">4. Data and Privacy</h2>
            <p>Your privacy is central to ShareZet. We:</p>
            <ul>
              <li>Do not store chat messages, files, or personal data</li>
              <li>Do not require logins or user accounts</li>
              <li>Do not track user behavior or activity</li>
            </ul>
            <p>All data is temporary and disappears after your session ends.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">5. Room Usage</h2>
            <p>
              Room codes are used to access specific chats. Anyone with a code can message in chat room, 
              unless restricted by settings. Rooms are ephemeral and not preserved after they close.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">6. Intellectual Property</h2>
            <p>
              All content shared via ShareZet remains the property of its respective owner. 
              You are responsible for ensuring that any content you share does not infringe on third party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">7. Changes to Terms</h2>
            <p>
              These Terms may be updated from time to time. Continued use of the Service after changes 
              means you accept the updated terms.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}