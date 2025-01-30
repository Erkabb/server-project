'use client';
import { ProductCard } from '@/components/ProductCard';
import { TopContent } from '@/components/TopContent';
import { useGetCategoryLazyQuery, useGetProductQuery } from '@/generated';
import React, { useEffect } from 'react'

const Page = () => {
 const {data:productData}=useGetProductQuery();
 const firstProduct=productData?.getProduct;
 const [getCategory, {data}]=useGetCategoryLazyQuery();
 useEffect(()=>{
  getCategory();
 }, []);
  return (
    <div>
        <TopContent/>
        {data?.getCategory.map((cat)=>(
          <div key={cat._id}>
             {firstProduct && 
             <div>
              {cat &&   
              <ProductCard product={firstProduct} category={[cat]}/>
              }
             </div>
          }
          </div>
        ))}
       
     
    </div>
  )
}

export default Page;
