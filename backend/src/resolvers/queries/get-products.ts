import { ProductQueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProduct:ProductQueryResolvers['getProduct']=async()=>{
    const getProduct=await Product.find({});
    return getProduct;
}