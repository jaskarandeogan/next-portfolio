import classNames from 'classnames'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const SocialIcons = () => {
    return (
        <section className={classNames('flex', 'gap-8', 'items-center')}>
            <button
                onClick={() => {
                    window.open('https://twitter.com/DeoganJaskaran')
                }}
            >
                <AiOutlineTwitter className={classNames('h-10 w-10 text-primary-0 hover:-translate-y-1 transition-all')}
                />

            </button>
            <button
                onClick={
                    () => {
                        window.open('https://www.linkedin.com/in/jaskaran-deogan')
                    }
                }
            >
                <FaLinkedinIn className={classNames('h-10 w-10 text-primary-0 hover:-translate-y-1 transition-all')}
                />
            </button>
            <button
                onClick={
                    () => {
                        window.open('https://www.instagram.com/jskrndeogxn/')
                    }
                }
            >
                <FaInstagram className={classNames('h-10 w-10 text-primary-0 hover:-translate-y-1 transition-all')}
                />
            </button>
            <button
                onClick={
                    () => {
                        window.open('https://github.com/jaskarandeogan')
                    }
                }
            >
                <FaGithub className={classNames('h-10 w-10 text-primary-0 hover:-translate-y-1 transition-all')}
                />
            </button>
        </section>
    )
}

export default SocialIcons