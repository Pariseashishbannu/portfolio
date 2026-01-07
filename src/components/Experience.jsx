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
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-16 text-center"
                >
                    Journey
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-25" />
                            </div>

                            <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-mono text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                                    {item.period}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {item.institution}
                                </h3>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                                    <p className="text-gray-300 font-medium">{item.degree}</p>
                                    <span className="hidden md:block w-1 h-1 rounded-full bg-gray-500" />
                                    <p className="text-gray-500 text-sm">{item.details}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
