import {MutationResolvers} from "@/generated/graphql";
import Category from "../../models/category.model";

export const createCategory: MutationResolvers['createCategory'] = async (_, { input }) => {
    await Category.create({
        categoryName: input.categoryName,
        description: input.description,
        link: input.link,
        image:input.image,
        totalProducts: input.totalProducts,
    });

    return {
        messages: 'Category successfully created',
    }
};

