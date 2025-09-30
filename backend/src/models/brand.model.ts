import {Schema, models, model} from "mongoose";

type Brand = {
    _id: Schema.Types.ObjectId,
    // number: number,
    name: string,
    brandLogo: string,
    subLogo: string,
    totalProducts: number,
    website: string,
};

const brandSchema = new Schema<Brand>({
    // number: {type: Number, unique: true},
    name: {type: String, required: true},
    brandLogo: {type: String, required: true},
    subLogo: {type: String},
    totalProducts: {type: Number, default: 0},
    website: {type: String, required: true},
}, { timestamps: true });

const Brand=models['Brand'] || model<Brand>('Brand', brandSchema);
export default Brand;