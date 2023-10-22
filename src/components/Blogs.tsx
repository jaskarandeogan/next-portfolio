import classNames from 'classnames'
import React from 'react'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'
import BlogsCard from './shared/BlogsCard'

const Experience = ({isActive}:{
  isActive: boolean
}) => {
  return (
    <section className='flex flex-col gap-10'>
      <BlogsCard
        title='Supercharge Your UI Development with Storybook'
        date='Mar 2023'
        link='https://dev.to/jaskarandeogan/supercharge-your-ui-development-with-storybook-1nhb'
        image='https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/storybook.jpg?alt=media&token=ddb2e1ae-658b-484d-95b7-4ecb91ae802a&_gl=1*ql6hru*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjgxNy4xMi4wLjA.'
      />
      <BlogsCard
        title='My recent experience at a Web3 meetup'
        date='Sep 2023'
        link='https://www.linkedin.com/posts/jaskaran-deogan_member-monthly-meetups-activity-7110421563505577984-1sR_?utm_source=share&utm_medium=member_desktop'
        image='/blogs/1.png'
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