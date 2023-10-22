import classNames from 'classnames'
import React from 'react'
import ProjectCard from './shared/ProjectCard'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'

const Experience = ({isActive}:{
  isActive: boolean
}) => {
  const company = {
    name: "Payfelix",
    website: "https://www.payfelix.com"
  }
  return (
    <section className='flex flex-col gap-10'>
      <ProjectCard
        title="Project Title"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione."
        technologies={["React", "TypeScript", "TailwindCSS"]}
        githubLink="https://github.com"
        liveLink="https://github.com"
        image = "/projects/1.png"
        projectBlogLink="https://github.com"
      />
      <ProjectCard
        title="Project Title"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione."
        technologies={["React", "TypeScript", "TailwindCSS"]}
        githubLink="https://github.com"
        liveLink="https://github.com"
        image = "/projects/1.png"
        projectBlogLink="https://github.com"
      />
      <ProjectCard
        title="Project Title"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis natus doloribus, beatae reprehenderit numquam quibusdam magnam ab eum voluptatibus ratione."
        technologies={["React", "TypeScript", "TailwindCSS"]}
        githubLink="https://github.com"
        liveLink="https://github.com"
        image = "/projects/1.png"
        projectBlogLink="https://github.com"
      />
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
        >
          Archives
        </LinkButton>
      </div>
    </section>
  )
}

export default Experience