import React from "react";
import classNames from "classnames";
import Image from "next/image";

const ProfileSection = () => {
    return (
        <section className={classNames('flex',
            'max-w-[450px] ',
            'gap-6',
            'items-center'
        )}>
            <Image src="/images/profile.png" alt="Picture of the author" width={133} height={133} />
            <div className="flex flex-col gap-3">
                <h2 className={classNames('text-primary-0',
                    'text-[2rem]',
                    'font-bold',
                )}>Jaskaran Deogan</h2>
                <h3 className={classNames('text-[1.25rem]', 'font-bold', 'text-grey-8')}>
                    Software Engineer <span className={classNames('text-secondary-1',
                        'text-[.938rem]'
                    )}>at PayFelix</span>
                </h3>
                <p className={classNames('text-grey-5', 'text-base font-normal')}>
                    I build accessible, inclusive products and digital experiences for the web.
                </p>
            </div>

        </section>
    )
}

export default ProfileSection;