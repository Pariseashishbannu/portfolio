"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function SecretPortal() {
    const [keys, setKeys] = useState<string[]>([]);
    const [unlocked, setUnlocked] = useState(false);
    const router = useRouter();

    // The secret code sequence
    const CODE = ["a", "p", "i"];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();

            setKeys((prev) => {
                const newKeys = [...prev, key];
                // Keep only the last N keys where N is code length
                if (newKeys.length > CODE.length) {
                    return newKeys.slice(newKeys.length - CODE.length);
                }
                return newKeys;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        // Check if the current key sequence matches the code
        if (keys.join("") === CODE.join("")) {
            setUnlocked(true);

            // Redirect after a short animation
            setTimeout(() => {
                window.open("https://npm.pariseashish.com", "_blank");
                // Reset after redirect
                setKeys([]);
                setUnlocked(false);
            }, 2000);
        }
    }, [keys]);

    return (
        <AnimatePresence>
            {unlocked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center font-mono pointer-events-none"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-green-500 border border-green-500/50 bg-green-500/10 px-8 py-4 rounded-lg backdrop-blur-md shadow-[0_0_50px_rgba(34,197,94,0.2)]"
                        >
                            <div className="flex items-center gap-3 text-xl font-bold tracking-widest">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                ACCESS GRANTED
                            </div>
                            <div className="h-px w-full bg-green-500/30 my-3" />
                            <p className="text-green-400/80 text-sm text-center">Redirecting to Private Gateway...</p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
