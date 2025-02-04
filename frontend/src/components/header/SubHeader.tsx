import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export const SubHeader = () => {
  return (
    <div className="w-[1100px] h-[100px] bg-transparent  flex justify-between items-center text-[#7e7d7d] font-semibold">
     <div className="flex gap-5 items-center">
                <Link href={''}>SHOP</Link>
                <Link href={''}>ABOUT</Link>
                <Link href={''}>FUTURES</Link>
            </div>
            <Image src={'/rhodelogo.png'} className="w-[150px] h-[45px]" alt="Rhode" width={150} height={45}></Image>
            <div className="flex gap-5 items-center">
                <Link href={''}>SEARCH</Link>
                <Link href={''}>ACCOUNT</Link>
                <Link href={''}>CART</Link>
            </div>
    </div>
  )
}
 {/* <Image src={product.images[0] || '/serum.jpg'} alt='' width={400} height={400} className={`absolute top-0 left-0 w-full h-full rounded-md object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}/> */}