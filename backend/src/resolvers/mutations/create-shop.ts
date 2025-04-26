import {ShopMutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Shop from "@/models/shop.model";

export const createShop: ShopMutationResolvers['createShop']=async(_, {input})=>{
    const {user}=input;
    const findUser=await User.findById(user);
    await Shop.create({
        user: findUser,
        email: input.email,
        officialName: input.officialName,
        location: input.location,
        phoneNumber: input.phoneNumber,
        officialLogo: input.officialLogo,
        registerNumber: input.registerNumber
    });
    return {
        message:"Successfully created shop"
    }
}