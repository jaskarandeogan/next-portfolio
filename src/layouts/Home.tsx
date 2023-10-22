import React, { use, useEffect, useRef, useState } from 'react'
import ProfileSection from "@/components/ProfileSection"
import ColumnNavigation from "@/components/ColumnNavigation"
import SocialIcons from "@/components/SocialIcons"
import AboutComponent from "@/components/AboutComponent"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Blogs from "@/components/Blogs"
import classNames from "classnames"
import { useInView } from 'react-intersection-observer';
import { BsChatTextFill } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import LinkButton from '@/components/shared/LinkButton'

const Home = () => {

    const [section1Ref, inView1, entry1] = useInView({
        threshold: 0.8,
    });

    const [section2Ref, inView2, entry2] = useInView({
        threshold: 0.4,
    });

    const [section3Ref, inView3, entry3] = useInView({
        threshold: 0.1,
    });

    const [section4Ref, inView4, entry4] = useInView({
        threshold: 0.1,
    });

    const [activeItem, setActiveItem] = useState('About');
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        if (inView1) {
            setActiveItem('About')
        } else if (inView2) {
            setActiveItem('Experience')

        } else if (inView3) {
            setActiveItem('Projects')

        } else if (inView4) {
            setActiveItem('Blogs')
        }
    }, [inView1, entry1, inView2, entry2, inView3, entry3, inView4, entry4, section1Ref, section2Ref, section3Ref, section4Ref])

    return (
        <section className="flex md:mx-[50px] xl:mx-[140px] gap-5 h-screen">
            <section className="hidden flex-1 md:flex flex-col h-full max-w-[450px] pt-[100px]  justify-between">
                <div className="flex-1 flex flex-col gap-5 lg:gap-[100px]">
                    <ProfileSection />
                    <ColumnNavigation
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}

                    />
                </div>
                <div className="flex flex-col justify-end flex-1 pb-10">
                    <SocialIcons />
                </div>
            </section>
            <section className="flex-1 flex flex-col p-4 md:p-0  w-full gap-[50px] md:gap-[150px] overflow-y-scroll ">
                <div className='flex flex-col gap-4 md:hidden'>
                    <ProfileSection />
                    <SocialIcons />
                </div>
                <div id="about" className={classNames('md:pt-[100px]')} ref={section1Ref}>
                    <h1 className={classNames('font-medium text-3xl mb-7', activeItem === 'About' && 'text-grey-8 transition-all')}>About Me</h1>
                    <AboutComponent isActive={activeItem === 'About' ? true : false} />
                </div>
                <div id="experience" className={classNames('flex flex-col gap-1')} ref={section2Ref}>
                    <h1 className={classNames('font-medium text-3xl my-7 transition-all', activeItem === 'Experience' && 'text-grey-8 transition-all')}>Experience So Far</h1>
                    <Experience isActive={activeItem === 'Experience' ? true : false} />
                </div>
                <div id="projects" className={classNames('flex flex-col gap-1')} ref={section3Ref}>
                    <h1 className={classNames('font-medium text-3xl my-7', activeItem === 'Projects' && 'text-grey-8 transition-all')}>Projects</h1>
                    <Projects isActive={activeItem === 'Projects' ? true : false} />
                </div>
                <div id="blogs" className={classNames('flex flex-col gap-1')} ref={section4Ref}>
                    <h1 className={classNames('font-medium text-3xl my-7', activeItem === 'Blogs' && 'text-grey-8 transition-all')}>Blogs</h1>
                    <Blogs isActive={activeItem === 'Blogs' ? true : false} />
                </div>
                <div className={classNames('pb-10')}>
                    <p className={classNames('font-medium')}>
                        Loosely designed in <span className='text-primary-0'>Figma</span> and coded in Visual Studio Code. built using <span className={classNames('text-secondary-0')}>Next.js</span>  with Tailwind CSS, then deployed on <span className='text-grey-8'>Vercel</span>. The <span className='text-primary-0'>Inter</span> typeface is used for all of the text.
                    </p>
                </div>
            </section>
            <div className='absolute bottom-0 right-0 m-10 flex flex-col justify-end items-end gap-2'>
                {isChatOpen &&
                    <section className='min-h-[200px] w-[400px] border border-grey-4 flex inset-0 bg-opacity-30 backdrop-blur-lg rounded-md'>
                        <form className='flex-1 p-8'>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-primary-0 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border bg-black border-grey-4 rounded-sm focus:outline-none focus:border-primary-0 p-1"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-primary-0 text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full border bg-black border-grey-4 rounded-sm h-32 resize-none focus:outline-none focus:border-primary-0 p-1"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <LinkButton classnames='px-0' onClick={() => {
                                setIsChatOpen(false)
                            }}
                                rightIcon={<FiArrowUpRight />}
                            >
                                Send
                            </LinkButton>
                        </form>
                    </section>
                }
                <BsChatTextFill className='text-primary-0 text-6xl h-8 w-8' onClick={
                    () => {
                        setIsChatOpen(!isChatOpen)
                    }
                } />
            </div>
        </section>
    )
}

export default Home