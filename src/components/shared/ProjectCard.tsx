import classNames from 'classnames'
import React from 'react'
import { FaGithub, } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'
import Chips from './Chips'
import LinkButton from './LinkButton'
import Link from 'next/link'

const ProjectCard = ({
    title = 'Project Title',
    description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.",
    technologies = ["React", "TypeScript", "TailwindCSS"],
    githubLink = "https://github.com",
    liveLink = "https://github.com",
    image = "/projects/1.png",
    projectBlogLink = "https://github.com",
    caption= "caption here",
    isNew = false,
    isComingSoon = false,
    isOutboundLink = false
}: {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    liveLink: string,
    projectBlogLink: string,
    image?: string,
    caption?: string,
    isNew?: boolean,
    isComingSoon?: boolean,
    isOutboundLink?: boolean
}) => {
    const truncateText = (text: string, maxWords: number) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className={classNames(
            'w-full',
            'rounded-lg',
            'hover: bg-grey-4',
            'transition-all',
            'flex',
            'flex-col',
            'xl:flex-row',
            'gap-5',
            'xl:gap-10',
            'px-4',
            'py-4',
            'group'
        )}>
            <div className={classNames('min-w-fit flex flex-col gap-2 items-center')}>
                <Image src={image || '/projects/1.png'} alt={title} width={400} height={300}
                    className='object-cover rounded-md  xl:hidden w-full shadow-md'
                    loading='lazy'
                />
                <Image src={image || '/projects/1.png'} alt={title} width={200} height={100}
                    className='object-cover rounded-md w-[220px] h-[170px] hidden xl:block shadow-md'
                    loading='eager'
                />
                {/* <span className='italic text-center hidden xl:block'>{caption}</span> */}
            </div>
            <div className='flex flex-col gap-2'>
                <Link href={projectBlogLink} target={isOutboundLink ? "_blank" : "_self"}>
                    <h3 className='text-primary-0 font-semibold'>
                        {title} {isNew && <span className='text-secondary-0 text-xs'>New</span>} {isComingSoon && <span className='text-secondary-0 text-xs'>Coming Soon</span>}
                    </h3>
                </Link>
                <p>
                    {truncateText(description, 20)}
                </p>
                <Chips technologies={technologies}
                    className={classNames('group-hover:text-primary-0', 'group-hover:border-primary-0', 'group-hover:bg-secondary-0/15',
                        'transition-all')}
                />
                <div className={classNames('flex', 'justify-between', 'h-8')}>
                    <div className={classNames('flex', 'items-center', 'gap-4')}>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                        </a>
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <SlGlobe className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                        </a>
                    </div>
                    <div className='hidden md:block'>
                        <div className='hidden group-hover:block'>
                            <LinkButton
                                rightIcon={<MdArrowOutward />}
                                onClick={() => {
                                    window.open(projectBlogLink, isOutboundLink ? '_blank' : '_self')
                                }}
                            >
                                Read More
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <LinkButton
                        rightIcon={<MdArrowOutward />}
                        onClick={() => {
                            window.open(projectBlogLink, isOutboundLink ? '_blank' : '_self')
                        }}
                    >
                        Read More
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard