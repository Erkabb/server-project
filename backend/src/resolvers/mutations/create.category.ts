import { MutationResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const createCategory:MutationResolvers['createCategory']=async(_, {categoryName})=>{
    const findCategory=await Category.findOne({categoryName});
    if(findCategory) throw new Error('Category exists');
    const createCat=await Category.create({categoryName});
    return createCat;
}