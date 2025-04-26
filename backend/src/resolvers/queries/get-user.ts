import { UserQueryResolvers } from "@/generated/graphql";
import User from "../../models/auth.model"

export const getUser:UserQueryResolvers['getUser']=async(_, __, {userId})=>{
    if(!userId) throw new Error('User not found');
    const [user] = await Promise.all([User.findById(userId)]);
        return user;
};