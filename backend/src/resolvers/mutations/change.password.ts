import {UserMutationResolvers} from "@/generated/graphql";
import bcrypt from "bcrypt";
import User from "../../models/auth.model";

export const changePassword:UserMutationResolvers['changePassword']=async (_, {input}, {userId})=>{
    const {password, newPassword} = input;
    const user = await User.findById(userId);
    if(!user || !(bcrypt.compareSync(password, user.password))) throw new Error('User not found');
    user.password=newPassword;
    await user.save();
    return {message : "success!"}
};