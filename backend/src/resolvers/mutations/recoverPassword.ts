import {MutationResolvers} from "@/generated/graphql";
import bcrypt from "bcrypt";
import crypto from 'crypto';
import User from "@/models/auth.model";

export const recoverPassword:MutationResolvers['recoverPassword']=async(_:object, {input})=>{
    const {password, resetToken}=input;

    const hashedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findOneAndUpdate({
        passwordResetToken: hashedResetToken,
        passwordResetTokenExpire:  { $gt: Date.now() },
    }, {
        password: hashedPassword,
    }, {
        new: true,
    });
    if(!user) throw new Error('Invalid user');
    return {message: 'Success!'}
}