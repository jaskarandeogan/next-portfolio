import classNames from 'classnames'
import React from 'react'
import { FaGithub, } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'
import Chips from './Chips'
import LinkButton from './LinkButton'

const ProjectCard = ({
    title = 'Project Title',
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.",
    technologies = ["React", "TypeScript", "TailwindCSS"],
    githubLink = "https://github.com",
    liveLink = "https://github.com",
    image = "/images/projects/1.png",
    projectBlogLink = "https://github.com"
}: {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    liveLink: string,
    projectBlogLink: string,
    image?: string,
}) => {
    return (
        <div className={classNames(
            'w-full',
            'rounded-lg',
            'hover: bg-grey-4',
            'transition-all',
            'flex',
            'gap-10',
            'px-6',
            'py-6',
            'group'
        )}>
            <div className={classNames('flex min-w-fit')}>
                <Image src={'/projects/1.png'} alt={title} width={200} height={200} 
                    className='object-cover rounded-sm'
                />
            </div>
            <div className='flex flex-col gap-4'>
                <a href={projectBlogLink}>
                    <h2 className='text-primary-0 font-semibold'>
                        {title}
                    </h2>
                </a>
                <p>
                    {description}
                </p>
                <Chips technologies={technologies}
                    className={classNames('group-hover:text-primary-0', 'group-hover:border-primary-0', 'group-hover:bg-secondary-0/15',
                        'transition-all')}
                />
                <div className={classNames('flex', 'justify-between', 'h-5')}>
                    <div className={classNames('flex', 'items-center', 'gap-4')}>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                        </a>
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <SlGlobe className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                        </a>
                    </div>
                    <div className='hidden group-hover:block'>
                        <LinkButton
                            rightIcon={<MdArrowOutward />}
                            onClick={() => {
                                window.open(projectBlogLink, '_blank')
                            }}
                        >
                            Read More
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard