import {QueryResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";

export const getUsers: QueryResolvers['getUsers']= async () => {
    return User.find();

};

export const getUserById:QueryResolvers['getUserById']=async(_, __, {userId})=>{
    if(!userId) throw new Error('User not found');
    const [user] = await Promise.all([User.findById(userId)]);
    return user;
};