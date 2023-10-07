import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/port logo.svg'
import classNames from 'classnames'
import SocialIcons from '@/components/SocialIcons'

const index = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 p-2'>
        <Image src={logo} alt='logo' 
        width={80} height={80}
        />
        <div className='max-w-[800px]'>
            <h1 className={classNames('text-[2rem]', 'md:text-[2.5rem]', 'font-bold', 'text-grey-8', 'text-center', '')}>Something Awesome is on the Horizon!</h1>
            <p className={classNames('text-[1rem]','md:text-[1.25rem]', 'font-bold', 'text-grey-5', 'text-center')}>Thank you for stopping by! I&apos;m currently crafting a portfolio that reflects my best work and showcases my skills and creativity. Stay tuned for a visual journey into my world of <span className='text-primary-0'>design/development/creative work.</span></p>
        </div>
        <SocialIcons />
    </div>
  )
}

export default index