import { motion } from "framer-motion";
import { Code, Database, Layout, Globe, Github, Terminal, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { lazy, Suspense } from "react";

const GravitySkills = lazy(() => import("./GravitySkills"));

const BentoGrid = () => {

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">About & Expertise</h2>
                    <p className="text-gray-400">A glimpse into my world and technical toolkit.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[200px]">

                    {/* About Block - Large */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 rounded-3xl bg-surface border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors" />

                        <div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <UserIcon />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">The Developer</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                I'm Parise Ashish, a detail-oriented Software Engineer. I specialize in building robust backends with <span className="text-white">Django</span> and dynamic frontends with <span className="text-white">React</span>. My approach combines technical precision with a focus on user experience.
                            </p>
                            <br />
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Currently based in Bhadrachalam, I'm always exploring new technologies to solve real-world problems.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tech Stack Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 row-span-2 rounded-3xl bg-surface border border-white/5 p-8 hover:border-white/10 transition-colors relative overflow-hidden group"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors" />

                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Terminal size={20} className="text-gray-400" /> Stack
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {["Python", "Django", "JavaScript", "React", "PostgreSQL", "Git", "Tailwind"].map(skill => (
                                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-sm border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Database size={16} /> <span>DB Schema Design</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Layout size={16} /> <span>Pixel Perfect UI</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Github size={16} /> <span>CI/CD Pipelines</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* Stat Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl bg-surface border border-white/5 p-6 flex flex-col justify-center items-center hover:border-white/10 transition-colors"
                    >
                        <span className="text-4xl font-bold text-white mb-1">71%</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">B.Tech Score</span>
                    </motion.div>

                    {/* Stat Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-3xl bg-surface border border-white/5 p-6 flex flex-col justify-center items-center hover:border-white/10 transition-colors"
                    >
                        <span className="text-4xl font-bold text-white mb-1">2+</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Major Projects</span>
                    </motion.div>

                    {/* Location Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/5 p-6 flex items-center justify-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-noise opacity-20" />
                        <Globe className="text-white/50 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                        <span className="absolute bottom-4 text-xs font-medium text-white/70">Willing to Relocate</span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)

export default BentoGrid;
