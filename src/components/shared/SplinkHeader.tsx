/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'


const SplinkHeader = () => {
  return (
    <div className='bg-white gap-2 border-b shadow-md py-2 cursor-pointer px-2 sticky top-0 z-50' onClick={
      () => {
        window.open('/', '_self')
      }

    }>
      <div className='flex justify-between items-center max-w-2xl lg:max-w-5xl lg:px-4 m-auto'>
        <img src="/projects/splink/SplinkLogo.svg" alt="Logo" className='w-[100px]'/>
        <div className='flex items-center gap-2 py-2'>
          <Image src={"/images/Profile.png" || "https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Profile.png?alt=media&token=f33f23e4-4c80-43ef-98f4-00af768103ea&_gl=1*16ykvvs*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjYzNy40MS4wLjA."} alt="Picture of the author" width={35} height={35} className="hidden md:block rounded-full" />
          <h3 className='text-[#141417] font-bold text-md md:text-lg md:hidden'>Jaskaran<span className='text-[#141417]'>.</span><span className='text-[#141417] text-lg'>pro</span></h3>
        </div>
      </div>
    </div>
  )
}

export default SplinkHeader