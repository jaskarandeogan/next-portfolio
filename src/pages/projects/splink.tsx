/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SplinkHeader from '@/components/shared/SplinkHeader'
import LinkButton from '@/components/shared/LinkButton'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import classNames from 'classnames'
import HashtagList from '@/components/shared/HashtagList'
import SocialIcons from '@/components/SocialIcons'

const payfelix = ({
    githubLink = "https://github.com/jaskarandeogan",
    liveLink = "#",
    imagesLinks = ["/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg"]
}) => {
    return (
        <div className='bg-white'>
            <SplinkHeader />
            <div className='mx-auto max-w-2xl lg:max-w-5xl px-4'>
                <div className='mt-[5rem]'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0 text-splink-primary'
                        onClick={() => window.open("/projects", "_self")}
                    >Back</LinkButton>
                </div>
                {/* <h2 className='mt-5 text-splink-secondary font-semibold'>
                    Splink
                </h2> */}
                <div className='flex mt-10'>
                    <img
                        src="/projects/splink/cover.svg"
                        alt="Payfelix"
                        className=" rounded-md shadow-lg"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <h4 className='font-bold '>Project Year: <span className='text-grey-2'>2022</span></h4>
                    <div>
                        <div className={classNames('flex', 'items-center', 'gap-2')}>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-splink-secondary hover:-translate-y-1 w-6 h-6 border border-grey-5-32 p-1 rounded-md hover:shadow-md transition-all' />
                            </a>
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <SlGlobe className='text-splink-secondary hover:-translate-y-1 w-6 h-6 border border-grey-5-32 p-1 rounded-md hover:shadow-md transition-all' />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <HashtagList hashtags={['React Native', 'NodeJS', 'Native Base', 'Google Vision API', 'AWS', 'MongoDB', 'CICD']}
                        colors={["#26DCD0", "#D30079", "#7575EA", "#97F36B", 'text-grey-2']}
                    />
                </div>
                <p className='mt-10 font-medium'>
                    Splink, a revolutionary mobile application developed over a focused 12-week period, is reshaping the shopping landscape. This project goes beyond mere transactions; it&apos;s about connecting people, saving money, and making a positive impact in our communities.
                </p>

                <h3 className='mt-10 text-splink-secondary font-semibold'>Genesis of Splink</h3>
                <p className='mt-1 font-medium'>
                    Splink connects like-minded individuals for bulk purchases, merging collective buying power with social interaction. It&apos;s more than just a shopping app; it&apos;s a platform fostering shared interests and community.
                </p>
                <h3 className='mt-10 text-splink-secondary font-semibold'>Key Features</h3>
                <div className='flex flex-col gap-8 mt-5'>
                    <section className='flex flex-col-reverse md:flex-row gap-5'>
                        <div className='md:flex-1'>
                            <h4 className='font-semibold text-splink-secondary w-full'>Social Shopping</h4>
                            <p className='mt-1 font-medium'>
                                Seamlessly integrates social media with group shopping, enhancing the shopping experience and fostering community.
                            </p>
                        </div>
                        <div className='max-w-fit md:flex-1'>
                            <img src="/projects/splink/social-shopping.svg" alt="" className='rounded-md shadow-md' />
                            <p className='italic text-sm text-center mt-4'>
                                caption: select your friends to shop with
                            </p>
                        </div>
                    </section>
                    <section className='flex flex-col-reverse md:flex-row-reverse gap-5'>
                        <div className='md:flex-1'>
                            <h4 className='font-semibold text-splink-secondary w-full'>Bill Scanning and Expense Distribution</h4>
                            <p className='mt-1 font-medium'>
                                Powered by Google Vision API, Splink automates bill analysis and expense distribution, ensuring a fair and efficient process.
                            </p>
                        </div>
                        <div className='max-w-fit md:flex-1'>
                            <img src="/projects/splink/bill-scanning.svg" alt="" className='rounded-md shadow-md' />
                            <p className='italic text-sm text-center mt-4'>
                                caption: scan your bill and let splink do the rest
                            </p>
                        </div>
                    </section>
                    <section className='flex flex-col-reverse md:flex-row gap-5'>
                        <div className='md:flex-1'>
                            <h4 className='font-semibold text-splink-secondary w-full'>Transparent Communication</h4>
                            <p className='mt-1 font-medium'>
                                Facilitates clear communication among participants, providing real-time updates on shared expenses and fostering trust within the group.
                            </p>
                        </div>
                        <div className='max-w-fit md:flex-1'>
                            <img src="/projects/splink/group-balance.svg" alt="" className='rounded-md shadow-md' />
                            <p className='italic text-sm text-center mt-4'>
                                caption: see your group balance in real-time
                            </p>
                        </div>
                    </section>
                </div>
                <div>
                    <h3 className='mt-10 text-splink-secondary font-semibold'>My Contribution</h3>
                    <p className='mt-1 font-medium'>
                        As a key contributor, I focused on refining the user experience, developing the React Native mobile app for both Android and iOS using the MERN stack. I also played a pivotal role in implementing the bill split feature which had the functionality to scan a bill and allocate items to participants and calculate totals.
                    </p>
                </div>
                <div>
                    <h3 className='mt-10 text-splink-secondary font-semibold'>System Architecture</h3>
                    <img src="/projects/splink/system-architecture.svg" alt="system architecture" className='rounded-md shadow-md mt-5 m-auto' />
                    <p className='italic text-sm text-center mt-4'>
                        caption: system architecture
                    </p>
                </div>
                <div>
                    <h3 className='mt-10 text-splink-secondary font-semibold'>Impact</h3>
                    <p className='mt-1 font-medium'>
                        Splink isn&apos;t merely a product; it&apos;s a lesson in innovation and adaptability. It has taught me the power of collaboration and the potential for technology to create positive change.
                    </p>
                </div>
                <div className='flex justify-between items-center mt-20'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0 text-splink-primary' onClick={() => {
                        window.open("/projects/pulse", "_self")
                    }}> Previous</LinkButton>
                    <LinkButton rightIcon={<FiArrowUpRight />} classnames='px-0 text-splink-primary' onClick={() => {
                        window.open("/projects/homechow", "_self")
                    }}> Next</LinkButton>
                </div>
                <div className='flex flex-col justify-center items-center py-20'>
                    <SocialIcons 
                        variant='splink'
                    />
                    <LinkButton classnames='px-0 ml-5 mt-10 text-splink-primary' onClick={() => window.open("/", "_self")}>Back to Home</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default payfelix