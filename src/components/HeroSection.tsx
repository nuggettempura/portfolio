import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <motion.section id="about" className='hero t-10 pb-10 flex flex-col gap-4 p-4' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <h2 className='text-4xl'>Software Engineer</h2>
            <p className='text-lg mt-4 mb-4'>A self-taught web developer with 3 years of experience passionate about creating amazing web experience.</p>
            <div className='flex gap-4'>
                <button className='primary-button'>
                    <a href="#">View Projects</a>
                </button>
            </div>
        </motion.section>
    )
}

export default HeroSection