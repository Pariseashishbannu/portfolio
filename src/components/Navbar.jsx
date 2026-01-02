import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { Home, User, Code, Briefcase, Mail, Rocket, Database, Github } from "lucide-react";
import Magnetic from "./Magnetic";

const Navbar = () => {
    const { scrollY } = useScroll();

    // Smoothly interpolate values based on scroll position
    const rawWidth = useTransform(scrollY, [0, 100], ["100%", "40%"]);
    // Use a spring to make the width change "bouncy" and smooth
    const width = useSpring(rawWidth, { stiffness: 400, damping: 30 });

    // Background opacity changes smoothly
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
    const backdropBlur = useTransform(scrollY, [0, 50], ["0px", "12px"]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0.05, 0.1]);

    const navLinks = [
        { name: "Home", to: "hero", icon: <Home size={18} /> },
        { name: "Work", to: "projects", icon: <Briefcase size={18} /> },
        { name: "Skills", to: "skills", icon: <Code size={18} /> },
        { name: "Experience", to: "experience", icon: <User size={18} /> },
        { name: "Contact", to: "contact", icon: <Mail size={18} /> },
        { name: "Backend API", to: "https://api.pariseashish.com/admin", icon: <Database size={18} />, isExternal: true },
        { name: "Launch App", to: "https://pariseashish.com", icon: <Rocket size={18} />, isExternal: true },
        { name: "GitHub", to: "https://github.com/pariseashish", icon: <Github size={18} />, isExternal: true },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                style={{
                    backgroundColor: useTransform(bgOpacity, v => `rgba(9, 9, 11, ${v * 0.95})`), // Solid opacity
                    borderColor: useTransform(borderOpacity, v => `rgba(255, 255, 255, ${v})`),
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                }}
                className="flex items-center gap-1 px-3 py-3 rounded-full border border-white/5 pointer-events-auto transition-shadow duration-300 hover:shadow-lg hover:shadow-white/5"
            >
                {navLinks.map((link) => (
                    <Magnetic key={link.name}>
                        {link.isExternal ? (
                            <a
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-4 py-2 cursor-pointer rounded-full transition-colors hover:bg-white/10 block text-white font-medium bg-white/5 border border-white/5"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-sm">
                                    <span className="hidden sm:inline">{link.name}</span>
                                    <span className="sm:hidden">{link.icon}</span>
                                </span>
                            </a>
                        ) : (
                            <Link
                                to={link.to}
                                smooth={true}
                                spy={true}
                                offset={-100}
                                className="group relative px-4 py-2 cursor-pointer rounded-full transition-colors hover:bg-white/10 block"
                                activeClass="!bg-white/15"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                    <span className="hidden sm:inline">{link.name}</span>
                                    <span className="sm:hidden">{link.icon}</span>
                                </span>
                            </Link>
                        )}
                    </Magnetic>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navbar;
