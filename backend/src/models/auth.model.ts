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
    newPassword:string;
    passwordResetToken: string;
    passwordResetTokenExpire: Date;
    age?:number;
    gender?:string;
    isCompany:boolean;
    companyName:string;
    companyRegister:string;
    companyCreatedDay:Date;
    pfp:string;
    birthDate:Date;
    cookie:string;
    status: string;
    info:string;
    nickname:string;
    companyPhoneNumber:string;
    address:string;
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
    newPassword: {
        type: String,
        default: null,
    },
      passwordResetToken: { type: String, default: '' },
      passwordResetTokenExpire: { type: Date, default: undefined },
    age: { type: Number, default: null },
    gender: { type: String, default: null },
        isCompany: {
            type: Boolean,
            default: false
        },
        companyName: {
            type: String,
            default: null,
            validate: {
                validator: function(value) {
                    if (this.isCompany) {
                        return value != null && value.trim() !== '';
                    }
                    return true;
                },
                message: 'Company name is required when isCompany is true.'
            }
        },
        companyRegister: {
            type: String,
            default: null,
            validate: {
                validator: function(value) {
                    if (this.isCompany) {
                        return value != null && value.trim() !== '';
                    }
                    return true;
                },
                message: 'Company register is required when isCompany is true.'
            }
        },
    companyCreatedDay: { type: Date, default: undefined },
    pfp: { type: String, default: null },
        birthDate: {
            type: Date,
            default: undefined,
            validate: {
                validator: function(value) {
                    if (!value) return true; // Allow empty/default if needed
                    const today = new Date();
                    const thirteenYearsAgo = new Date(
                        today.getFullYear() - 13,
                        today.getMonth(),
                        today.getDate()
                    );
                    return value <= thirteenYearsAgo;
                },
                message: "User must be at least 13 years old."
            }
        },
    cookie: { type: String, default: null },
    status: {type:String, enum: ['basic', 'pro', 'multi'], default: 'basic'},
    info: {type: String, default: null },
    nickname: {type: String, default: null },
    address: {type: String, default: null },
},
    {
        timestamps:true,
    });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next(); // 🚫 Prevents moving on to hashing
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        throw new Error();
    }
});

});
      const User = models['User'] || model<User>('User', userSchema);
      export default User;
