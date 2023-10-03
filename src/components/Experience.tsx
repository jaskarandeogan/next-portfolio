import classNames from 'classnames'
import React from 'react'

const Experience = () => {
  return (
    <section className='flex flex-col gap-10'>
      <section className={classNames('h-[257px]', 'bg-grey-6', 'flex', 'w-full')}>Experience1</section>
      <section className={classNames('h-[257px]', 'bg-grey-6', 'flex', 'w-full')}>Experience2</section>
      <section className={classNames('h-[257px]', 'bg-grey-6', 'flex', 'w-full')}>Experience3</section>
    </section>
  )
}

export default Experience