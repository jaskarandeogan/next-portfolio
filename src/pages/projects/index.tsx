import React from 'react'
import Header from '@/components/shared/Header'
import LinkButton from '@/components/shared/LinkButton'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import Chips from '@/components/shared/Chips'
import SocialIcons from '@/components/SocialIcons'

const index = () => {
    const projects = [
        {
            year: 2022,
            title: 'Pulse',
            madeAt: 'Garden',
            technologies: ['React', 'NodeJS', 'TailwindCSS', 'AWS', 'Stytch', 'PostgreSQL', 'CICD'],
            link: '/projects/pulse',
            isComingSoon: false
        },
        {
            year: 2023,
            title: 'Homechow',
            madeAt: 'Homechow',
            technologies: ['NextJS', 'TypeScript', 'Firebase', 'Mapbox', 'TailwindCSS', 'Storybook', 'Cypress', 'Netlify'],
            link: '/projects/homechow',
            isComingSoon: false
        },
        {
            year: 2024,
            title: 'Payfelix - Remastered',
            madeAt: 'Felix Payment Systems',
            technologies: ['Wordpress', 'Elementor', 'Namecheap', 'GSAP', 'Zoho'],
            link: '/projects/payfelix',
            isComingSoon: true
        },
        {
            year: 2022,
            title: 'Splink',
            madeAt: 'Langara College - Capstone Project',
            technologies: ['React Native', 'NodeJS', 'Native Base', 'Google Vision API', 'AWS', 'MongoDB', 'CICD'],
            link: '/comingsoon',
            isComingSoon: true
        },
        {
            year: 2021,
            title: 'AI Designs',
            madeAt: 'Freelance',
            technologies: ['Wordpress', 'Gutanberg', 'Hostinger', 'Elementor', 'SEO'],
            link: 'https://anandishwar.com/',
            isComingSoon: true
        }
    ]
    return (
        <div>
            <Header />
            <section className='mx-auto max-w-2xl lg:max-w-5xl px-4'>
                <div>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0' onClick={() => window.open("/", "_self")}>Back</LinkButton>
                </div>
                <h2 className='text-grey-7 font-bold mt-10'>All Projects</h2>
                <section className='flex flex-col mt-5 gap-5 '>
                    {projects.map((project, index) => (
                        <div className='flex flex-col gap-2 border-b border-grey-6-32' key={index}>
                            <h3 className='text-grey-8 font-bold cursor-pointer' onClick={
                                () => window.open(project.link, "_self")
                            }>{project.title}
                                {project.isComingSoon && <span className='text-[10px] text-secondary-0 ml-2'>Coming Soon</span>}
                            </h3>
                            <div className='flex justify-between'>
                                <h6 className=' font-semibold text-grey-5'>{project.madeAt}</h6>
                                <h4 className='text-grey-8 font-semibold'>{project.year}</h4>
                            </div>
                            <div className='flex justify-between items-center mb-5'>
                                <div className='flex flex-wrap gap-2 max-w-md'>
                                    <Chips technologies={project.technologies} />
                                </div>
                                <div className='flex justify-end'>
                                    <LinkButton classnames={'px-0 text-xs'} onClick={() => window.open(project.link, "_self")} rightIcon={
                                        <FiArrowUpRight />
                                    }>View</LinkButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <div className='flex flex-col justify-center items-center py-20'>
                    <SocialIcons />
                    <LinkButton classnames='px-0 ml-5 mt-5' onClick={() => window.open("/", "_self")}>Back to Home</LinkButton>
                </div>
            </section>
        </div>
    )
}

export default index