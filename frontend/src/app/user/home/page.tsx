'use client';
import { ProductCard } from '@/components/ProductCard';
import { TopContent } from '@/components/TopContent';
import { useGetProductQuery } from '@/generated';
import React from 'react'

const Page = () => {
 const {data:productData}=useGetProductQuery();
 const firstProduct=productData?.getProduct;
  return (
    <div>
        <TopContent/>
           {firstProduct && 
              <ProductCard product={firstProduct} />
            }
          </div>
  )
}

export default Page;
