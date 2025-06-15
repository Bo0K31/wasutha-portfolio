import { ProjectCard } from "../ProjectCard"
import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section
        id = "projects"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                    project_name={"Optimal Tax Reduction Policy for ESG Investment"}
                    project_description={"Conducted operational research to design and test an Agent-Based Model (ABM) aimed at identifying optimal government tax incentives policies aimed to enhance ESG investment"}
                    project_tech={["React", "Node.js", "AWS", "Docker"]}
                    project_link={"#"}
                />
                <ProjectCard 
                    project_name={"Optimal Tax Reduction Policy for ESG Investment"}
                    project_description={"Conducted operational research to design and test an Agent-Based Model (ABM) aimed at identifying optimal government tax incentives policies aimed to enhance ESG investment"}
                    project_tech={["React", "Node.js", "AWS", "Docker"]}
                    project_link={"#"}
                />
                <ProjectCard 
                    project_name={"Optimal Tax Reduction Policy for ESG Investment"}
                    project_description={"Conducted operational research to design and test an Agent-Based Model (ABM) aimed at identifying optimal government tax incentives policies aimed to enhance ESG investment"}
                    project_tech={["React", "Node.js", "AWS", "Docker"]}
                    project_link={"#"}
                />
                <ProjectCard 
                    project_name={"Optimal Tax Reduction Policy for ESG Investment"}
                    project_description={"Conducted operational research to design and test an Agent-Based Model (ABM) aimed at identifying optimal government tax incentives policies aimed to enhance ESG investment"}
                    project_tech={["React", "Node.js", "AWS", "Docker"]}
                    project_link={"#"}
                />
            </div>
        </div>

        </RevealOnScroll>

    </section>
}