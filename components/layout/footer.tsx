"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5" id="contact">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">

                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                            Let&apos;s talk.
                        </h2>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-xl text-secondary hover:text-white transition-colors border-b border-transparent hover:border-white w-fit pb-1"
                        >
                            {siteConfig.email}
                        </a>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-sm text-secondary/40">
                        <p>{siteConfig.name}</p>
                        <p>Designed in 2025</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
