import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model"
import bcrypt from 'bcrypt';
import { generateToken } from "@/utils/generate-token";
export const login:MutationResolvers['login']=async(_:unknown, {input}, {website})=>{
   const {email, password}=input;
    if (!website) throw new Error('Website context is required');
    
    const user=await User.findOne({email, website});

    if(!user)throw new Error('User not found for this website');

    const isCheckPass=bcrypt.compareSync(password, user.password);

    if(!isCheckPass) throw new Error('Email or password is incorrect');

    const token=generateToken({id:user._id, website});

    return {user, token};
};