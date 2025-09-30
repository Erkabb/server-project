import {MutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Brand from "@/models/brand.model";

export const createBrand: MutationResolvers['createBrand']=async (_, {input}, {userId, website})=>{
    const user = User.findById(userId);
    if (!user) throw new Error("Must be logged in");
    if (!website) throw new Error('Website context is required');

    await Brand.create({
        name: input.name,
        brandLogo: input.brandLogo,
        website: input.website,
    });
    return {
        messages: 'Brand succesfully created',
    }
}