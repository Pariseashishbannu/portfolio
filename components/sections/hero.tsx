"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const TechConstellation = dynamic(() => import("@/components/ui/tech-constellation").then(mod => mod.TechConstellation), {
    ssr: false,
    loading: () => <div className="w-[600px] h-[600px] animate-pulse bg-white/5 rounded-full" />
});

export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col gap-8 z-10">

                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Badge text="Fullstack Developer" />
                            <Badge text="Tech Innovator" />
                            <Badge text="Team Lead" />
                        </motion.div>

                        <div className="flex flex-col gap-2">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                            >
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Parise Ashish</span>
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                            >
                                Software Engineer
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light"
                        >
                            I build accessible, pixel-perfect, performant web experiences. Focused on building scalable web applications with React, Django, and Modern Technologies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href={siteConfig.links.resume}
                                target="_blank"
                                className="px-8 py-3 rounded-xl bg-[#2a1d50] text-purple-100 border border-purple-500/30 font-medium hover:bg-purple-900/50 transition-all shadow-[0_0_20px_-5px_#7c3aed]"
                            >
                                Resume
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-xl bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-colors"
                            >
                                My Projects
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Tech Constellation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex-1 w-full max-w-[600px] relative flex justify-center items-center"
                    >
                        <TechConstellation />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">{text}</span>
        </div>
    );
}
