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
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">Selected Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <SpotlightCard key={index}>
                            <div className="relative h-full p-8 flex flex-col z-20">
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                        <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
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
