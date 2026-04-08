import { skills } from "../data"

const Skills = () => {
    return (
        <section id="skills" className='section'>
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
        </section>
    )
}

export default Skills