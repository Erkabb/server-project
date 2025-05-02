import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model"
import bcrypt from 'bcrypt';
import { generateToken } from "@/utils/generate-token";
export const login:MutationResolvers['login']=async(_:unknown, {input})=>{
   const {email, password}=input;
    const user=await User.findOne({email});

    if(!user)throw new Error('User not found');
 console.log('Input password:', password);
 console.log('Stored hash:', user.password);
    const isCheckPass=bcrypt.compareSync(password, user.password);

    if(!isCheckPass) throw new Error('Email or password is incorrect');

    const token=generateToken({id:user._id});

    return {user, token};
};