import { Socials } from "../constants";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-black/20 bg-[#0a0a0a]/50 backdrop-blur-md z-50 px-10 m-0 w-full items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                <a
                    href="#home"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <img
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:animate-spin w-10"
                    />

                    <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
                        Parise Ashish
                    </span>
                </a>

                <div className="hidden w-3/6 lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5 text-white">
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer hover:animate-spin"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
