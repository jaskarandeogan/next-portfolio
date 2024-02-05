/* eslint-disable @next/next/no-img-element */
import React from 'react'
import FelixHeader from '@/components/shared/FelixHeader'
import LinkButton from '@/components/shared/LinkButton'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import { MdOutlinePhoneIphone } from "react-icons/md";
import classNames from 'classnames'
import HashtagList from '@/components/shared/HashtagList'
import dynamic from 'next/dynamic'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const payfelix = ({
    githubLink = "https://github.com/jaskarandeogan",
    liveLink = "#",
    imagesLinks = ["/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg", "/projects/coming-soon/thumbnail-comingsoon.svg"]
}) => {
    return (
        <div className='bg-white'>
            <FelixHeader />
            <div className='mx-auto max-w-2xl lg:max-w-5xl px-4'>
                <div className='mt-[5rem]'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0 text-[#1A99D6]'
                        onClick={() => window.open("/projects", "_self")}
                    >Back</LinkButton>
                </div>
                <div>
                    <h1 className='text-felix-primary text-4xl font-bold mt-10'>Payfelix Remastered</h1>
                    <p className='mt-1 text-felix-light-text font-medium'>Felix makes payments <span className='text-felix-secondary'>easy and super intuitive.</span></p>
                </div>
                <div className='flex mt-10'>
                    <img
                        src="/projects/payfelix/cover-felix.webp"
                        alt="Payfelix"
                        className=" rounded-md shadow-lg"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='flex justify-between items-center mt-8'>
                    <h4 className='font-bold '>Project Year: <span className='text-felix-tertiary'>2024</span></h4>
                    <div>
                        <div className={classNames('flex', 'items-center', 'gap-2')}>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-felix-primary hover:-translate-y-1 w-6 h-6 border border-grey-5-32 p-1 rounded-md hover:shadow-md transition-all' />
                            </a>
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <SlGlobe className='text-felix-primary hover:-translate-y-1 w-6 h-6 border border-grey-5-32 p-1 rounded-md hover:shadow-md transition-all' />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <HashtagList hashtags={['Wordpress', 'Elementor', 'Google Analytics', 'Zoho', 'JS', 'Integrations']}
                        colors={["#1A99D6", "#D30079", "#00558F", "text-splink-primary",]}
                    />
                </div>
                <p className='mt-10 font-medium'>
                    Felix Payment Systems is a leading provider of innovative Soft POS payment services. As a forward-thinking fintech company, we offer cutting-edge solutions that enable businesses to accept secure and seamless card payments through their cloud terminal. Our mission is to make payments simple, secure, and accessible for everyone.
                </p>
                <section className='mt-24'>
                    <h4 className='flex items-center gap-2'>
                        <MdOutlinePhoneIphone className='text-[#A1AAA5]' />
                        <span className='text-[#A1AAA5] font-medium'>
                            Softpos Technology
                        </span>
                    </h4>
                    <h2 className='font-bold text-2xl'>How Felix is changing <span className='text-felix-primary'>daily lives</span></h2>
                    <p className='mt-2 font-medium'>
                        Felix’s softpos technology significantly enhances operational efficiency and customer experience across various sectors. Here are four specific areas where its impact is notable
                    </p>
                </section>
                <section className='mt-8 flex flex-col md:grid grid-cols-2 gap-10'>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        <div>
                            <Image src="/projects/payfelix/retail-grocery.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-felix-secondary font-bold '>
                                Retail and Grocery Stores
                            </h3>
                            <p>
                                Retail and grocery stores leverage SoftPOS for fast, secure checkout, enhancing shopping convenience and reducing wait times, especially during peak hours.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        <div>
                            <Image src="/projects/payfelix/transportation.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-felix-secondary font-bold '>
                                Transportation
                            </h3>
                            <p>
                                SoftPOS streamlines fare payments in transportation, enabling quick, contactless boarding in buses, taxis, and trains, facilitating a smoother travel experience.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        <div>
                            <Image src="/projects/payfelix/caffes.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-felix-secondary font-bold '>
                                Cafes and Restaurants
                            </h3>
                            <p>
                                In cafes and restaurants, SoftPOS offers diners a seamless payment process right from their table, improving service efficiency and customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        <div>
                            <Image src="/projects/payfelix/service-industry.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-felix-secondary font-bold '>
                                Service Industry
                            </h3>
                            <p>
                                The service industry, from beauty salons to freelance professionals, adopts SoftPOS for its flexibility, allowing for on-the-spot, hassle-free payment transactions.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='mt-24'>
                    <h4 className='flex items-center gap-2'>
                        <MdOutlinePhoneIphone className='text-[#A1AAA5]' />
                        <span className='text-[#A1AAA5] font-medium'>
                            Softpos Technology
                        </span>
                    </h4>
                    <h2 className='font-bold text-2xl'>Website’s system <span className='text-felix-primary'>architecture</span></h2>
                    <p className='mt-2 font-medium'>
                        High level system architecture of this web application
                    </p>
                    <div className='mt-8 '>
                        <Image src="/projects/payfelix/sa-felix.svg" alt="Payfelix" width={500} height={500} className="rounded-md w-full md:max-w-[75%] lg:max-w-[50%] m-auto " />
                    </div>
                    <p className='text-center w-full italic'>
                        caption: System architecture
                    </p>
                </section>
                <section className='mt-24'>
                    <h2 className='font-bold text-2xl'>My reflection on this <span className='text-felix-primary'>project</span></h2>
                    <p className='mt-2 font-medium'>
                        Working on this web application was a new journey for me. I dived into the world of WordPress CMS and got my hands on the Elementor framework to put together dynamic pages. It was a bit of a learning curve, trying to build a site that was not only fully manageable through a CMS but also had that modern, interactive feel to it. Elementor was a game changer, really. It came with so many built-in components, but the cool part was that I could also get creative and slot in my own HTML and JavaScript into these widget containers. And the cherry on top? WordPress is so open to third-party integrations. That made a huge difference. Reflecting on it all, this project stretched my skills and made me see just how powerful and flexible these tools can be in the right hands.
                    </p>
                </section>


                <div className='flex justify-between items-center mt-20'>
                    <LinkButton leftIcon={<FiArrowUpLeft />} classnames='px-0 text-[#1A99D6]' onClick={() => {
                        window.open("/projects/pulse", "_self")
                    }}> Previous</LinkButton>
                    <LinkButton rightIcon={<FiArrowUpRight />} classnames='px-0 text-[#1A99D6]' onClick={() => {
                        window.open("/projects/homechow", "_self")
                    }}> Next</LinkButton>
                </div>
                <div className='flex flex-col justify-center items-center py-20'>
                    <SocialIcons
                        variant='felix'
                    />
                    <LinkButton classnames='px-0 ml-5 mt-10 text-[#1A99D6]' onClick={() => window.open("/", "_self")}>Back to Home</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default payfelix