import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function CookiePolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-gray-200">Cookies Policy</h1>
          <p className="text-muted-foreground">Last updated: May 2025</p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <section className="mb-8">
             <p>
         At ShareZet, we respect your privacy and are committed to transparency. This 
Cookies Policy explains how we handle cookies and similar technologies when 
you use our platform .
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">1. Do We Use Cookies?</h2>
            <p>No. ShareZet does not use cookies.</p>
            <p>We do not store any data in your browser or use any form of tracking technology. Our platform is designed to be 100% privacy-focused and operates without:</p>
            <ul>
              <li>Session cookies</li>
              <li>Persistent cookies</li>
              <li>Third-party cookies</li>
              <li>Tracking pixels or beacons</li>
              <li>Browser fingerprinting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">2. Why No Cookies?</h2>
            <p>
              ShareZet was built with a zero-data policy. We do not:
            </p>
            <ul>
              <li>Collect analytics</li>
              <li>Track user behavior</li>
              <li>Display ads or use marketing platforms</li>
              <li>Store user preferences or login states</li>
            </ul>
            <p>
              All functionality — including chat, file sharing, and room creation — is provided without requiring cookies or local storage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">3. Third-Party Links or Embeds</h2>
            <p>
              While ShareZet does not use cookies, pages may include external links (e.g., GitHub, documentation, or external resources).
            </p>
            <p>
              Visiting these links may subject you to third-party cookie policies outside our control. We recommend reviewing their privacy and cookie policies separately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">4. Updates to This Policy</h2>
            <p>
              If we ever implement optional cookies for new features, we will Update this policy accordingly
            </p>
            
          </section>
        </motion.div>
      </div>
    </div>
  );
}