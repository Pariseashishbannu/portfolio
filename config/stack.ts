export type SkillItem = {
    name: string;
    image: string;
    width?: number;
    height?: number;
};

export const frontendSkills: SkillItem[] = [
    { name: "HTML 5", image: "/html-colored.svg" },
    { name: "CSS 3", image: "/css-colored.svg" },
    { name: "JavaScript", image: "/js-colored.svg" },
    { name: "TypeScript", image: "/ts-colored.svg" },
    { name: "React", image: "/react-colored.svg" },
    { name: "Next.js", image: "/next-colored.svg" },
    { name: "Tailwind CSS", image: "/tailwind.png" },
];

export const backendSkills: SkillItem[] = [
    { name: "Node.js", image: "/node-colored.svg" },
    { name: "Django", image: "/django-colored.svg" },
    { name: "PostgreSQL", image: "/postgresql-colored.svg" },
    { name: "MySQL", image: "/mysql-colored.svg" },
    { name: "Firebase", image: "/firebase-colored.svg" },
    { name: "Supabase", image: "/supabase.svg" },
];

export const toolsAndLibraries: SkillItem[] = [
    { name: "Git", image: "/git-colored.svg" },
    { name: "VS Code", image: "/vscode-colored.svg" },
    { name: "Figma", image: "/figma-colored.svg" },
    { name: "Framer Motion", image: "/framer.png" },
    { name: "Three.js", image: "/threejs.png" },
    { name: "Redux", image: "/redux-colored.svg" },
];
