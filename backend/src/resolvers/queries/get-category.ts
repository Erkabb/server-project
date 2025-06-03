import { QueryResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const getCategory:QueryResolvers['getCategory']=async(_, {_id})=>{
   const getCategory = await Category.findById(_id)
    return getCategory;
}

export const getCategories: QueryResolvers['getCategories'] = async () => {
    return Category.find();
}