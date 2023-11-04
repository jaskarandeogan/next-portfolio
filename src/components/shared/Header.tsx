import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-center items-center gap-2 border-b border-[#606763] py-4 cursor-pointer' onClick={
        () => {
            window.open('/', '_self')
        }
        
    }>
        <Image src={"/images/Profile.png" || "https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile.png?alt=media&token=f33f23e4-4c80-43ef-98f4-00af768103ea&_gl=1*16ykvvs*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjYzNy40MS4wLjA."} alt="Picture of the author" width={35} height={35} className="hidden md:block rounded-full" />
        <h3 className='text-primary-0 font-bold text-3xl '>Jaskaran<span className='text-grey-8'>.</span><span className='text-secondary-0 text-lg'>pro</span></h3>
    </div>
  )
}

export default Header