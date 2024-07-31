import classNames from 'classnames'
import React from 'react'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'

const AboutComponent = ({ isActive = false }: {
  isActive: boolean
}) => {
  return (
    <section className={classNames('flex', 'w-full', 'flex-col', 'gap-7')}>
      <p>
        Since 2016, I&apos;ve embarked on an exciting journey in computer science, transforming from a programming novice to a seasoned software engineer. This journey has been like a dream come true, each step presenting invaluable learning opportunities and fueling my passion for pushing the boundaries of what&apos;s possible in software development.
      </p>
      <p className='transition-all'>
        Throughout my career, I&apos;ve indulged myself into a number of web spaces, contributing my expertise wherever needed. My experiences span across <span className={classNames(isActive && 'text-primary-0 transition-all', 'transition-all')}>web 3.0</span> , the cloud-based softpos industry - a very niche field - while my time at <span className={classNames(isActive && 'text-felix-secondary transition-all', 'transition-all')}>Felix</span> and the <span className={classNames(isActive && 'text-[#ffc901] transition-all', 'transition-all')}>KYC and Identity </span> Industry, where the idea is to de-risk users from their personal information on the internet. These varied experiences have provided me with deep insights into business operations, product quality, and sales, all of which are crucial for success. I&apos;m eager to continue this journey, embracing whatever comes my way with optimism and determination.
      </p>
      <p className='transition-all'>Beyond the <span className={classNames(isActive && 'text-grey-8 transition-all', 'transition-all')}>tech realm</span>, I love exploring nature, and my go-to activities in my free time are hiking and kayaking. Additionally, I lead an active lifestyle, engaging in workouts and occasional sports. Despite my fear of heights, skydiving is on my bucket list for the future.</p>
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
          onClick={() => {
            window.open('/Jaskaran-Deogan.pdf', '_blank')
          }}
        >
          Resume
        </LinkButton>
      </div>
    </section>
  )
}

export default AboutComponent