import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Inventory Management System",
            description: "A comprehensive web-based application for efficient inventory tracking, supplier management, and product categorization. Features include role-based authentication and real-time data synchronization.",
            tags: ["Django", "Python", "MySQL", "React"],
            link: "#"
        },
        {
            title: "Traffic Sign Detection",
            description: "An advanced Machine Learning application capable of detecting traffic signs in real-time. Utilizes the German Traffic Sign Detection Benchmark (GTSDB) model for high accuracy.",
            tags: ["TensorFlow", "OpenCV", "Python", "Keras"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-16 text-center"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full">
                                <div className="relative h-full p-8 flex flex-col z-20">
                                    <div className="mb-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                                <Github size={24} className="text-white" />
                                            </div>
                                            <a
                                                href={project.link}
                                                className="group/link flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-white"
                                            >
                                                View Project
                                                <ArrowUpRight size={16} className="text-gray-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                            </a>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover/spotlight:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300/80 bg-blue-500/10 rounded-full border border-blue-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpotlightCard = ({ children, className = "" }) => {
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        div.style.setProperty("--mouse-x", `${x}px`);
        div.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`relative rounded-3xl border border-white/10 bg-surface overflow-hidden group/spotlight ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
};

export default Projects;
