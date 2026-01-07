"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: Text Content (Resume Intro) */}
                    <div className="flex-1 flex flex-col gap-6 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="text-secondary text-xs font-mono tracking-wider">AVAILABLE FOR WORK</span>
                        </motion.div>

                        <div className="flex flex-col">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] text-glow"
                            >
                                Building the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">future web.</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed font-light"
                        >
                            I am <span className="text-white font-medium">{siteConfig.name}</span>, a {siteConfig.title} focused on crafting tangible, distinct, and accessible digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4 mt-4"
                        >
                            <a
                                href="#work"
                                className="px-8 py-3 rounded-full bg-white text-background font-medium hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                View Work <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href={siteConfig.links.resume}
                                target="_blank"
                                className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                            >
                                Download Resume <Download className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Glass Card Profile / Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex-1 w-full max-w-md relative"
                    >
                        {/* Card Glow */}
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-50" />

                        <div className="relative p-8 rounded-2xl glass-card flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                <div>
                                    <p className="text-xs text-secondary uppercase tracking-wider font-mono">Location</p>
                                    <p className="text-white font-medium">India</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-secondary uppercase tracking-wider font-mono">Experience</p>
                                    <p className="text-white font-medium">2+ Years</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-xs text-secondary uppercase tracking-wider font-mono">Expertise</p>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "TypeScript", "Node.js"].map(tech => (
                                        <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-sm text-white/80 border border-white/5 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
