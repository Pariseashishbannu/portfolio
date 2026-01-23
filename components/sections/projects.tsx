"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { ProjectItem, projects as projectsFallback } from "@/config/projects";
import { api } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    const [projectsData, setProjectsData] = useState<ProjectItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await api.portfolio.getProjects();
                setProjectsData(data);
            } catch (error) {
                console.error("Failed to fetch projects, using fallback:", error);
                setProjectsData(projectsFallback);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Section id="work" className="py-32">
            <Container>
                <a href="https://github.com/Pariseashishbannu" target="_blank" className="inline-block group mb-12">
                    <Text variant="caption" className="group-hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        Selected Work <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Text>
                </a>

                {loading ? (
                    // Skeleton Loading State
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="min-h-[300px] rounded-3xl bg-white/5 animate-pulse" />
                    ))
                ) : (
                    projectsData.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between p-8 h-full min-h-[300px] rounded-3xl overflow-hidden glass-card"
                        >
                            {/* Abstract Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-accent/20 transition-colors duration-500">
                                        <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-display font-medium text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary font-light text-sm line-clamp-3 group-hover:text-white/80 transition-colors">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-white/60">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))
                )}
            </Container>
        </Section>
    );
}
