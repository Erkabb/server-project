import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from './ui/button'
import { GetCategoryQuery, GetProductQuery} from '@/generated';
import Image from 'next/image';
export const ProductCard = ({product, category}:{product: GetProductQuery['getProduct'], category:GetCategoryQuery['getCategory']}) => {
    
  return (
    <div className='w-full m-10 rounded-xl'>
 <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative"
    >
        <Button className='absolute z-10 top-1/2 left-5 rounded-full w-[45px] h-[45px] bg-[#e5e5e5] hover:bg-gradient-to-b from-white/30 to-[#7a7878] transition-all duration-300'>
            <ChevronLeft className='w-4'/>
        </Button>
      <CarouselContent>
        {product.map((product) => (
          <CarouselItem key={product._id} className="md:basis-1/3 lg:basis-1/3 flex gap-14 ml-2 ">
              <Card>
                <CardContent className="flex flex-col items-center justify-center w-[400px] h-[420px] p-0 shadow-xl">
                    <div className='relative w-full  h-full touch-none overflow-auto '>
                    <Image src={'/serum.jpg'} alt='' width={400} height={400} className='rounded-md object-cover aspect-[420px]'/>
                    </div>
                    {category.map((category)=>(
                          <div className='w-full absolute z-10 text-center ' key={category._id}>
                          <p className="text-2xl font-semibold text-[#a9a7a7] ">{category.categoryName}</p>
                          </div>
                    ))}
                  
                   
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button className='absolute z-10 top-1/2 right-5 w-[45px] h-[45px] rounded-full bg-[#e5e5e5] hover:bg-gradient-to-b from-white/30 to-[#7a7878] transition-all duration-300'>
        <ChevronRight className='w-4'/>
      </Button>
    </Carousel>
    </div>
  )
}
