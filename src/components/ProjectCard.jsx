export const ProjectCard = ({project_name, project_description, project_tech, project_link}) => {
    return  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
                <h3 className="text-xl font-bold mb-2">
                    {project_name}  
                </h3>
                <p className="text-gray-400 mb-4">
                    {project_description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project_tech.map((tech, key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8_px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center my-5">
                    <a href = {`${project_link}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        View Project →
                    </a>
                </div>
            </div>
}