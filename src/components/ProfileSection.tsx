import React from "react";
import classNames from "classnames";
import Image from "next/image";

const ProfileSection = () => {
    return (
        <section className={classNames('flex',
            'flex-col',
            'lg:flex-row',
            'max-w-[450px] ',
            'gap-6',
            'lg:items-center'
        )}>
            <Image src={"/images/Profile.png" || "https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile.png?alt=media&token=f33f23e4-4c80-43ef-98f4-00af768103ea&_gl=1*16ykvvs*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjYzNy40MS4wLjA."} alt="Picture of the author" width={133} height={133} className="hidden md:block rounded-full" />
            <Image src={"/images/Profile.png" || "https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile.png?alt=media&token=f33f23e4-4c80-43ef-98f4-00af768103ea&_gl=1*16ykvvs*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjYzNy40MS4wLjA."} alt="Picture of the author" width={200} height={200} className="m-auto md:hidden rounded-full" />
            <div className="flex flex-col gap-1 lg:gap-3">
                <h2 className={classNames('text-primary-0',
                    'text-[2rem]',
                    'font-bold',
                )}>Jaskaran Deogan</h2>
                <a href="https://payfelix.com" target="_blank">
                    <h3 className={classNames('text-[1.25rem]', 'font-bold', 'text-grey-8')}>
                        Web Developer <span className={classNames('text-secondary-1',
                            'text-[.938rem]'
                        )}>at PayFelix</span>
                    </h3>
                </a>
                <p className={classNames('text-grey-5', 'text-base font-normal')}>
                    I build accessible, inclusive products and digital experiences for the web.
                </p>
            </div>

        </section>
    )
}

export default ProfileSection;