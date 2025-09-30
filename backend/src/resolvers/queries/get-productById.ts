import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductById:QueryResolvers['getProductById']=async(_, {_id})=>{
    const product= await Product.findById(_id);
    return product;
}

export const getProduct:QueryResolvers['getProduct']=async(_, __, { website })=>{
    if (!website) throw new Error('Website context is required');
    return Product.find({ website }).sort({ createdAt: -1 });
}