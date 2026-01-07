import React from "react";

const ProjectCard = ({ src, title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-white/10 bg-white/5">
            <img
                src={src}
                alt={title}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
