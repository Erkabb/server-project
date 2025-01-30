import Image from 'next/image';
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='w-full p-5 bg-[#e5e5e5] m-10 rounded-xl flex flex-col'>
        <Image src={'/rhodelogo.png'} alt='logo' width={1200} height={400} className='w-full h-full border-b bg-[#e5e5e5] p-5 border-black'/>
        <div className='w-full border-b flex border-[#757575]'>
            <div className='p-5 border-r flex flex-col border-black gap-5 text-[#7e7d7d]'>
                <p>Join us on the rhode to an effortless glow.</p>
                <p>Glaze your inbox with tips, tricks & exclusive content from Hailey.</p>
                <div className='flex'>
                <Input placeholder='Email Address' className='h-[50px] rounded-s-xl bg-white rounded-e-none text-[#7e7d7d]'/>
                <Button className='w-[150px] rounded-e-xl h-[50px] rounded-s-none bg-white text-[#7e7d7d] hover:bg-[#7e7d7d] hover:text-white'>SUBSCRIBE</Button>
                </div>
                <p>By signing up, you agree to our <Link href={''} className='hover:underline'>Privacy Policy*</Link>.</p>
            </div>
            <div className='flex justify-evenly w-full p-5 text-[#7e7d7d]'>
                <div>
                  <h1 className='text-[18px] text-[#6a6969] font-semibold pb-5'>NAVIGATE</h1>
                 <ul className='flex flex-col gap-5'>
                  <li><Link href={''} className='hover:underline'>Shop</Link></li>
                  <li><Link href={''} className='hover:underline'>Our Story</Link></li>
                  <li><Link href={''} className='hover:underline'>Rhode Futures</Link></li>
                  <li><Link href={''} className='hover:underline'>Impact</Link></li>
                  <li><Link href={''} className='hover:underline'>Vlog</Link></li>
                 </ul>
                </div>
                <div>
                  <h1 className='text-[18px] text-[#6a6969] font-semibold pb-5'>SOCIAL</h1>
                 <ul className='flex flex-col gap-5'>
                  <li><Link href={''} className='hover:underline'>Instagram</Link></li>
                  <li><Link href={''} className='hover:underline'>Youtube</Link></li>
                  <li><Link href={''} className='hover:underline'>Tiktok</Link></li>
                 </ul>
                </div> <div>
                  <h1 className='text-[18px] text-[#6a6969] font-semibold pb-5'>OFFICIAL</h1>
                 <ul className='flex flex-col gap-5'>
                  <li><Link href={''} className='hover:underline'>Privacy</Link></li>
                  <li><Link href={''} className='hover:underline'>Terms</Link></li>
                  <li><Link href={''} className='hover:underline'>Accessibility</Link></li>
                  <li><Link href={''} className='hover:underline'>FAQ</Link></li>
                  <li><Link href={''} className='hover:underline'>Contact</Link></li>
                  <li><Link href={''} className='hover:underline'>Events</Link></li>
                 </ul>
                </div> <div>
                  <h1 className='text-[18px] text-[#6a6969] font-semibold pb-5'>SUPPORT</h1>
                 <ul className='flex flex-col gap-5'>
                  <li><Link href={''} className='hover:underline'>We’re here M-F 9am - 5pm PST.</Link></li>
                  <li><Link href={''} className='hover:underline'>Drop us a note anytime:
                  hello@rhodeskin.com</Link></li>
                  <li><Link href={''} className='hover:underline'>Do Not Sell or Share My Personal Information</Link></li>
                  <li><Link href={''} className='hover:underline'>Cookie Preferences</Link></li>
                  <li><Link href={''} className='hover:underline'>© rhode 2024</Link></li>
                 </ul>
                </div>
            </div>
        </div>
        <p className='w-full pt-5 text-center text-[#7e7d7d]'>Country/region</p>
    </div>
  )
}