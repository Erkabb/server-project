import {models, model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

type User={
    _id:Schema.Types.ObjectId;
    email:string;
    password:string;
    firstname:string;
    lastname:string;
    role:string;
    phoneNumber:string;
    otp:string;
    passwordResetToken: string;
    passwordResetTokenExpire: Date;
};

const userSchema=new Schema<User>({
    email:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    firstname: {
        type:String,
    },
    lastname: {
        type:String,
    },
    role:{
        type:String,
        default:'user',
    },
    phoneNumber:String,
    otp: {
        type: String,
        default: null,
      },
      passwordResetToken: { type: String, default: '' },
      passwordResetTokenExpire: { type: Date, default: undefined },
},
    {
        timestamps:true,
    });
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) {
          next();
        } else {
          const hashedPassword = bcrypt.hashSync(this.password, 10);
          this.password = hashedPassword;
          next();
        }
      });
      const User = models['User'] || model<User>('User', userSchema);
      export default User;
