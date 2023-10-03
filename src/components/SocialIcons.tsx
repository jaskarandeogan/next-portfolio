import classNames from 'classnames'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const SocialIcons = () => {
    return (
        <section className={classNames('flex', 'gap-8', 'items-center')}>
            <AiOutlineTwitter className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}/>
            <FaLinkedinIn className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}/>
            <FaInstagram className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}/>
            <FaGithub className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}/>
        </section>
    )
}

export default SocialIcons