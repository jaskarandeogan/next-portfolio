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
            'xl:flex-row',
            'gap-5',
            'md:gap-10',
            'px-4',
            'py-4',
            'group'
        )}>
            <div className={classNames('flex min-w-fit')}>
                <Image src={image || '/blogs/1.png'} alt={title} width={400} height={300}
                    className='object-cover rounded-sm w-full xl:hidden'
                />
                <Image src={image || '/blogs/1.png'} alt={title} width={200} height={100}
                    className='object-cover rounded-sm w-[220px] h-[150px] hidden xl:block'
                />

            </div>
            <div className='flex flex-col justify-between gap-5'>
                <div className='flex flex-col gap-2'>
                    <a href={link}>
                        <h2 className='text-secondary-0 font-semibold text-xl'>
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
                    classnames='px-0'
                >
                    Read More
                </LinkButton>
            </div>
        </div>
    )
}

export default BlogsCard