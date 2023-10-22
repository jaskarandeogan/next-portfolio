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
        image='/blogs/storybook.jpg'
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