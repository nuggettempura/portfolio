import { motion } from "motion/react"
import { contactData } from "../data"

interface ContactProps {
    theme: 'dark' | 'light';
}

const Contact = ({ theme }: ContactProps) => {
    return (
        <motion.section id="contact" className='section' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>
            <div className='p-4 bg-deep rounded-sm flex justify-between items-center'>
                <p className='text-main'>
                    @2026 Adam Halid
                </p>
                <div className='flex gap-2'>
                    {contactData.map((c, i) => (
                        <a href={c.link} target='_blank' className='mx-2' key={i}>
                            <img src={c.icon} alt={c.linkName} width={24} height={24} className='' style={{ filter: theme === 'dark' ? 'invert(1)' : 'none', transition: 'filter 0.3s ease' }} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Contact