import { m } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20"
        >
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full animate-spotlight opacity-0" />
                <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full animate-spotlight animation-delay-2000 opacity-0" />
            </div>


            <div className="container mx-auto px-6 text-center z-10 relative">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-400 font-medium tracking-wide">Available for Work</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tight leading-[1.1] animate-slide-up" style={{ animationDelay: "100ms" }}>
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            possibilities.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "200ms" }}>
                        I'm <span className="text-white font-semibold">Parise Ashish</span>, a Software Engineer focused on crafting clean, scalable, and user-centric applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            See my work
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Parise_Ashish_Resume.pdf"
                            className="px-8 py-3.5 border border-white/10 text-gray-300 font-medium rounded-full hover:bg-white/5 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
                        >
                            Resume
                            <Download size={16} />
                        </a>
                    </div>
                </m.div>
            </div>


        </section>
    );
};

export default Hero;
