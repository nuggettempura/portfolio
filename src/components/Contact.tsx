import mailIcon from '@images/mail.svg'
import githubIcon from '@images/github.svg';
import linkedinIcon from '@images/linkedin.svg';

interface ContactData {
    link: string;
    icon: string;
    linkName: string;
}

const contactData: ContactData[] = [
    {
        link: 'mailto:adammustaqeemhalid@gmail.com',
        icon: mailIcon,
        linkName: 'Email Link'
    },
    {
        link: 'https://github.com/nuggettempura',
        icon: githubIcon,
        linkName: 'Github Link'
    },
    {
        link: 'https://www.linkedin.com/in/adam-halid/',
        icon: linkedinIcon,
        linkName: 'LinkedIn Link'
    }
]

const Contact = () => {
    return (
        <section className='section'>
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