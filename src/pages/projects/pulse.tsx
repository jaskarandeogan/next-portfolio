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
    liveLink = "https://g-core-cloned.vercel.app/",
    imagesLinks = ["/projects/garden/garden-1.svg", "/projects/garden/garden-2.svg", "/projects/garden/garden-3.svg", "/projects/garden/garden-4.svg"]
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
                    Pulse - An OnChain Analysis Tool
                </h2>
                <div className='flex mt-10'>
                    <img
                        src="/projects/garden/garden-featured-image.svg"
                        alt="Garden"
                        className=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold mt-5'>Project Year: <span className='text-primary-0'>2022</span></h4>
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
                    <HashtagList hashtags={['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Firebase', 'Vercel']} />
                </div>
                <p className='mt-10 font-medium'>
                    Garden Intelligence turns on-chain data into revenue by providing customers with actionable insights so that they can understand their users better and seek revenue-generating opportunities on the blockchain.
                </p>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-grey-8 text-3xl text-center font-semibold mt-12'>Mockups</h3>
                    <div className='flex flex-col justify-center'>
                        <img src="/projects/garden/Macbook.svg" alt="" className='-my-[80px] hover:scale-105 transition-all  duration-500' />
                        <h4 className='text-center font-semibold text-lg mt-10 md:mt-3'>
                            Macbook Mockup
                        </h4>
                    </div>
                    <div className='flex justify-center items-center gap-5 mt-12'>
                        <div>
                            <img src="/projects/garden/Ipad.svg" alt="" className='-my-[60px] hover:scale-105 transition-all  duration-500' />
                            <h4 className='text-center font-semibold text-lg  mt-8 md:mt-3'>
                                Ipad Mockup
                            </h4>
                        </div>
                        <div>
                            <img src="/projects/garden/Iphone.svg" alt="" className='-my-[60px] hover:scale-105 transition-all  duration-500' />
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
                    During my time at the Garden Intelligence company, I had the opportunity to work on some innovative frontend that was instrumental in transforming on-chain data into actionable revenue-generating insights.
                </p>
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
                    Additionally, the application prioritized seamless data loading with minimal latency, while incorporating user-friendly UX designs implemented in React and enhanced with the efficiency of Tailwind CSS. Additionally, Application has been developed using React as a frontend framework Tailwind CSS as a CSS framework, NodeJS as a backend service, and AWS as a hosting service.
                </p>
                <div className='flex justify-between items-center mt-20'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0' onClick={() => {
                        window.open("/projects/homechow", "_self")
                    }}> Previous</LinkButton>
                    <LinkButton rightIcon={<FiArrowUpRight />} classnames='px-0' onClick={() => {
                        window.open("/projects/payfelix", "_self")
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