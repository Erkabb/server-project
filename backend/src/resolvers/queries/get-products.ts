import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProduct:QueryResolvers['getProduct']=async()=>{
    const getProduct=await Product.find({});
    return getProduct;
}