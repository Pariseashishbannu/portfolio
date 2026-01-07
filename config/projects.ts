export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link?: string;
};

export const projects: ProjectItem[] = [
    {
        title: "Inventory Management System",
        description: "Web-based application for efficient inventory tracking, supplier management, and role-based authentication. Published in IJARSCT (Vol 4, Issue 2, May 2024).",
        image: "/inventory_project.png",
        tech: ["Python", "Django", "MySQL", "JavaScript"],
        link: "https://github.com/Pariseashishbannu",
    },
    {
        title: "Real-Time Traffic Sign Detection",
        description: "Python application for efficient real-time traffic sign detection using the German Traffic Sign Detection Benchmark (GTSDB).",
        image: "/traffic_sign_project.png",
        tech: ["Python", "TensorFlow", "OpenCV", "Keras"],
        link: "https://github.com/Pariseashishbannu",
    },
];
