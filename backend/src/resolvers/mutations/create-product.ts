import { MutationResolvers } from "@/generated/graphql";
import Category from "@/models/category.model";
import Product from "@/models/product.model";

export const createProduct:MutationResolvers['createProduct']=async(_, {input})=>{
    const {name, detail, unitPrice, size, images, color, totalQuantity, discount, category}=input;
    const findCat=await Category.findById(category);
    if(!findCat)throw new Error ('Category doesnt exist');
    await Product.create({
        name, detail, unitPrice, size, images, color, totalQuantity, discount, category
    });
    return {message:'Success!'};
}