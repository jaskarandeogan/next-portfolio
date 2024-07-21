import classNames from 'classnames'
import React from 'react'
import ExperienceCard from './shared/ExperienceCard'

const Experience = ({ isActive }: {
  isActive: boolean
}) => {

  const scramble = {
    name: "Scramble",
    website: "https://scramblesolutions.com/",
    startDate: "Apr 2024",
    endDate: "Present",
  }

  const payfelix = {
    name: "Felix payment systems",
    website: "https://www.payfelix.com",
    startDate: "May 2023",
    endDate: "Apr 2024",
  }

  const garden = {
    name: "Garden",
    website: "https://www.gardenintel.com/",
    startDate: "Nov 2022",
    endDate: "Apr 2023",
  }

  const homechow = {
    name: "Homechow",
    website: "https://www.linkedin.com/company/homechow-ca",
    startDate: "Jan 2023",
    endDate: "Apr 2023",
  }

  return (
    <section className='flex flex-col gap-10'>
      <ExperienceCard
        title="Full-stack Engineer"
        company={scramble}
        startDate={scramble.startDate}
        endDate={scramble.endDate}
        description="Scramble is a seed-stage startup focused on KYC and user identity. Worked on its MVP as an engineer and also designed a marketplace that offeres exclusive products."
        technologies={["NextJS", "NodeJS", "Tanstack Query", "VPS", "PostgreSQL", "Prisma.IO", "Firebase", "Marketplace"]}
      />
      <ExperienceCard
        title="Web Developer"
        company={payfelix}
        startDate={payfelix.startDate}
        endDate={payfelix.endDate}
        description="At Felix, my role as a web developer centered around devising software solutions for the Marketing department's unique challenges. I thrive on embracing fresh challenges and crafting innovative solutions to drive progress."
        technologies={["MERN", "TypeScript", "Wordpress", "cloud", "VPS", "Elavon PAPI"]}
      />
      <ExperienceCard
        title="Full Stack Engineer"
        company={garden}
        startDate={garden.startDate}
        endDate={garden.endDate}
        description={`Garden Intelligence turns on-chain data into revenue by providing customers with actionable insights so that they can understand their users better and seek revenue-generating opportunities on the blockchain.`}
        technologies={["React", "TailwindCSS", "NodeJS", "AWS", "Stytch", "PostgreSQL"]}
      />
      <ExperienceCard
        title="Frontend Engineer"
        company={homechow}
        startDate={homechow.startDate}
        endDate={homechow.endDate}
        description="Homechow is a platform that connects customers with talented home chefs for delicious, homemade meals delivered straight to their doors as well as a marketplace for vendors and offers flexible work opportunities for drivers. We aim to support local businesses and create a community around authentic, home-cooked food."
        technologies={["NextJS", "TypeScript", "TailwindCSS", "Mapbox", "Firebase", "Storybook", "Cypress", "Netlify"]}
      />
    </section>
  )
}

export default Experience