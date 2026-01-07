"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { education, achievements } from "@/config/education";
import { GraduationCap, Trophy } from "lucide-react";

export function Education() {
    return (
        <Section id="about" className="py-24 relative">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Education Column */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                                <GraduationCap className="w-5 h-5 text-accent" />
                            </div>
                            <Text variant="h3">Education</Text>
                        </div>

                        <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 ring-4 ring-background group-hover:bg-accent group-hover:ring-accent/20 transition-all" />

                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-secondary/60 font-mono">{item.date}</span>
                                        <h4 className="text-lg font-display font-medium text-white">{item.institution}</h4>
                                        <p className="text-sm text-accent/80">{item.place}</p>
                                        <p className="text-secondary font-light leading-relaxed text-sm mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <Trophy className="w-5 h-5 text-cyan-400" />
                            </div>
                            <Text variant="h3">Achievements</Text>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl glass-card group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-display font-medium text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                        <span className="text-xs px-2 py-1 rounded bg-white/5 text-secondary border border-white/5">{item.date}</span>
                                    </div>
                                    <p className="text-sm text-secondary/80 font-medium mb-2">{item.platform}</p>
                                    <p className="text-secondary font-light text-sm">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
