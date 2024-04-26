import classNames from 'classnames'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const SocialIcons = ({
    variant = 'primary' || 'splink' || 'felix',
    className = 'justify-center'
}) => {
    return (
        <section className={classNames('flex', 'gap-8', 'items-center', 'md:justify-start', className)}>
            <button
                onClick={() => {
                    window.open('https://twitter.com/DeoganJaskaran')
                }}
            >
                <AiOutlineTwitter className={classNames('h-9 w-9 hover:-translate-y-1 transition-all',
                    variant === "primary" && 'text-primary-0',
                    variant === 'splink' && 'text-splink-secondary',
                    variant === 'felix' && 'text-felix-primary'
                )}
                />

            </button>
            <button
                onClick={
                    () => {
                        window.open('https://www.linkedin.com/in/jaskaran-deogan')
                    }
                }
            >
                <FaLinkedinIn className={classNames('h-9 w-9 hover:-translate-y-1 transition-all',
                    variant === "primary" && 'text-primary-0',
                    variant === 'splink' && 'text-splink-secondary',
                    variant === 'felix' && 'text-felix-primary'
                )}
                />
            </button>
            <button
                onClick={
                    () => {
                        window.open('https://www.instagram.com/jskrndeogxn/')
                    }
                }
            >
                <FaInstagram className={classNames('h-9 w-9 hover:-translate-y-1 transition-all',
                    variant === "primary" && 'text-primary-0',
                    variant === 'splink' && 'text-splink-secondary',
                    variant === 'felix' && 'text-felix-primary'
                )}
                />
            </button>
            <button
                onClick={
                    () => {
                        window.open('https://github.com/jaskarandeogan')
                    }
                }
            >
                <FaGithub className={classNames('h-9 w-9 hover:-translate-y-1 transition-all',
                    variant === "primary" && 'text-primary-0',
                    variant === 'splink' && 'text-splink-secondary',
                    variant === 'felix' && 'text-felix-primary'
                )}
                />
            </button>
        </section>
    )
}

export default SocialIcons