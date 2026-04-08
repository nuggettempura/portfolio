import type { DateRange } from "../../data";
import type { CardData } from "../../data";
import { workExperienceData } from "../../data";

const formatDuration = ({ start, end }: DateRange): string => {
    const format = (d: Date) => d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    return `${format(start)} - ${end ? format(end) : 'Present'}`
}


const WorkExperienceCard = () => {
    return (
        <>
            {
                workExperienceData.map((experience: CardData, i: number) => (
                    <div className="flex items-center justify-center">
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
                    </div>
                ))
            }
        </>
    )
}

export default WorkExperienceCard