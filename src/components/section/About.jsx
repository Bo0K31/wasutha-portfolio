import { RevealOnScroll } from "../RevealOnScroll";
import { Experience } from "../WorkExperienceInfo";

export const About = () => {
    
    const frontendSkills = ["React", "Vue", "Typescript", "Tailwindcss", "Svelei"];
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "Svelte", "GraphQL"];

    return <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Enthusiastic and adaptable programmer seeking a career path that offers opportunities to enhance technical skills 
                and knowledge. Currently focused on pursuing roles in Data Engineering, while remaining open to other growth opportunities. 
                Enthusiastic about learning modern technologies and collaborating with diverse teams. 
                Interests: Data engineering, financial management, Machine learning
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8_px_rgba(59, 130, 2246, 0.2)] transition">
                                            {tech}
                                    </span>
                                ))}
                                
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8_px_rgba(59, 130, 246, 0.2)] transition">
                                            {tech}
                                    </span>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.Eng. in Computer Engineering</strong> - Chulalongkorn University
                                (2022-2025)
                            </li>
                            <li>
                                Relevant Coursework - Data structure, Algorithm Design, Statistic for Physical Science, Database Systems, Computer Network, Data Science and Data Engineering
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <Experience 
                                work_header={"Intern – AIS, Summer 2025"} 
                                work_detail={"Developed and maintained H3 grid system for telecom network quality analysis. Contributed to geospatial data handling and performance optimization using Python."}
                            />
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Academic Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <Experience 
                                work_header={"SET Research Scholarship Program (2024–2025)"} 
                                work_detail={"Built an Agent-Based Model to simulate government ESG tax policy effects. Produced data-driven insights for sustainable investment behaviors using Python and simulation frameworks."}
                            />
                            <Experience 
                                work_header={"Teaching Assistant - Database Systems, Chulalongkorn University"} 
                                work_detail={"Assisted in grading assignments and supporting students in understanding database concepts and SQL."}
                            />
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Non-Academic Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <Experience 
                                work_header={"President – Intania Board Game Club (2022–2024)"}
                                work_detail={"Led club operations, organized an events, and increased member engagement. Previously served as Member (2022) and Secretary (2023)."}
                            />
                            <Experience 
                                work_header={"Expert sale professional (Internship) at Chulalongkorn Business Administration (summer 2023)"} 
                                work_detail={"Completed training in sales and entrepreneurship. Collaborated with peers to sell tech products through both online and onsite channels."}
                            />
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
    </section>
}