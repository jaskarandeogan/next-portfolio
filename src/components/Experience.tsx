import classNames from 'classnames'
import React from 'react'
import ExperienceCard from './shared/ExperienceCard'

const Experience = ({isActive}:{
  isActive: boolean
}) => {
  const company = {
    name: "Payfelix",
    website: "https://www.payfelix.com"
  }
  return (
    <section className='flex flex-col gap-10'>
      <ExperienceCard
        title="Software Engineer"
        company={company}
        startDate="Jan 2021"
        endDate="Present"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        technologies={["React", "TypeScript", "TailwindCSS"]}
      />
      <ExperienceCard
        title="Software Engineer"
        company={company}
        startDate="Jan 2021"
        endDate="Present"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        technologies={["React", "TypeScript", "TailwindCSS"]}
      />
      <ExperienceCard
        title="Software Engineer"
        company={company}
        startDate="Jan 2021"
        endDate="Present"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        technologies={["React", "TypeScript", "TailwindCSS"]}
      />
    </section>
  )
}

export default Experience