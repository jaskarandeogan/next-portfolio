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
        Since 2016, I&apos;ve been on an exciting journey in computer science, evolving from a programming novice to a seasoned software engineer. My recent experiences include contributions to a groundbreaking <span className={classNames(isActive && 'text-grey-8 transition-all')}>web3</span> startup and a pivotal role in a leading fintech cloud-based payment processing company. Each step has been a learning opportunity, and I&apos;m eager to keep pushing the boundaries of what&apos;s possible in software development.
      </p>
      <p>
        At @PayFelix, my role as a web developer centers around devising software solutions for the <span className={classNames(isActive && 'text-primary-0 transition-all', 'font-medium')}>Marketing</span> department&apos;s unique challenges. I thrive on embracing fresh challenges and crafting innovative solutions to drive progress.
      </p>
      <p>Beyond the <span className={classNames(isActive && 'text-grey-8 transition-all')}>tech realm</span>, I love exploring nature, and my go-to activities in my free time are hiking and kayaking. Additionally, I lead an active lifestyle, engaging in workouts and occasional sports. Despite my fear of heights, skydiving is on my bucket list for the future.</p>
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
        >
          Resume
        </LinkButton>
      </div>
    </section>
  )
}

export default AboutComponent