import { skills } from "../data"
import type { Skill, SkillGroup } from "../data"

const Skills = () => {
    return (
        <section id="skills" className="section timeline-pad">
            <h2 className="text-2xl font-display font-semibold">Tools</h2>
            <p className="pt-3 pb-8" style={{ maxWidth: "48ch" }}>
                What I reach for day to day, grouped by where it sits in the stack.
            </p>
            <div className="flex flex-col gap-5">
                {skills.map((group: SkillGroup) => (
                    <div key={group.category} className="md:grid md:gap-2 flex flex-col gap-5" style={{ gridTemplateColumns: "9rem 1fr" }}>
                        <p className="text-sm text-soft pt-1">{group.category}</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            {group.items.map((skill: Skill) => (
                                <div key={skill.name} className="skill-row flex items-center gap-2">
                                    <img src={skill.icon} alt="" className="skill-icon w-4 h-4" />
                                    <span className="text-ink text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
