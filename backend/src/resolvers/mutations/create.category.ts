import { MutationResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const createCategory: MutationResolvers['createCategory'] = async (_, { categoryName }) => {
   
    const newCategory = await Category.create({
        categoryName 
    });

    return newCategory;
};

