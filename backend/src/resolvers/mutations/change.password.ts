import {MutationResolvers} from "@/generated/graphql";
import bcrypt from "bcrypt";
import User from "../../models/auth.model";

export const changePassword:MutationResolvers['changePassword']=async (_, {input}, {userId})=>{
    const {password, newPassword} = input;
    const user = await User.findById(userId);
    if(!user) throw new Error('User not found');
    if(!(bcrypt.compareSync(password, user.password))) throw new Error('Password not match');
    user.password=newPassword;
    await user.save();
    return {message : "success!"}
};