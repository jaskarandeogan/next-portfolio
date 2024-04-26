import React from "react";
import classNames from "classnames";
import Image from "next/image";

const ProfileSection = () => {
    return (
        <section className={classNames('flex',
            'flex-col',
            'lg:flex-row',
            'gap-6',
            'lg:items-center'
        )}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile-transformed.png?alt=media&token=28975845-aeb4-4a66-b66f-4b5a3e014860" || "/images/Profile.png"} alt="Picture of the author" width={133} height={133} className="hidden md:block rounded-full" />
            <Image src={"https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile-transformed.png?alt=media&token=28975845-aeb4-4a66-b66f-4b5a3e014860" || "/images/Profile.png"} alt="Picture of the author" width={200} height={200} className="md:hidden rounded-full" />
            <div className="flex flex-col ">
                <h2 className={classNames('text-primary-0',
                    'text-[2rem]',
                    'font-bold',
                )}>Jaskaran Deogan</h2>
                <a href="https://payfelix.com" target="_blank">
                    <h3 className={classNames('text-[1.25rem]', 'font-bold', 'text-grey-8')}>
                        Software <span className={classNames('text-secondary-1',
                            'text-[.938rem]'
                        )}>Developer</span>
                    </h3>
                </a>
                <p className={classNames('text-grey-5', 'text-base font-normal')}>
                    I aim to create the next generation of business portfolios and enhance web experiences.
                </p>
            </div>

        </section>
    )
}

export default ProfileSection;