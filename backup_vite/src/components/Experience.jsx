import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    const experienceData = [
        {
            institution: "Christu Jyothi Institute of Technology",
            degree: "B.Tech in Computer Science and Engineering",
            period: "2021 - 2024",
            details: "71% • Project: Inventory Management System (Published in IJARSCT)",
        },
        {
            institution: "Annamacharya Institute of Technology",
            degree: "Diploma in Computer Engineering",
            period: "2016 - 2019",
            details: "62% • Project: Real-Time Traffic Sign Detection using OpenCV",
        },
        {
            institution: "St. Anns High School",
            degree: "Secondary High School",
            period: "2003 - 2015",
            details: "Major: Secondary High School • Minor: Primary High School",
        },
    ];

    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
                >
                    My Journey
                </motion.div>

                <div className="w-full flex flex-col gap-10 px-10 max-w-4xl">
                    {experienceData.map((item, index) => (
                        <div key={index} className="Welcome-box py-[15px] px-[20px] border border-white/10 opacity-[0.9] flex flex-col md:flex-row justify-between items-center w-full z-20">
                            <div className="flex flex-col gap-2 p-2">
                                <h1 className="text-white text-xl font-bold">{item.institution}</h1>
                                <p className="text-gray-300 text-lg">{item.degree}</p>
                                <p className="text-gray-400 text-sm">{item.details}</p>
                            </div>
                            <div className="text-gray-400 font-mono items-center">
                                {item.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
