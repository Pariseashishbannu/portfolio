"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { frontendSkills, backendSkills, toolsAndLibraries, SkillItem } from "@/config/stack";

const SkillGroup = ({ title, items }: { title: string; items: SkillItem[] }) => (
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
                        <SkillGroup title="Frontend" items={frontendSkills} />
                        <SkillGroup title="Backend" items={backendSkills} />
                        <SkillGroup title="Tools" items={toolsAndLibraries} />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
