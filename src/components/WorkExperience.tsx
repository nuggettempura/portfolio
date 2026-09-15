import type { DateRange, CardData } from "../data"
import { workExperienceData } from "../data"

const formatDuration = ({ start, end }: DateRange): string => {
    const format = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    return `${format(start)} – ${end ? format(end) : 'Present'}`
}

const descriptionLines = (description: string): string[] =>
    description
        .split('\n')
        .map(line => line.replace(/^\s*\d+\.\s*/, '').trim())
        .filter(Boolean)

const WorkExperience = () => {
    return (
        <section id="work-experience" className="section timeline-pad">
            <h2 className="text-2xl font-display font-semibold">Work</h2>
            <div className="flex flex-col gap-10 pt-8">
                {workExperienceData.map((experience: CardData, i: number) => (
                    <div className="timeline-entry flex flex-col gap-2" key={i}>
                        <p className="py-2 text-sm text-soft">{formatDuration(experience.duration)}</p>
                        <div className="md:flex items-center gap-3">
                            <img
                                src={experience.companyImage}
                                alt={experience.company}
                                className="h-8 w-auto md:m-0 mb-4"
                                style={{ filter: "grayscale(1)", opacity: 0.75 }}
                            />
                            <h3 className="text-lg font-display font-semibold">
                                {experience.title}, {experience.company}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1.5" style={{ maxWidth: "62ch" }}>
                            {descriptionLines(experience.description).map((line, index) => (
                                <p className="md:font-normal md:text-base text-sm" key={index}>{line}</p>
                            ))}
                        </div>
                        <p className="text-sm text-soft pt-1">{experience.techStack.join(', ')}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience
