import classNames from 'classnames'
import React from 'react'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'
import BlogsCard from './shared/BlogsCard'

const Experience = ({ isActive }: {
  isActive: boolean
}) => {
  return (
    <section className='flex flex-col gap-10'>
      <BlogsCard
        title='Reflecting on setting up goals for 2024'
        date='Jan 2024'
        link='https://www.linkedin.com/posts/jaskaran-deogan_2024vision-newyearresolutions-personalgrowth-activity-7144393729515171840-SOmC?utm_source=share&utm_medium=member_desktop'
        image='https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Reflection-featured-image.png?alt=media&token=988f8222-59ec-455f-b419-c8f62fabc756'
      />
      <BlogsCard
        title='My recent experience at a Web3 meetup'
        date='Sep 2023'
        link='https://www.linkedin.com/posts/jaskaran-deogan_member-monthly-meetups-activity-7110421563505577984-1sR_?utm_source=share&utm_medium=member_desktop'
        image='https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Web3-featured-image.png?alt=media&token=5dc756f8-a8b0-485b-a926-a6d4ab6f9ede'
      />
      <BlogsCard
        title='Supercharge Your UI Development with Storybook'
        date='Mar 2023'
        link='https://dev.to/jaskarandeogan/supercharge-your-ui-development-with-storybook-1nhb'
        image='https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/storybook.jpg?alt=media&token=ddb2e1ae-658b-484d-95b7-4ecb91ae802a&_gl=1*ql6hru*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjgxNy4xMi4wLjA.'
      />
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
          onClick={() => window.open("/comingsoon", "_blank")}
        >
          Archives
        </LinkButton>
      </div>
    </section>
  )
}

export default Experience