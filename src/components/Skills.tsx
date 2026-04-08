import { motion } from "motion/react";
import { skills } from "../data"

const Skills = () => {
    return (
        <motion.section id="skills" className='section' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <h2 className='text-2xl pb-[12.5px]'>Tech Stack</h2>
            <p className='py-4'>I use modern web technologies to build responsive, scalable, and production-ready applications</p>
            <div className='flex flex-wrap items-center gap-4'>
                {skills.map((skill, index) => (
                    <div key={index} className='tag items-center justify-center'>
                        <img src={skill.icon} alt={skill.name} className='w-7 h-7 mr-2' />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default Skills