import React from 'react';
import theAccessGroupIcon from '@images/the-access-group.png'
import ifcaIcon from '@images/ifca-msc-bhd.svg';

interface DateRange {
    start: Date;
    end: Date;
}

interface CardData {
    company: string;
    title: string;
    description: string;
    techStack: string[];
    duration: DateRange;
    companyImage: string;
}

const workExperienceData: CardData[] = [
    {
        company: 'The Access Group',
        title: 'Frontend Developer',
        description: 'Develop and maintain recruitment websites using HTML, SCSS, JavaScript, jQuery, and Shopify Liquid. Create new websites for clients, redesign existing sites, and implement additional features or updates. Use Shopify Liquid and the company’s CMS to build and customize templates. Regularly manage 2–3 client website updates per week and contribute to approximately one new website or redesign project each month.',
        techStack: ['Shopify Liquid', 'jQuery', 'JavaScript', 'SASS', 'CSS'],
        duration: {
            start: new Date('2025-01-06'),
            end: new Date('2026-03-20')
        },
        companyImage: theAccessGroupIcon
    },
    {
        company: 'IFCA MSC BHD',
        title: 'Software Engineer (Full Stack)',
        description: 'Develop and maintain full-stack applications using TypeScript, React, Angular, Node.js, C# .NET, and PostgreSQL. Work in an Agile team to deliver features and improvements, averaging four tasks per week.Improve application security by mitigating XSS and CSRF vulnerabilities, eliminating critical and high-risk issues. Implement and configure e-invoicing integrations for 100+ clients, ensuring secure system connections.',
        techStack: ['React', 'Angular', 'SASS', 'TypeScript', 'JavaScript', 'Express', 'Apollo GraphQL', 'TypeORM', 'PostgreSQL', 'NodeJS', 'Linux', 'Burp Suite'],
        duration: {
            start: new Date('2023-04-08'),
            end: new Date('2024-12-20')
        },
        companyImage: ifcaIcon
    }

]

const formatDuration = ({ start, end }: DateRange): string => {
    const format = (d: Date) => d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    return `${format(start)} - ${end ? format(end) : 'Present'}`
}

const WorkExperience = () => {
    return (
        <section className='section'>
            {workExperienceData.map((experience, i) => (
                <div className='card my-2 flex flex-col gap-4' key={i}>
                    <figure>
                        <img src={experience.companyImage} alt="Company Image" width={150} height={150} className='' />
                        <figcaption className='sr-only'>Company Image</figcaption>
                    </figure>
                    <h3 className='text-xl'>{experience.company}</h3>
                    <p>{experience.title}</p>
                    <p>{experience.description}</p>
                    <div className='flex justify-start items-center flex-wrap gap-2'>
                        {experience.techStack.map((tech, index) => (
                            <span className='tag' key={index}>{tech}</span>
                        ))}
                    </div>
                    <p>{formatDuration({ start: experience.duration.start, end: experience.duration.end })}</p>
                </div>
            ))}
        </section>
    )
}

export default WorkExperience 