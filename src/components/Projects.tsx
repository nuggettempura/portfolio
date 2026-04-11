import { motion, useScroll, useTransform } from "motion/react"
import { projects } from "../data"
import type { ProjectData } from "../data"
import { useEffect, useRef } from "react"

const Projects = () => {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}vw`]);
    const sectionRef = targetRef

    useEffect(() => {
        const update = (): void => {
            if (sectionRef.current) {
                const multiplier = window.innerWidth < 768 ? 120 : 100;
                sectionRef.current.style.height = `${projects.length * multiplier}vh`
            }
        }
        update();
        window.addEventListener('resize', update)
        return (() => {
            window.removeEventListener('resize', update)
        })
    }, [])

    return (
        <section id="projects" className="relative section" ref={targetRef} style={{ height: `${projects.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex overflow-hidden">
                <motion.div
                    className="flex"
                    style={{ x }}
                >
                    <h2 className="text-xl pb-7.5">Projects</h2>
                    {projects.map((project: ProjectData, index: number) => (
                        <div
                            key={index}
                            className="h-screen flex justify-start items-center top-0"
                            style={{ minWidth: "100vw" }}
                        >
                            <motion.div className="flex flex-col gap-3 px-4"
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}>
                                <a
                                    href={project.projectLink} className="hover:translate-y-2.5trans"
                                    target="_blank"
                                >
                                    <img src={project.image} alt={project.name} width={1140} className="rounded-md bg-cover" />
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
