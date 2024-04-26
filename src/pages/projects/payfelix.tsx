/* eslint-disable @next/next/no-img-element */
import React from 'react'
import FelixHeader from '@/components/shared/FelixHeader'
import LinkButton from '@/components/shared/LinkButton2'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import { MdOutlinePhoneIphone } from "react-icons/md";
import classNames from 'classnames'
import HashtagList from '@/components/shared/HashtagList'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
import Link from 'next/link'

const payfelix = ({
    githubLink = "https://github.com/jaskarandeogan",
    liveLink = "https://payfelix.com",
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
                        src="/projects/payfelix/felix-cover.webp"
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
                    <HashtagList hashtags={['Wordpress', 'Elementor', 'Google Analytics', 'Zoho', 'JS', 'Integrations', 'SEO', 'UI/UX', 'Web Design']}
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
                        {/* <div>
                            <Image src="/projects/payfelix/retail-grocery.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div> */}
                        <div className=''>
                            <h3 className='text-felix-secondary font-bold '>
                                Retail and Grocery Stores
                            </h3>
                            <p>
                                Retail and grocery stores leverage SoftPOS for fast, secure checkout, enhancing shopping convenience and reducing wait times, especially during peak hours.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        {/* <div>
                            <Image src="/projects/payfelix/transportation.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div> */}
                        <div className=''>
                            <h3 className='text-felix-secondary font-bold '>
                                Transportation
                            </h3>
                            <p>
                                SoftPOS streamlines fare payments in transportation, enabling quick, contactless boarding in buses, taxis, and trains, facilitating a smoother travel experience.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        {/* <div>
                            <Image src="/projects/payfelix/caffes.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div> */}
                        <div className=''>
                            <h3 className='text-felix-secondary font-bold '>
                                Cafes and Restaurants
                            </h3>
                            <p>
                                In cafes and restaurants, SoftPOS offers diners a seamless payment process right from their table, improving service efficiency and customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className='p-5 shadow-md border rounded-xl  hover:shadow-sky-200 transition-shadow'>
                        {/* <div>
                            <Image src="/projects/payfelix/service-industry.jpg" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </div> */}
                        <div className=''>
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
                    <h2 className='font-bold text-2xl'>System <span className='text-felix-primary'>architecture</span></h2>
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
                <p className='font-medium text-center mt-10'>
                    Please feel free to visit the <Link target="_blank" rel="noopener noreferrer" href={'https://payfelix.com'} className='text-felix-primary font-bold hover:underline'>live site.</Link>
                </p>
                <section className='mt-24'>
                    <h2 className='font-bold text-2xl'>My contributions in <span className='text-felix-primary'>UI/UX</span></h2>
                    <p className='mt-2 font-medium'>
                        While I was working on this project, I had this chance to create a re-design of the blog/news page. I wanted to make it more engaging and interactive for the users. I spent some time in looking at good practices of0 UI/UX and how to make it SEO friendly as well. After some research and a number of iterations, I created a complete wireframe and then mock up of News page. I used a lot of white space and a clean layout to make the content more readable. I also added a few animations to make the page more dynamic. I think the new design is more modern and user-friendly. I hope you like it!
                    </p>
                    <p className='font-medium md:text-center mt-10'>
                        News Page <Link target="_blank" rel="noopener noreferrer" href={'https://payfelix.com/news'} className='text-felix-primary font-bold hover:underline'>payfelix.com/news</Link>
                    </p>
                </section>
                <section className='mt-24'>
                    <h2 className='font-bold text-2xl '>Site <span className='text-felix-primary'>Web-Vitals</span></h2>
                    <div className='flex flex-col  justify-between items-start gap-6 mt-6 lg:flex-row'>
                        <a href="https://pagespeed.web.dev/analysis/https-payfelix-com/fxri9wy1vf?form_factor=desktop" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <Image src="/projects/payfelix/web-vitals-1.png" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </a>
                        <a href="https://pagespeed.web.dev/analysis/https-payfelix-com/fxri9wy1vf?form_factor=mobile" target="_blank" rel="noopener noreferrer" className='w-full'>
                            <Image src="/projects/payfelix/web-vitals-2.png" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                        </a>
                    </div>
                    <p className='mt-6 font-medium'>
                        The site is optimized for performance and SEO. It has a 100/100 on performance and best practices, while 95+ on all aspects such as SEO and Accessibility. The site is fully responsive and accessible on all devices.
                    </p>
                    <p className='mt-2 font-medium'>
                        Check live speed <a href="https://pagespeed.web.dev/analysis/https-payfelix-com/fxri9wy1vf?form_factor=desktop" target="_blank" rel="noopener noreferrer" className='text-felix-primary font-bold hover:underline'>here.</a>
                    </p>
                </section>
                <section className='mt-24'>
                    <h2 className='font-bold text-2xl '>Site <span className='text-felix-primary'>SEO</span></h2>
                    <div className='flex flex-col  justify-between items-start gap-6 mt-6 lg:flex-row'>
                        <div className='flex-1 flex flex-col gap-2 w-full'>
                            <Image src="/projects/payfelix/seo-1.png" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                            <span className='text-center w-full italic'>
                                Ranking 4th on Google among other SDK competitors
                            </span>
                        </div>
                        <div className='flex-1 flex flex-col gap-2 w-full'>
                            <Image src="/projects/payfelix/seo-2.png" alt="Payfelix" width={500} height={500} className="rounded-md w-full" />
                            <span className='text-center w-full italic'>
                                Ranking 3rd on Google among other SoftPOS competitors
                            </span>
                        </div>
                    </div>
                    <p className='mt-6 font-medium'>
                        After I optimized the site to achieve technical SEO best practices, we saw a notable improvement in site ranking. This optimization led to a significant increase in organic search traffic. Moreover, there was an overall surge in site visitors by 225%, which marked an increase from the usual 40-50 daily visits to well over 130.
                    </p>
                </section>
                <section className='mt-24'>
                    <h2 className='font-bold text-2xl'>My reflection on this <span className='text-felix-primary'>project</span></h2>
                    <p className='mt-2 font-medium'>
                        Working on this web application was a new journey for me. I dived into the world of WordPress CMS and got my hands on the Elementor framework to put together dynamic pages. It was a bit of a learning curve, trying to build a site that was not only fully manageable through a CMS but also had that modern, interactive feel to it. Elementor was a game changer, really. It came with so many built-in components, but the cool part was that I could also get creative and slot in my own HTML and JavaScript into these widget containers. And the cherry on top? WordPress is so open to third-party integrations. That made a huge difference. Reflecting on it all, this project stretched my skills and made me see just how powerful and flexible these tools can be in the right hands.
                    </p>
                    <p className='font-medium md:text-center mt-10'>
                        Thanks for reading! Please feel free to visit the <Link target="_blank" rel="noopener noreferrer" href={'https://payfelix.com'} className='text-felix-primary font-bold hover:underline'>live site.</Link>
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
                <div className='flex flex-col justify-center items-center py-20 gap-6'>
                    <p className='font-medium'>
                        Contact me to know more about this project!
                    </p>
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