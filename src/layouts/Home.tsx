import React from 'react'
import ProfileSection from "@/components/ProfileSection"
import ColumnNavigation from "@/components/ColumnNavigation"
import SocialIcons from "@/components/SocialIcons"
import AboutComponent from "@/components/AboutComponent"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Blogs from "@/components/Blogs"
import classNames from "classnames"

const Home = () => {
    return (
        <section className="flex md:mx-[50px] xl:mx-[140px] gap-5 h-screen">
            <section className="hidden flex-1 md:flex flex-col h-full max-w-[450px] pt-[100px]  justify-between">
                <div className="flex-1 flex flex-col gap-5 lg:gap-[100px]">
                    <ProfileSection />
                    <ColumnNavigation />
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
                <div className={classNames('md:pt-[100px]')}>
                    <AboutComponent />
                </div>
                <div className={classNames('flex flex-col gap-1')}>
                    <h1 className={classNames('font-medium text-3xl my-7')}>Experience So Far</h1>
                    <Experience />
                </div>
                <div className={classNames('flex flex-col gap-1')}>
                    <h1 className={classNames('font-medium text-3xl my-7')}>Projects</h1>
                    <Projects />
                </div>
                <div className={classNames('flex flex-col gap-1')}>
                    <h1 className={classNames('font-medium text-3xl my-7')}>Blogs</h1>
                    <Blogs />
                </div>
                <div className={classNames('pb-5')}>
                    <p className={classNames('font-medium', '')}>
                        loosely designed in <span className='text-primary-0'>Figma</span> and coded in Visual Studio Code. built using <span className={classNames('text-secondary-0')}>Next.js</span>  with Tailwind CSS, then deployed on <span className='text-grey-8'>Vercel</span>. The <span className='text-primary-0'>Inter</span> typeface is used for all of the text.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Home