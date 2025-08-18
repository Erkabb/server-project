import {MutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Brand from "@/models/brand.model";

export const createBrand: MutationResolvers['createBrand']=async (_, {input}, {userId})=>{
    const user = User.findById(userId);
    if (!user) throw new Error("Must be logged in");

    await Brand.create({
        name: input.name,
        brandLogo: input.brandLogo,
    });
    return {
        messages: 'Brand successfully created',
    }
}