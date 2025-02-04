import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { Button } from './ui/button'
import { GetProductQuery} from '@/generated';
import Image from 'next/image';
export const ProductCard = ({product}:{product: GetProductQuery['getProduct']}) => {
    const [api, setApi]=useState<CarouselApi>();
    const [current, setCurrent]=useState(0);
    const [isHovered, setIsHovered] = useState< {[key: string]: boolean} >({});
    const handleScroll=(direction :'next' | 'prev')=>{
      const nextIndex = direction === 'next' ? current + 1 : current - 1;
      setCurrent(nextIndex);
      api?.scrollTo(nextIndex);
    };
    const handleHover = (id: string, isHovering: boolean) => {
      setIsHovered((prev) => ({ ...prev, [id]: isHovering }));
    };
  return (
    <div className='w-full m-10 rounded-xl'>
 <Carousel
      className="w-full relative"
      setApi={setApi} opts={{ loop: true }}
    >
        <Button className='absolute z-10 top-1/2 left-5 rounded-full w-[45px] h-[45px] bg-[#e5e5e5] hover:bg-gradient-to-b from-white/30 to-[#7a7878] transition-all duration-300'
        onClick={()=>handleScroll('prev')}>
            <ChevronLeft className='w-4'/>
        </Button>
      <CarouselContent>
      {product.map((product) => (
          <CarouselItem  className="md:basis-1/2 lg:basis-1/3 flex gap-14 ml-4 "  key={product._id}>
          <div>
              <Card >
                <CardContent className=" w-[400px] h-[420px] p-0"
                 onMouseEnter={() => handleHover(product._id, true)}
                 onMouseLeave={() => handleHover(product._id, false)} >
                <div className='relative w-full  h-full touch-none overflow-auto '>
                    <Image src={isHovered[product._id] ? '/moisture.jpg' : '/serum.jpg'} alt='' width={400} height={400} className='rounded-md object-cover aspect-[420px]'/>
                    <div className='w-full absolute z-10 text-start top-5 pl-5'>
                          <p className="text-2xl font-semibold text-[#a9a7a7] ">{product.name}</p>
                          </div>
                    </div>
                  </CardContent>
              </Card>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button className='absolute z-10 top-1/2 right-5 w-[45px] h-[45px] rounded-full bg-[#e5e5e5] hover:bg-gradient-to-b from-white/30 to-[#7a7878] transition-all duration-300'
      onClick={()=>handleScroll('next')}>
        <ChevronRight className='w-4'/>
      </Button>
    </Carousel>
    </div>
  )
}
