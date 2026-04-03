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
import bootstrapIcon from '@images/bootstrap.svg';
import nodeIcon from '@images/nodejs.svg';
import shopifyLiquidIcon from '@images/shopify.svg';
import linuxIcon from '@images/linux.svg';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'Bootstrap', icon: bootstrapIcon },
        { name: 'SCSS', icon: scssIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Angular', icon: angularIcon },
        { name: 'TailwindCSS', icon: tailwindcssIcon },
        { name: 'Shopify Liquid', icon: shopifyLiquidIcon },
        { name: 'Express JS', icon: expressjsIcon },
        { name: 'Node JS', icon: nodeIcon },
        { name: 'GraphQL', icon: graphqlIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
        { name: 'NginX', icon: nginxIcon },
        { name: 'Linux', icon: linuxIcon }
    ]
    return (
        <section className='section'>
            <h2 className='text-2xl pb-[12.5px]'>Tech Stack</h2>
            <p className='py-4'>I use modern web technologies to build responsive, scalable, and production-ready applications</p>
            <div className='flex flex-wrap items-center gap-4'>
                {skills.map((skill, index) => (
                    <div key={index} className='tag items-center justify-center'>
                        <img src={skill.icon} alt={skill.name} className='w-7 h-7 mr-2' />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills