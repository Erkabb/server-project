import Image from 'next/image'
import React from 'react'
import { SubHeader } from './header/SubHeader'
import { Button } from './ui/button'

export const TopContent = () => {
  return (
    <div className='w-full m-10 rounded-xl relative'>
         <div className='flex justify-center w-full sticky top-0'>
        <SubHeader/>
        </div>
        <Image src={'/rhodetoplogo.jpg'} alt='top content' className='w-full rounded-xl h-[700px]' width={500} height={700}/>
        <div className='absolute z-20 bottom-10 right-10 text-white flex flex-col items-end'>
        <p className='text-sm font-semibold'>MEET PEPTIDE LIP SHAPE</p>
        <p className='text-[35px]'>Arriving January 30th at 9pm.</p>
        <Button className='rounded-2xl bg-transparent hover:bg-white hover:text-[#a9a7a7] text-center px-6 border border-white hover:bg-gradient-to-b from-white/100 to-transparent transition-all duration-500' >JOIN THE WAITLIST</Button>
       </div>
    </div>
  )
}

