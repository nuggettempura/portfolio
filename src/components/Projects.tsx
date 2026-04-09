import { motion, useScroll, useTransform } from "motion/react"
import { projects } from "../data"
import type { ProjectData } from "../data"
import { useRef } from "react"
import { div, span } from "motion/react-client"

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}vw`]);
    return (
        <section id="projects" className="relative section" ref={targetRef} style={{ height: `${projects.length * 100}vh` }}>
            <h2 className="text-xl pb-7.5">Projects</h2>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    className="flex"
                    style={{ x }}
                >
                    {projects.map((project: ProjectData, index: number) => (
                        <div
                            key={index}
                            className="min-w-screen h-screen flex items-center justify-start"
                            style={{ minWidth: "100vw" }}
                        >
                            <motion.div className="flex flex-col gap-3"
                                initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}>
                                <a href={project.projectLink} className="hover:translate-y-[-10px] trans">
                                    <img src={project.image} alt={project.name} className="rounded-md" width={1000} height={800} />
                                </a>
                                <p className="text-xl">{project.name}</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech, i) => (
                                        <span className="tag" key={i}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-paragraph">{project.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects
