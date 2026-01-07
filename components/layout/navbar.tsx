"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 py-6"
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo - Pure Typography */}
                    <Link href="/" className="font-display font-bold text-xl tracking-tight text-white hover:opacity-70 transition-opacity">
                        {siteConfig.name}
                    </Link>

                    {/* Right Side: Nav + Resume grouped together */}
                    <div className="flex items-center gap-8">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {siteConfig.nav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium text-white/60 transition-all duration-300 relative group hover:text-white",
                                        pathname === item.href ? "text-white" : ""
                                    )}
                                >
                                    {item.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-6">
                            {/* Action - Simple Text Link */}
                            <a
                                href={siteConfig.links.resume}
                                target="_blank"
                                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.header>
    );
}
