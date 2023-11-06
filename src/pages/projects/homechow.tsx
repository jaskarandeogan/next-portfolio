/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from '@/components/shared/Header'
import LinkButton from '@/components/shared/LinkButton'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import classNames from 'classnames'
import HashtagList from '@/components/shared/HashtagList'
import SocialIcons from '@/components/SocialIcons'

const pulse = ({
    githubLink = "https://github.com",
    liveLink = "https://home-chow-cloned.vercel.app/login",
    imagesLinks = ["/projects/homechow/thumbnail.svg", "/projects/homechow/thumbnail2.svg", "/projects/homechow/thumbnail3.svg", "/projects/homechow/thumbnail4.svg"]
}) => {
    return (
        <div className=''>
            <Header />
            <div className='mx-auto max-w-2xl lg:max-w-5xl px-4'>
                <div className='mt-[5rem]'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0'
                        onClick={() => window.open("/projects", "_self")}
                    >Back</LinkButton>
                </div>
                <h2 className='mt-5 text-grey-8 font-semibold'>
                    HomeChow - Handcrafted meal delivery
                </h2>
                <div className='flex mt-10'>
                    <img
                        src="/projects/homechow/feature-image.svg"
                        alt="Garden"
                        className=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold mt-5'>Project Year: <span className='text-primary-0'>2023</span></h4>
                    <div>
                        <div className={classNames('flex', 'items-center', 'gap-4')}>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                            </a>
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <SlGlobe className='text-grey-5 hover:text-grey-8 w-6 h-6' />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <HashtagList hashtags={['NextJS', 'TypeScript', 'Firebase', 'Mapbox', 'TailwindCSS', 'Storybook', 'Cypress', 'Netlify']} />
                </div>
                <p className='mt-10 font-medium'>
                    Homechow is a platform that connects customers with talented home chefs for delicious, homemade meals delivered straight to their doors as well as a marketplace for vendors and offers flexible work opportunities for drivers. We aim to support local businesses and create a community around authentic, home-cooked food.                </p>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-grey-8 text-3xl text-center font-semibold mt-12'>Mockups</h3>
                    <div className='flex flex-col justify-center'>
                        <img src="/projects/homechow/Macbook-h.svg" alt="" className='-my-[80px] hover:scale-105 transition-all  duration-500' />
                        <h4 className='text-center font-semibold text-lg mt-10 md:mt-3'>
                            Macbook Mockup
                        </h4>
                    </div>
                    <div className='flex justify-center items-center gap-5 mt-12'>
                        <div>
                            <img src="/projects/homechow/Ipad-h.svg" alt="" className='-my-[60px] hover:scale-105 transition-all duration-500' />
                            <h4 className='text-center font-semibold text-lg  mt-8 md:mt-3'>
                                Ipad Mockup
                            </h4>
                        </div>
                        <div>
                            <img src="/projects/homechow/iphone-h.svg" alt="" className='-my-[60px] hover:scale-105 transition-all  duration-500' />
                            <h4 className='text-center font-semibold text-lg mt-8 md:mt-3'>
                                Iphone Mockup
                            </h4>
                        </div>
                    </div>
                    <p className='italic text-sm text-grey-8 text-center mt-8'>
                        caption: different screen sizes of the application
                    </p>
                </div>
                <p className='mt-10 font-medium'>
                    During my time at HomeChow company, I had the opportunity to work on some innovative frontend such as Mapbox, Vendor management dashboard, Firebase auth and application layout.                 </p>
                <div className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
                    {imagesLinks.map((imageLink, index) => {
                        return <div key={index} className='flex justify-center items-center mt-10'>
                            <Image src={imageLink} alt="Garden" width={170} height={170} className="" />
                        </div>
                    })}
                </div>
                <p className='italic text-sm text-grey-8 text-center mt-8'>
                    caption: caption: some ui components
                </p>
                <p className='mt-10 font-medium'>
                    Additionally, the application prioritized seamless data loading with minimal latency, while incorporating user-friendly UX designs implemented in NextJS and enhanced with the efficiency of Tailwind CSS.                </p>
                <div className='flex justify-between items-center mt-20'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0' onClick={() => {
                        window.open("/projects/payfelix", "_self")
                    }}> Previous</LinkButton>
                    <LinkButton rightIcon={<FiArrowUpRight />} classnames='px-0' onClick={() => {
                        window.open("/projects/pulse", "_self")
                    }}> Next</LinkButton>
                </div>
                <div className='flex flex-col justify-center items-center py-20'>
                    <SocialIcons />
                    <LinkButton classnames='px-0 ml-5 mt-5' onClick={() => window.open("/", "_self")}>Back to Home</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default pulse