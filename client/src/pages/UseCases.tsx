import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import {
    FaGraduationCap,
    FaCheckCircle,
    FaCode,
    FaBriefcase,
    FaUsers,
    FaBolt,
    FaShieldAlt,
    FaGlobe
} from "react-icons/fa";

export default function UseCases() {
    return (
        <>
            <Helmet>
                <title>File Sharing Use Cases - Students, Professionals & Teams | ShareZet</title>
                <meta
                    name="description"
                    content="Discover how students, developers, professionals, and teams use ShareZet for secure file sharing. Perfect for class notes, code collaboration, client files, and project sharing."
                />
                <link rel="canonical" href="https://www.sharezet.com/use-cases" />

                <meta property="og:title" content="File Sharing Use Cases - Students & Professionals | ShareZet" />
                <meta property="og:description" content="How students, professionals, and teams use ShareZet for secure file sharing without registration." />
                <meta property="og:url" content="https://www.sharezet.com/use-cases" />
            </Helmet>

            <div className="bg-background min-h-screen">
                <Header />

                <main className="container mx-auto px-6 py-12 max-w-6xl">
                    {/* Breadcrumb */}
                    <nav className="text-sm mb-6 text-muted-foreground" aria-label="Breadcrumb">
                        <a href="/" className="hover:text-foreground transition">Home</a>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">Use Cases</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">File Sharing Use Cases</h1>
                        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
                            ShareZet is trusted by students, professionals, and teams worldwide for secure, instant file sharing. Here's how different users benefit from our platform.
                        </p>

                        {/* Use Cases Grid */}
                        <div className="space-y-12">

                            {/* Students & Educators */}
                            <motion.section
                                className="bg-card p-8 rounded-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#00b4ff]/20 flex items-center justify-center flex-shrink-0">
                                        <FaGraduationCap className="text-[#00b4ff] text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">For Students & Educators</h2>
                                        <p className="text-muted-foreground">Perfect for academic collaboration and file sharing</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mt-6 mb-3">Common Scenarios:</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Sharing Class Notes:</strong> Quickly send lecture notes, study guides, or exam prep materials to classmates without emailing large PDF files or using cloud storage that requires account sign-ups
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Group Project Collaboration:</strong> Share research documents, presentation slides, or project files with team members in real-time, eliminating the need for everyone to have the same cloud storage service
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Assignment Submission:</strong> Temporarily share completed assignments with study partners for review before final submission, then automatically delete them after the session ends
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Study Resource Exchange:</strong> Transfer textbook chapters, practice problems, or exam solutions between students without keeping files stored permanently
                                        </div>
                                    </li>
                                </ul>

                                <div className="bg-[#00b4ff]/10 p-4 rounded-lg mt-6 border border-[#00b4ff]/20">
                                    <p className="text-sm"><strong>Why students choose ShareZet:</strong> No registration means no spam emails, no data tracking, and no monthly storage limits. Works on school networks without being blocked like some file-sharing sites.</p>
                                </div>
                            </motion.section>

                            {/* Developers & Tech Professionals */}
                            <motion.section
                                className="bg-card p-8 rounded-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#00b4ff]/20 flex items-center justify-center flex-shrink-0">
                                        <FaCode className="text-[#00b4ff] text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">For Developers & Tech Professionals</h2>
                                        <p className="text-muted-foreground">Streamline code sharing and technical collaboration</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mt-6 mb-3">Common Scenarios:</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Quick Code Snippet Sharing:</strong> Send configuration files, code samples, or debugging logs to colleagues without committing temporary files to version control or cluttering Slack channels with large code blocks
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Remote Pair Programming:</strong> Transfer work-in-progress files between development environments when screen sharing isn't practical or when quick file exchange is needed during remote collaboration
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Log File Analysis:</strong> Share server logs, error dumps, or debugging output with remote team members for troubleshooting without uploading sensitive data to third-party services
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Technical Documentation Transfer:</strong> Send API documentation, architecture diagrams, or technical specifications to freelancers or contractors without granting them access to your company's document management system
                                        </div>
                                    </li>
                                </ul>

                                <div className="bg-[#00b4ff]/10 p-4 rounded-lg mt-6 border border-[#00b4ff]/20">
                                    <p className="text-sm"><strong>Why developers choose ShareZet:</strong> Preserves code formatting, supports any file type, no file size manipulation. Perfect for quick transfers without the overhead of Git repos or cloud storage accounts.</p>
                                </div>
                            </motion.section>

                            {/* Business Professionals */}
                            <motion.section
                                className="bg-card p-8 rounded-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#00b4ff]/20 flex items-center justify-center flex-shrink-0">
                                        <FaBriefcase className="text-[#00b4ff] text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">For Business Professionals & Freelancers</h2>
                                        <p className="text-muted-foreground">Simplify client communication and project delivery</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mt-6 mb-3">Common Scenarios:</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Client File Delivery:</strong> Send proposals, contracts, invoices, or deliverables to clients without requiring them to create accounts on your preferred cloud storage platform
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Quick Proposal Sharing:</strong> Share draft presentations, mockups, or project proposals with stakeholders for immediate review without formal file sharing workflows
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Temporary Project Files:</strong> Exchange work files with contractors, vendors, or temporary team members without granting permanent access to company systems
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Cross-Company Collaboration:</strong> Share documents with partners from different organizations who use incompatible file-sharing systems, providing a neutral platform everyone can access
                                        </div>
                                    </li>
                                </ul>

                                <div className="bg-[#00b4ff]/10 p-4 rounded-lg mt-6 border border-[#00b4ff]/20">
                                    <p className="text-sm"><strong>Why professionals choose ShareZet:</strong> Professional appearance, no ads or suspicious links to send to clients, works on corporate networks, and respects recipient privacy by not requiring sign-ups.</p>
                                </div>
                            </motion.section>

                            {/* Remote Teams */}
                            <motion.section
                                className="bg-card p-8 rounded-lg border border-border"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#00b4ff]/20 flex items-center justify-center flex-shrink-0">
                                        <FaUsers className="text-[#00b4ff] text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">For Remote Teams & Distributed Workforces</h2>
                                        <p className="text-muted-foreground">Facilitate seamless cross-device file sharing</p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold mt-6 mb-3">Common Scenarios:</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Meeting File Distribution:</strong> Quickly distribute meeting agendas, presentation materials, or reference documents to participants before or during virtual meetings
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Device-to-Device Transfers:</strong> Move files from work laptop to personal tablet or phone when working remotely, without using personal cloud accounts on company devices
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Quick Team Updates:</strong> Share updated spreadsheets, reports, or analysis files after meetings without waiting for formal approvals to modify shared drives
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#00b4ff] mt-1 flex-shrink-0" />
                                        <div>
                                            <strong>Onboarding New Members:</strong> Provide training materials, templates, or resources to new team members before they receive full system access
                                        </div>
                                    </li>
                                </ul>

                                <div className="bg-[#00b4ff]/10 p-4 rounded-lg mt-6 border border-[#00b4ff]/20">
                                    <p className="text-sm"><strong>Why teams choose ShareZet:</strong> Works across all devices and operating systems, no IT approvals needed, instant access without account management overhead.</p>
                                </div>
                            </motion.section>

                        </div>

                        {/* Key Benefits Summary */}
                        <motion.section
                            className="mt-16 bg-gradient-to-r from-[#00b4ff]/10 to-[#0066cc]/10 p-8 rounded-lg border border-[#00b4ff]/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-center">Why ShareZet Works for Everyone</h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#00b4ff]/20 flex items-center justify-center mx-auto mb-4">
                                        <FaBolt className="text-[#00b4ff] text-2xl" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Instant Access</h3>
                                    <p className="text-sm text-muted-foreground">Create a room and start sharing in seconds. No registration, no waiting.</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#00b4ff]/20 flex items-center justify-center mx-auto mb-4">
                                        <FaShieldAlt className="text-[#00b4ff] text-2xl" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Privacy Focused</h3>
                                    <p className="text-sm text-muted-foreground">End-to-end encryption and temporary storage keep your files private and secure.</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#00b4ff]/20 flex items-center justify-center mx-auto mb-4">
                                        <FaGlobe className="text-[#00b4ff] text-2xl" />
                                    </div>
                                    <h3 className="font-semibold mb-3">Universal Compatibility</h3>
                                    <p className="text-sm text-muted-foreground">Works on any device with a browser. No apps, no platform restrictions.</p>
                                </div>
                            </div>
                        </motion.section>

                        {/* CTA */}
                        <motion.div
                            className="mt-12 text-center bg-card border border-border p-8 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">Ready to Start Sharing?</h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Join thousands of students, professionals, and teams who trust ShareZet for secure, instant file sharing.
                            </p>
                            <a
                                href="/room"
                                className="inline-block bg-gradient-to-r from-[#00b4ff] to-[#0066cc] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                            >
                                Create a Free Room →
                            </a>
                        </motion.div>
                    </motion.div>
                </main>

                <Footer />
            </div>
        </>
    );
}
