"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Shape 1: Top Left - Cosmic Purple Nebula */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    x: [-20, 20, -20],
                    y: [-20, 20, -20]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px] will-change-transform"
            />

            {/* Shape 2: Bottom Right - Deep Cyan/Blue Plasma */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    x: [20, -20, 20],
                    y: [20, -20, 20]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/20 blur-[140px] will-change-transform"
            />

            {/* Shape 3: Center Mid - Starlight Highlight */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-900/10 blur-[100px] will-change-transform"
            />
        </div>
    );
}
