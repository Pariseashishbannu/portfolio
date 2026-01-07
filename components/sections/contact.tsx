"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />

            <Container>
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-secondary backdrop-blur-sm">
                            What's Next?
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-8"
                    >
                        Let's work <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">together.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-light leading-relaxed"
                    >
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-6"
                    >
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="group relative px-8 py-4 rounded-full bg-white text-background font-medium hover:scale-105 transition-transform flex items-center gap-3 overflow-hidden"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Say Hello</span>
                            <div className="absolute inset-0 bg-accent/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                        </a>

                        <div className="flex items-center gap-6">
                            {Object.entries(siteConfig.links).map(([key, href], i) => (
                                key !== 'resume' && (
                                    <a
                                        key={key}
                                        href={href}
                                        target="_blank"
                                        className="text-secondary hover:text-white transition-colors capitalize flex items-center gap-1 group"
                                    >
                                        {key}
                                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )
                            ))}
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
