import { motion } from "framer-motion";

const Experience = () => {
    const education = [
        {
            institution: "Christu Jyothi Institute of Technology",
            degree: "Bachelor of Technology (CSE)",
            period: "2021 - 2024",
            details: "71% • Inventory Management System Project"
        },
        {
            institution: "Annamacharya Institute of Technology",
            degree: "Diploma in Computer Engineering",
            period: "2016 - 2019",
            details: "62% • Traffic Sign Detection AI"
        },
    ];

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey</h2>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-10 items-start p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <span className="text-gray-500 text-sm font-mono pt-1 whitespace-nowrap">{item.period}</span>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                                <p className="text-gray-400 font-medium mb-2">{item.degree}</p>
                                <p className="text-gray-500 text-sm">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
