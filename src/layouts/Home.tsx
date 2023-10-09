import React from 'react'
import ProfileSection from "@/components/ProfileSection"
import ColumnNavigation from "@/components/ColumnNavigation"
import SocialIcons from "@/components/SocialIcons"
import AboutComponent from "@/components/AboutComponent"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import classNames from "classnames"

const Home = () => {
    return (
        <section className="flex md:mx-[50px] xl:mx-[140px] gap-5 h-screen">
            <section className="flex-1 flex flex-col h-full max-w-[450px] my-[100px]  justify-between">
                <div className="flex-1 flex flex-col gap-[100px]">
                    <ProfileSection />
                    <ColumnNavigation />
                </div>
                <div className="flex-1 flex">
                    <SocialIcons />
                </div>
            </section>
            <section className="flex-1 flex flex-col  w-full gap-[150px] overflow-y-scroll ">
                <div className={classNames('pt-[100px]')}>
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
            </section>
        </section>
    )
}

export default Home