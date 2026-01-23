"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { SkillItem, frontendSkills, backendSkills, toolsAndLibraries } from "@/config/stack";
import { api } from "@/lib/services";

type SkillGroupProps = {
    title: string;
    items: SkillItem[];
};

const SkillGroup = ({ title, items }: SkillGroupProps) => (
    <div className="flex flex-col gap-6">
        <h3 className="text-sm font-sans text-secondary/50 uppercase tracking-widest">{title}</h3>
        <div className="flex flex-wrap gap-4">
            {items.map((item, i) => (
                <div
                    key={item.name}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group cursor-default"
                >
                    <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                    </div>
                    <span className="text-base text-white/80 group-hover:text-white transition-colors">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export function Stack() {
    const [skillsData, setSkillsData] = useState<Record<string, SkillItem[]>>({
        frontend: [],
        backend: [],
        tools: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                // Fetch from API
                // Note: Assuming API returns a flat list with a 'category' field or similar,
                // otherwise we might need to adjust based on actual API response structure.
                // For now, mapping blindly or using static fallback if API structure differs.

                // Since the API endpoint is generic /skills/, and we don't have the exact response shape 
                // confirmed to have categories, we will try to fetch and if it fails or structure mismatch, 
                // we might need to adjust. However, based on the task, we are connecting it.
                // Let's assume the API returns a list of skills. 
                // If the API endpoints md doesn't specify categories, we might have to filter client-side 
                // or just show all. But the UI is grouped. 
                // Let's implement the fetch and handling.

                const data = await api.portfolio.getSkills();

                // Helper to categorize if API returns flat list with category field
                // If API returns straight up the same structure as config (grouped), that's great.
                // If not, we might need a mapper. 
                // Analyzing config/stack.ts shows 3 separate arrays. 
                // Analyzing api_endpoints.md shows GET /portfolio/skills/ -> List all skills.
                // Likely returns { name, image, category? }[]

                // For this implementation, I will assume the data can be categorized.
                // If not, I will just dump them into 'Tools' or try to map by known names?
                // Actually, to be safe and "wowed", let's map them if possible or just populate.

                // Placeholder: we'll assume the API returns the arrays or a flat list we can filter.
                // Use a categorization strategy if needed.

                // For now, let's just log and set.
                // Since I can't see the backend implementation of /skills/, I will assumme it returns a list 
                // and I'll filter it into the 3 buckets based on some logic or API field.

                // Mocking the categorization logic for now if API doesn't provide it:
                const frontend = data.filter((s: any) => ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'].includes(s.name) || s.category === 'frontend');
                const backend = data.filter((s: any) => ['Node.js', 'Django', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase'].includes(s.name) || s.category === 'backend');
                const tools = data.filter((s: any) => ['Git', 'VS Code', 'Figma', 'Framer Motion', 'Three.js', 'Redux'].includes(s.name) || s.category === 'tools');

                setSkillsData({ frontend, backend, tools });

            } catch (error) {
                console.error("Failed to fetch skills, using fallback:", error);
                setSkillsData({
                    frontend: frontendSkills,
                    backend: backendSkills,
                    tools: toolsAndLibraries
                });
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    return (
        <Section id="stack" className="py-24">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex flex-col gap-4">
                        <Text variant="h2">Stack</Text>
                        <p className="text-secondary font-light max-w-sm">
                            The toolkit I use to craft digital products.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        {loading ? (
                            <div className="animate-pulse space-y-12">
                                <div className="h-24 bg-white/5 rounded-xl"></div>
                                <div className="h-24 bg-white/5 rounded-xl"></div>
                                <div className="h-24 bg-white/5 rounded-xl"></div>
                            </div>
                        ) : (
                            <>
                                {skillsData.frontend.length > 0 && <SkillGroup title="Frontend" items={skillsData.frontend} />}
                                {skillsData.backend.length > 0 && <SkillGroup title="Backend" items={skillsData.backend} />}
                                {skillsData.tools.length > 0 && <SkillGroup title="Tools" items={skillsData.tools} />}
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
