import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <motion.section id="about" className='hero t-10 pb-10 flex flex-col gap-4 p-4' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="flex flex-wrap justify-start gap-6">
                <p className="tag w-max text-md">Full Stack Software Engineer</p>
                <p className="tag w-max text-md">Frontend Developer</p>
            </div>
            <h1 className="text-5xl">Adam Halid</h1>
            {/* <h2 className='text-2xl'>Software Engineer</h2> */}
            <p className='text-lg mt-2 mb-2'>Software Engineer Building Scalable Products</p>
            <div className='flex gap-4'>
                <button className='primary-button'>
                    <a href="#">View Projects</a>
                </button>
            </div>
        </motion.section>
    )
}

export default HeroSection