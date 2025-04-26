import {model, models, Schema} from "mongoose";
import {User} from "@/generated/graphql";

type Shop= {
    _id: Schema.Types.ObjectId,
    user: User,
    number: number,
    email: string,
    officialName: string,
    name: string,
    location: string,
    phoneNumber: string,
    officialLogo: string,
    logo: string,
    information: string,
    timesheet: string,
    registerNumber: string,
};

const shopSchema = new Schema<Shop>({
    number: {
        type:Number,
        unique: true,
    },
    user: {
        type:String,
        required:true,
        ref: 'User',
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    officialName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        unique: true,
    },
    location: {
        type: String,
        default: 'online',
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    officialLogo: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        default: null,
    },
    information: {
        type: String,
        default: null,
    },
    timesheet: {
        type: String,
        default: null,
    },
    registerNumber: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Shop=models['Shop'] || model<Shop>('Shop', shopSchema);
export default Shop;