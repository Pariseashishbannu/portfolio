"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { Mail, ArrowUpRight, Check, Loader2, Send } from "lucide-react";
import { api } from "@/lib/services";

export function Contact() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await api.portfolio.sendContact(formState);
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => {
                setStatus('idle');
                setIsFormVisible(false);
            }, 3000);
        } catch (error) {
            console.error("Failed to send message:", error);
            setStatus('error');
        }
    };

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

                    <AnimatePresence mode="wait">
                        {!isFormVisible ? (
                            <motion.div
                                key="cta"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <p className="text-lg md:text-xl text-secondary max-w-xl mb-12 font-light leading-relaxed">
                                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>

                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <button
                                        onClick={() => setIsFormVisible(true)}
                                        className="group relative px-8 py-4 rounded-full bg-white text-background font-medium hover:scale-105 transition-transform flex items-center gap-3 overflow-hidden"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>Say Hello</span>
                                        <div className="absolute inset-0 bg-accent/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>


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
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                onSubmit={handleSubmit}
                                className="w-full max-w-md flex flex-col gap-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md"
                            >
                                <div className="flex flex-col gap-2 text-left">
                                    <label htmlFor="name" className="text-sm text-secondary ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <label htmlFor="email" className="text-sm text-secondary ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <label htmlFor="message" className="text-sm text-secondary ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className="mt-2 w-full bg-white text-background font-medium rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : status === 'success' ? (
                                        <>
                                            <Check className="w-5 h-5" />
                                            <span>Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="button"
                                    onClick={() => setIsFormVisible(false)}
                                    className="text-sm text-secondary hover:text-white transition-colors mt-2"
                                >
                                    Cancel
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                </div>
            </Container>
        </section>
    );
}
