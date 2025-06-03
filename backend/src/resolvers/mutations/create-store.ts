import {MutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Stores from "@/models/stores.model";

export const createStore: MutationResolvers['createStore']= async(_, {input}, {userId})=>{
    const user = await User.findById(userId);
    // console.log(user.role)
    if(user) throw new Error();
    try {
        await Stores.create({
            name: input.name,
            short_name:input.short_name,
            storeLocation: input.storeLocation,
            phone: input.phone
        });

        return {
            message:"Store successfully created."
        }
    }catch (err){
        throw err;
    }}