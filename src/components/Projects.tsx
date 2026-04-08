// import { motion, useScroll, useTransform } from "motion/react"
// import { projects } from "../data"
// import type { ProjectData } from "../data"
// import { useRef } from "react"

// const Projects = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({ target: targetRef });
//     const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55"])
//     return (
//         <section id="projects" className='relative' ref={targetRef}>
//             <h2 className="section text-2xl"></h2>
//             {projects.map((project: ProjectData, index: number) => (
//                 <motion.div className="h-[500vh]" key={index}>
//                     <div className="h-[100vh] sticky top-0 flex items-center justify-start"></div>
//                     <img src={project.image} alt="Project Image" />
//                     <p className="text-xl">{project.name}</p>
//                     <button className="primary-button">
//                         <a href={project.link} target="_blank"></a>
//                     </button>
//                 </motion.div>
//             ))}
//         </section>
//     )
// }

// export default Projects