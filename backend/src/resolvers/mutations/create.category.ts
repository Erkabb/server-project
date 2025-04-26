import {MutationResolvers} from "@/generated/graphql";
import Category from "../../models/category.model";

export const createCategory: MutationResolvers['createCategory'] = async (_, { categoryName }) => {

 return await Category.create({
        categoryName
    });
};

