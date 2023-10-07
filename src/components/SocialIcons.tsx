import classNames from 'classnames'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const SocialIcons = () => {
    return (
        <section className={classNames('flex', 'gap-8', 'items-center')}>
            <AiOutlineTwitter className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}
                onClick={() => {
                    window.open('https://twitter.com/DeoganJaskaran')
                }}
            />
            <FaLinkedinIn className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}
                onClick={
                    () => {
                        window.open('www.linkedin.com/in/jaskaran-deogan')
                    }
                }
            />
            <FaInstagram className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}
                onClick={
                    () => {
                        window.open('https://www.instagram.com/jskrndeogxn/')
                    }
                }
            />
            <FaGithub className={classNames('h-10 w-10 text-primary-0 hover:cursor-pointer hover:-translate-y-1 transition-all')}
                onClick={
                    () => {
                        window.open('https://github.com/jaskarandeogan')
                    }
                }
            />
        </section>
    )
}

export default SocialIcons