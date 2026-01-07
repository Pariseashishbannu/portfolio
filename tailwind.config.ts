import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-space)", "sans-serif"],
            },
            colors: {
                background: "#030014", // Deep Space Black/Purple
                primary: "#FFFFFF",    // Stark White for stars/text
                secondary: "#AAA6C3",  // Muted Space Gray
                accent: "#7042f8",     // Vibrant Space Purple
                border: "rgba(255, 255, 255, 0.08)",
                surface: "rgba(255, 255, 255, 0.03)",
            },
            animation: {
                "float-slow": "float 20s infinite ease-in-out",
                "float-slower": "float 25s infinite ease-in-out reverse",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(2deg)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
