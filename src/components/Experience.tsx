import classNames from 'classnames'
import React from 'react'
import ExperienceCard from './shared/ExperienceCard'

const Experience = ({isActive}:{
  isActive: boolean
}) => {
  const payfelix = {
    name: "Payfelix",
    website: "https://www.payfelix.com",
    startDate: "May 2023",
    endDate: "Present",
  }

  const garden ={
    name: "Garden",
    website: "https://www.gardenintel.com/",
    startDate: "Nov 2022",
    endDate: "May 2023",
  }

  const homechow ={
    name: "Homechow",
    website: "https://www.linkedin.com/company/homechow-ca",
    startDate: "Jan 2022",
    endDate: "Apr 2022",
  }

  return (
    <section className='flex flex-col gap-10'>
      <ExperienceCard
        title="Web Developer"
        company={payfelix}
        startDate={payfelix.startDate}
        endDate={payfelix.endDate}
        description="At @PayFelix, my role as a web developer centers around devising software solutions for the Marketing department's unique challenges. I thrive on embracing fresh challenges and crafting innovative solutions to drive progress."
        technologies={["MERN", "TypeScript", "Wordpress", "Cloud", "Felix Portal"]}
      />
      <ExperienceCard
        title="Full Stack Engineer"
        company={garden}
        startDate={garden.startDate}
        endDate={garden.endDate}
        description={`"Jas helped us a lot in the early days of Garden! He is a wonderful developer who got along with the rest of the team, and was very proactive and deeply invested in building our front-end stack. Highly recommend to anyone looking for a team-oriented full-stack developer." - Adi Sidapara, CEO at Garden`}
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