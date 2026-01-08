"use client";

import { motion, Transition, ValueTransition } from "framer-motion";
import Image from "next/image";

// Configuration for icons
const icons = [
    { id: "react", name: "React", src: "/react.png", x: 0, y: 0, delay: 0 }, // Center
    { id: "next", name: "Next.js", src: "/next.png", x: -90, y: -60, delay: 1.5 },
    { id: "ts", name: "TypeScript", src: "/ts.png", x: 90, y: -60, delay: 1 },
    { id: "django", name: "Django", src: "/django.svg", x: -90, y: 60, delay: 2 },
    { id: "tailwind", name: "Tailwind", src: "/tailwind.png", x: 90, y: 60, delay: 2.5 },
    { id: "github", name: "GitHub", src: "/github.svg", x: 0, y: -110, delay: 3 },
    { id: "vscode", name: "VS Code", src: "/vs.svg", x: 0, y: 110, delay: 0.5 },
    { id: "js", name: "JavaScript", src: "/js.png", x: -130, y: 0, delay: 1.2 },
];

// Define connections between icons (ID pairs) for a "constellation" look
const connections = [
    // Center to inner ring
    ["react", "next"],
    ["react", "ts"],
    ["react", "django"],
    ["react", "tailwind"],

    // Outer connections
    ["next", "github"],
    ["ts", "github"],
    ["django", "vscode"],
    ["tailwind", "vscode"],
    ["next", "js"],
    ["django", "js"],

    // Cross connections for "web" look
    ["next", "ts"], // Top horizontal
    ["django", "tailwind"], // Bottom horizontal
    ["next", "django"], // Left vertical
    ["ts", "tailwind"], // Right vertical
];

// Animation constants
const ANIMATION_DURATION_Y = 5;
const ANIMATION_DURATION_X = 6;
// Slightly smaller float range for "precise" look
const FLOAT_Y_RANGE = [0, -10, 0];
const FLOAT_X_RANGE = [0, 4, 0];

export function TechConstellation() {

    // Helper to get consistent transition props
    // Helper to get consistent transition props
    const getTransition = (delay: number): { x: ValueTransition; y: ValueTransition } => ({
        y: {
            duration: ANIMATION_DURATION_Y,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay
        },
        x: {
            duration: ANIMATION_DURATION_X,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay
        }
    });

    // Center coordinate of the container
    const CX = 250;
    const CY = 250;

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">

            {/* Radial Grid Background - Made thinner and sharper */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                {/* ... Grid circles ... */}
                <div className="absolute w-[250px] h-[250px] border border-white/30 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full" />
                <div className="absolute w-[550px] h-[550px] border border-white/10 rounded-full" />

                {/* Radial Lines */}
                <div className="absolute w-full h-[1px] bg-white/20 rotate-0" />
                <div className="absolute w-full h-[1px] bg-white/20 rotate-45" />
                <div className="absolute w-full h-[1px] bg-white/20 rotate-90" />
                <div className="absolute w-full h-[1px] bg-white/20 rotate-135" />
            </div>

            {/* Center Glow */}
            <div className="absolute w-[180px] h-[180px] bg-purple-600/15 rounded-full blur-[60px]" />

            {/* Container for Icons and Web */}
            <div className="relative z-10 w-[500px] h-[500px]">

                {/* Spider Web Lines Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    {connections.map(([id1, id2], i) => {
                        const icon1 = icons.find(ic => ic.id === id1);
                        const icon2 = icons.find(ic => ic.id === id2);
                        if (!icon1 || !icon2) return null;

                        return (
                            <motion.line
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 0.15, // Very subtle
                                    x1: FLOAT_X_RANGE.map(v => v + CX + icon1.x),
                                    y1: FLOAT_Y_RANGE.map(v => v + CY + icon1.y),
                                    x2: FLOAT_X_RANGE.map(v => v + CX + icon2.x),
                                    y2: FLOAT_Y_RANGE.map(v => v + CY + icon2.y),
                                }}
                                transition={{
                                    x1: getTransition(icon1.delay).x,
                                    y1: getTransition(icon1.delay).y,
                                    x2: getTransition(icon2.delay).x,
                                    y2: getTransition(icon2.delay).y,
                                    opacity: { duration: 1, delay: 0.5 }
                                }}
                                stroke="white"
                                strokeWidth="0.5" // High precision thin line
                                strokeDasharray="4 4" // Tech/Data feel
                            />
                        );
                    })}

                    {/* Anchor Dots at intersections */}
                    {icons.map((icon, i) => (
                        <motion.circle
                            key={`dot-${i}`}
                            r="2"
                            fill="white"
                            fillOpacity="0.5"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                cx: FLOAT_X_RANGE.map(v => v + CX + icon.x),
                                cy: FLOAT_Y_RANGE.map(v => v + CY + icon.y),
                            }}
                            transition={{
                                cx: getTransition(icon.delay).x,
                                cy: getTransition(icon.delay).y,
                                opacity: { duration: 0.5 }
                            }}
                        />
                    ))}
                </svg>

                {/* Floating Icons */}
                {icons.map((icon) => (
                    <FloatingCard
                        key={icon.id}
                        icon={icon}
                        transition={getTransition(icon.delay)}
                        floatX={FLOAT_X_RANGE}
                        floatY={FLOAT_Y_RANGE}
                    />
                ))}
            </div>
        </div>
    );
}

interface IconData {
    id: string;
    name: string;
    src: string;
    x: number;
    y: number;
    delay: number;
}

function FloatingCard({ icon, transition, floatX, floatY }: {
    icon: IconData,
    transition: { x: ValueTransition; y: ValueTransition },
    floatX: number[],
    floatY: number[]
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: floatY,
                x: floatX
            }}
            transition={{
                opacity: { duration: 0.5, delay: icon.delay },
                scale: { duration: 0.5, delay: icon.delay },
                y: transition.y,
                x: transition.x
            }}
            className="absolute p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group z-20"
            style={{
                left: `50%`,
                top: `50%`,
                marginLeft: icon.x,
                marginTop: icon.y,
                width: '56px', // Slightly smaller for precision
                height: '56px',
                transform: `translate(-50%, -50%)`
            }}
        >
            <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                    src={icon.src}
                    alt={icon.name}
                    width={32}
                    height={32}
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
}
