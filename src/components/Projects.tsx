import { projects } from "../data"
import type { ProjectData } from "../data"

const Projects = () => {
    return (
        <section id="projects" className="section timeline-pad">
            <h2 className="text-2xl font-display font-semibold">Projects</h2>
            <div className="grid gap-8 pt-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                {projects.map((project: ProjectData, index: number) => (
                    <a
                        key={index}
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-3 group"
                    >
                        <div className="thumb" style={{ aspectRatio: "16 / 10" }}>
                            <img src={project.image} alt={project.name} />
                        </div>
                        <h3 className="text-base font-semibold text-ink">{project.name}</h3>
                        <p className="text-sm">{project.description}</p>
                        <p className="text-sm text-soft">{project.techStack.join(', ')}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
