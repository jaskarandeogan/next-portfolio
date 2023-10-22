import classNames from 'classnames'
import React from 'react'

const Chips = ({
    technologies = ["React", "TypeScript", "TailwindCSS"],
    className = ''
}: {
    technologies?: string[],
    className?: string
}) => {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
               <p key={index} className={classNames('text-xs', 'font-normal','px-2 py-1', 'text-primary-0','border border-primary-0 rounded-full', 'bg-secondary-0/15', className)}>{technology}</p>

            ))}
        </div>
    )
}

export default Chips