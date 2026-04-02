import React from 'react'
import reactIcon from '@images/react.svg'
import htmlIcon from '@images/html.svg'
import scssIcon from '@images/sass.svg'
import javascriptIcon from '@images/javascript.svg'
import typescriptIcon from '@images/typescript.svg'
import angularIcon from '@images/angular.svg'
import tailwindcssIcon from '@images/tailwind.svg'
import expressjsIcon from '@images/express.svg'
import graphqlIcon from '@images/graphql.svg'
import postgresqlIcon from '@images/postgresql.svg'
import nginxIcon from '@images/nginx.svg'

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'SCSS', icon: scssIcon },
        { name: 'SCSS', icon: scssIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Angular', icon: angularIcon },
        { name: 'TailwindCSS', icon: tailwindcssIcon },
        { name: 'Express JS', icon: expressjsIcon },
        { name: 'GraphQL', icon: graphqlIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
        { name: 'NginX', icon: nginxIcon },
    ]
    console.log({ reactIcon, htmlIcon, scssIcon, javascriptIcon, typescriptIcon, angularIcon, tailwindcssIcon, expressjsIcon, graphqlIcon, postgresqlIcon, nginxIcon })
    return (
        <section className='section pb-4 py-4'>
            <h2 className='text-2xl pb-[12.5px]'>Tech Stack</h2>
            <p className='py-4 px-4'>I use modern web technologies to build responsive, scalable, and production-ready applications</p>
            <div className='flex flex-wrap items-center gap-4'>
                {skills.map((skill, index) => (
                    <div key={index} className='flex items-center gap-1 py-3 px-7 border border-blue-200 rounded-2xl max-w-[40] transtion-all hover:bg-blue-500 border-blue-500 hover:text-white hover:box-shadow-lg'>
                        <img src={skill.icon} alt={skill.name} className='w-5 h-5 mr-2' />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills