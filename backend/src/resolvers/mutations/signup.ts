import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model"

export const signUp:MutationResolvers['signUp']=async(_, {email, password})=>{
    const findUser=await User.findOne({email});
    if(findUser) throw new Error('User already signed up.');
    const createUser=await User.create({email, password});
    return createUser;
}