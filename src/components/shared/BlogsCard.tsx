import classNames from 'classnames'
import React from 'react'
import Image from 'next/image'
import LinkButton from './LinkButton'
import { MdArrowOutward } from 'react-icons/md'

const BlogsCard = ({
    title = 'Sed ut perspiciatis unde omnis iste',
    date = 'Jan 2021',
    link = 'https://github.com',
    image = '/blogs/1.png',
}: {
    title: string,
    date: string,
    link: string,
    image: string,
}) => {
    return (
        <div className={classNames(
            'w-full',
            'rounded-lg',
            'hover: bg-grey-4',
            'transition-all',
            'flex',
            'flex-col',
            'md:flex-row',
            'md:items-center',
            'gap-5',
            'md:gap-10',
            'px-6',
            'py-6',
            'group'
        )}>
            <div className={classNames('flex min-w-fit')}>
                <Image src={image || '/blogs/1.png'} alt={title} width={200} height={200}
                    className='object-cover rounded-sm'
                />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <a href={link}>
                        <h2 className='text-secondary-0 font-semibold text-lg'>
                            {title}
                        </h2>
                    </a>
                    <p className={classNames('text-xs', 'text-grey-8', 'font-medium')}>
                        {date}
                    </p>
                </div>
                <LinkButton
                    rightIcon={<MdArrowOutward />}
                    onClick={() => {
                        window.open(link, '_blank')
                    }}
                    classnames='px-0 '
                >
                    Read More
                </LinkButton>
            </div>
        </div>
    )
}

export default BlogsCard