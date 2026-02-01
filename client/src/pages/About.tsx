import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About ShareZet - Free Secure File Sharing Platform</title>
                <meta
                    name="description"
                    content="Learn about ShareZet, a free secure file and text sharing platform created to make online file transfer simple, private, and accessible to everyone. No registration, no limits, completely free."
                />
                <link rel="canonical" href="https://www.sharezet.com/about" />

                <meta property="og:title" content="About ShareZet - Free Secure File Sharing" />
                <meta property="og:description" content="ShareZet is a free platform making file sharing simple, private, and accessible to everyone." />
                <meta property="og:url" content="https://www.sharezet.com/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="bg-background min-h-screen">
                <Header />

                <main className="container mx-auto px-6 py-12 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="text-sm mb-6 text-muted-foreground" aria-label="Breadcrumb">
                        <a href="/" className="hover:text-foreground transition">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">About</span>
                    </nav>

                    <motion.article
                        className="prose prose-lg max-w-none dark:prose-invert"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold mb-6">About ShareZet</h1>

                        <p className="text-xl text-muted-foreground mb-8">
                            Making file and text sharing simple, secure, and accessible to everyone.
                        </p>

                        {/* Mission */}
                        <h2 id="mission">Our Mission</h2>
                        <p>
                            ShareZet was created with a simple goal: <strong>make file sharing instant, secure, and accessible without unnecessary barriers</strong>.
                            We believe that sharing a file or text snippet should be as easy as sending a message—no account creation,
                            no complex setups, and absolutely no compromises on privacy.
                        </p>
                        <p>
                            In a world where most online services require extensive personal information just to perform simple tasks,
                            ShareZet stands apart. We don't ask for your email, we don't track your activity, and we don't store your
                            files permanently. Our platform is designed for <strong>temporary, secure sharing</strong> between real people
                            who need to exchange information quickly and safely.
                        </p>

                        {/* Why ShareZet Exists */}
                        <h2 id="why">Why ShareZet Exists</h2>
                        <p>
                            We noticed a gap in the market: existing file sharing solutions either required account registration,
                            imposed strict file size limits for free users, or lacked proper security features. Students sharing
                            class notes, developers collaborating on code, and professionals sending documents deserved better.
                        </p>

                        <div className="bg-card p-6 rounded-lg border border-border my-6">
                            <h3 className="text-lg font-semibold mb-3">ShareZet fills this gap by offering:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Zero registration:</strong> No email, no password, no account—just start sharing</li>
                                <li><strong>End-to-end encryption:</strong> Your files are encrypted during transfer for maximum privacy</li>
                                <li><strong>Temporary storage:</strong> Files are automatically deleted after the session ends</li>
                                <li><strong>No file size manipulation:</strong> Your files stay exactly as you uploaded them</li>
                                <li><strong>Cross-device compatibility:</strong> Works on any device with a web browser</li>
                                <li><strong>Custom private rooms:</strong> Share with specific people using unique room codes</li>
                            </ul>
                        </div>

                        {/* Who We Serve */}
                        <h2 id="who-we-serve">Who Uses ShareZet</h2>
                        <p>
                            ShareZet is trusted by thousands of users worldwide who value privacy and simplicity:
                        </p>

                        <h3>Students & Educators</h3>
                        <p>
                            Share class notes, assignments, and study materials with classmates without creating yet another account.
                            Perfect for group projects and quick file exchanges during study sessions.
                        </p>

                        <h3>Developers & Tech Professionals</h3>
                        <p>
                            Quickly share code snippets, configuration files, or logs with teammates. No need to commit temporary
                            files to version control or use email for quick exchanges.
                        </p>

                        <h3>Remote Teams & Freelancers</h3>
                        <p>
                            Send files to clients or colleagues without requiring them to sign up for your preferred cloud storage service.
                            ShareZet works for everyone, regardless of their existing tools.
                        </p>

                        <h3>Privacy-Conscious Users</h3>
                        <p>
                            For those who prefer not to use services that collect personal data or track usage, ShareZet provides a
                            transparent, secure alternative for temporary file sharing needs.
                        </p>

                        {/* Technology & Security */}
                        <h2 id="technology">Technology & Security</h2>
                        <p>
                            ShareZet is built on modern web technologies to ensure speed, reliability, and security:
                        </p>

                        <h3>Security First</h3>
                        <ul>
                            <li><strong>HTTPS encryption:</strong> All connections are encrypted using industry-standard TLS</li>
                            <li><strong>End-to-end encryption:</strong> Files are encrypted during transfer</li>
                            <li><strong>No permanent storage:</strong> Files are deleted when rooms close</li>
                            <li><strong>Private rooms:</strong> Unique codes ensure only invited users can access content</li>
                            <li><strong>No tracking:</strong> We don't use analytics cookies or third-party trackers</li>
                        </ul>

                        <h3>Modern Architecture</h3>
                        <p>
                            Built with React and WebSocket technology, ShareZet provides real-time file sharing with minimal latency.
                            Our responsive design ensures the platform works seamlessly across all devices without requiring app installations.
                        </p>

                        {/* Values */}
                        <h2 id="values">Our Core Values</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-card p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold mb-3">🔒 Privacy</h3>
                                <p className="text-muted-foreground">
                                    Your data is yours. We don't collect, store, or sell personal information. Period.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold mb-3">⚡ Simplicity</h3>
                                <p className="text-muted-foreground">
                                    File sharing should be effortless. No accounts, no complex interfaces, just sharing.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold mb-3">🌍 Accessibility</h3>
                                <p className="text-muted-foreground">
                                    Everyone deserves access to secure file sharing, regardless of device or location.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold mb-3">🎯 Transparency</h3>
                                <p className="text-muted-foreground">
                                    We're upfront about how ShareZet works, what data we handle, and our limitations.
                                </p>
                            </div>
                        </div>

                        {/* Safe for Work/School */}
                        <h2 id="workplace-safe">Safe for Workplace & Educational Networks</h2>
                        <p>
                            ShareZet is designed as a <strong>legitimate business tool</strong>, not an anonymous file dumping service.
                            We implement proper security headers, clear branding, and transparent privacy policies to ensure our platform
                            is not blocked by corporate or educational firewalls.
                        </p>
                        <p>
                            Our positioning as a professional collaboration tool for students and professionals means you can confidently
                            use ShareZet at work, school, or on public networks without concerns about network restrictions.
                        </p>

                        {/* Commitment */}
                        <h2 id="commitment">Our Commitment to You</h2>
                        <p>
                            ShareZet will always remain:
                        </p>
                        <ul>
                            <li>✅ <strong>Free to use</strong> with no hidden fees or premium tiers that lock basic features</li>
                            <li>✅ <strong>Privacy-focused</strong> with no data collection or selling of user information</li>
                            <li>✅ <strong>Simple and accessible</strong> without requiring registration or downloads</li>
                            <li>✅ <strong>Secure by default</strong> with encryption and temporary storage</li>
                            <li>✅ <strong>Continuously improved</strong> based on user needs and feedback</li>
                        </ul>

                        {/* Contact */}
                        <h2 id="contact">Get in Touch</h2>
                        <p>
                            Have questions, feedback, or suggestions? We'd love to hear from you:
                        </p>
                        <div className="bg-gradient-to-r from-[#00b4ff]/10 to-[#0066cc]/10 p-6 rounded-lg border border-[#00b4ff]/20 my-6">
                            <p className="mb-2"><strong>Email:</strong> support@sharezet.com</p>
                            <p className="mb-0"><strong>GitHub:</strong> <a href="https://github.com/sharezet" className="text-[#00b4ff] hover:underline">github.com/sharezet</a></p>
                        </div>

                        <p className="text-muted-foreground italic">
                            Thank you for choosing ShareZet. We're committed to providing the best possible file sharing experience
                            while respecting your privacy and valuing your time.
                        </p>

                        {/* CTA */}
                        <div className="bg-card border border-border p-8 rounded-lg text-center mt-12">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start Sharing?</h3>
                            <p className="text-muted-foreground mb-6">
                                Experience secure, instant file sharing with no registration required.
                            </p>
                            <a
                                href="/room"
                                className="inline-block bg-gradient-to-r from-[#00b4ff] to-[#0066cc] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                            >
                                Create a Room Now →
                            </a>
                        </div>
                    </motion.article>
                </main>

                <Footer />
            </div>
        </>
    );
}
