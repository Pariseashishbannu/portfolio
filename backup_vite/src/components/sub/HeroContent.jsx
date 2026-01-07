import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../../utils/motion";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col items-center justify-between px-10 md:px-20 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-1/2 flex flex-col gap-5 justify-center text-start">
                        {/* Intro Tag */}
                        <InView triggerOnce={true}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromTop}
                                    className="py-[8px] pl-1 opacity-[0.9]"
                                >
                                    <h1 className="text-[#a4a4a4] text-lg font-medium">
                                        Hello, I am
                                    </h1>
                                </motion.div>
                            )}
                        </InView>

                        {/* Name with Accent */}
                        <InView triggerOnce={true}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col text-6xl md:text-8xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                >
                                    <span>
                                        Parise
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 cursive ml-4">
                                            {"{Ashish}"}
                                        </span>
                                    </span>
                                    <span className="text-4xl md:text-6xl text-gray-400 mt-2">
                                        Software Engineer
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        {/* Description */}
                        <InView triggerOnce={true}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-lg text-gray-400 my-5 max-w-[600px] z-30"
                                >
                                    I build accessible, pixel-perfect, performant web experiences.
                                    Focused on building scalable web applications with React, Django, and Modern Technologies.
                                </motion.div>
                            )}
                        </InView>

                        {/* Buttons */}
                        <InView triggerOnce={true}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(1)}
                                    className="flex gap-4 z-40"
                                >
                                    <a
                                        href="/resume.pdf"
                                        download="Parise_Ashish_Resume.pdf"
                                        className="py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        Resume
                                    </a>
                                    <a
                                        href="#projects"
                                        className="py-3 px-6 border border-purple-600 text-center text-white cursor-pointer rounded-lg hover:bg-purple-600/20 transition-all"
                                    >
                                        My Projects
                                    </a>
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    {/* Right Side Icons/Visuals */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-1/2 h-full flex justify-center items-center z-40 mt-10 md:mt-0"
                            >
                                <img
                                    src="/mainIcons.svg"
                                    alt="work icons"
                                    height={650}
                                    width={650}
                                    className="opacity-90"
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;
