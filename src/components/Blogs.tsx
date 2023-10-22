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
        title='Sed ut perspiciatis unde omnis iste'
        date='Jan 2021'
        link='https://github.com'
        image='/blogs/1.png'
      />
      <BlogsCard
        title='Sed ut perspiciatis unde omnis iste'
        date='Jan 2021'
        link='https://github.com'
        image='/blogs/1.png'
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