import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"]
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Parise Ashish | Software Engineer",
  description: "Senior Frontend Developer & Architect building precise, accessible web experiences.",
};

import { Navbar } from "@/components/layout/navbar";
import { SpaceBackground } from "@/components/ui/space-background";
import { SecretPortal } from "@/components/ui/secret-portal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        "bg-background text-primary font-sans relative overflow-x-hidden"
      )}>
        {/* Premium Background System */}
        {/* Cinematic Space Background */}
        <SpaceBackground />

        {/* Grain Overlay for Texture */}
        <div className="fixed inset-0 z-[50] pointer-events-none opacity-[0.03] mix-blend-overlay">
          <div
            className="absolute inset-0 bg-repeat w-full h-full animate-grain"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <SecretPortal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
