import { QueryResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const getCategory:QueryResolvers['getCategory']=async()=>{
    const getCategory=await Category.find({});
    return getCategory;
}