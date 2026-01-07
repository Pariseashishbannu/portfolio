import React from "react";
import { Frontend_skill, Backend_skill, DevTools, libraries } from "../constants";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const SkillCategory = ({ title, skills, index }) => (
    <div className="flex flex-col gap-4 items-center justify-center w-full my-4">
        <h3 className="text-2xl font-bold text-gray-300 mb-2">{title}</h3>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
            {skills.map((image, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-colors"
                >
                    <img
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        alt={image.skill_name}
                        className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                </motion.div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20 px-10"
        >
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 py-10">
                    My Tech Stack
                </h1>
                <p className="text-gray-400 text-xl text-center max-w-[600px]">
                    Technologies I use to build scalable applications
                </p>
            </div>

            <InView triggerOnce={true}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex flex-col items-center justify-center gap-8 w-full"
                    >
                        <SkillCategory title="Frontend" skills={Frontend_skill} index={0} />
                        <SkillCategory title="Backend" skills={Backend_skill} index={1} />
                        <SkillCategory title="Tools & Libraries" skills={[...DevTools, ...libraries]} index={2} />
                    </motion.div>
                )}
            </InView>
        </section>
    );
};

export default Skills;
