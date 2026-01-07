import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/inventory_project.png"
                    title="Inventory Management System"
                    description="Web-based application for efficient inventory tracking, supplier management, and role-based authentication. Published in IJARSCT (Vol 4, Issue 2, May 2024). Tech: Python, Django, MySQL, HTML, CSS, JS."
                />
                <ProjectCard
                    src="/traffic_sign_project.png"
                    title="Real-Time Traffic Sign Detection"
                    description="Python application for efficient real-time traffic sign detection using the German Traffic Sign Detection Benchmark (GTSDB). Tech: Python, TensorFlow, OpenCV, Keras, AI/ML."
                />
            </div>
        </div>
    );
};

export default Projects;
