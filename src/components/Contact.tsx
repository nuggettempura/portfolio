import { contactData } from "../data"

const Contact = () => {
    return (
        <section id="contact" className='section'>
            <div className='p-4 bg-deep rounded-sm flex justify-between items-center'>
                <p className='text-main'>
                    @2026 Adam Halid
                </p>
                <div className='flex gap-2'>
                    {contactData.map((c, i) => (
                        <a href={c.link} target='_blank' className='mx-2' key={i}>
                            <img src={c.icon} alt={c.linkName} width={24} height={24} className='' />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact