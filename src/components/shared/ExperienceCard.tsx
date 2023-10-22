import classNames from 'classnames'
import React from 'react'
import Chips from './Chips'
import { MdArrowOutward } from "react-icons/md";

interface ExperienceCardProps {
    startDate: string,
    endDate: string,
    title: string,
    company: {
        name: string,
        website: string
    },
    description: string,
    technologies: string[],
}

const ExperienceCard = ({
    startDate = "Jan 2021",
    endDate = "Present",
    title = "Software Engineer",
    company = {
        name: "Google",
        website: "https://google.com"
    },
    description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit dolore maiores nostrum, blanditiis expedita neque ea quidem, eligendi quaerat beatae laborum numquam harum ducimus. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.",
    technologies = ["React", "TypeScript", "TailwindCSS"]
}: ExperienceCardProps
) => {
    return (
        <div className={classNames(
            'w-full',
            'rounded-lg',
            'group',
            'hover:bg-grey-4',
            'border',
            'border-grey-4',
            'hover:shadow-lg',
            'hover:border',
            'hover:border-secondary-4',
            'transition-all',
            'flex',
            'flex-col',
            '2xl:flex-row',
            '2xl:gap-10',
            'px-6',
            'py-6'
        )}>
            <p className={classNames('text-lg', 'min-w-[200px]', 'font-medium')}>
                {startDate} - {endDate}
            </p>
            <div className={classNames('flex flex-col gap-6')}>
                <a href={company.website} target='_blank'>
                    <h2 className={classNames('text-primary-0', 'font-semibold',
                        'text-xl',
                        'md:text-2xl',
                        'xl:text-3xl',
                        'group-hover:text-secondary-0',
                        'transition-all',
                        'flex',
                        'items-center'
                    )}
    
                    >
                        {title} - {company.name} <span className='p-2 group-hover:-translate-y-2 transition-all group-hover:text-secondary-0'><MdArrowOutward /></span>
                    </h2>
                </a>
                <p className={classNames('')}>
                    {description}
                </p>
                <Chips technologies={technologies}
                    className={classNames('group-hover:text-secondary-0', 'group-hover:border-secondary-0', 'group-hover:bg-secondary-0/15',
                        'transition-all')}
                />
            </div>
        </div>
    )
}

export default ExperienceCard