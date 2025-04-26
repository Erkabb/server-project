import { ProductQueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductById:ProductQueryResolvers['getProductById']=async(_, {_id})=>{
    const product= await Product.findById(_id);
    return product;
}