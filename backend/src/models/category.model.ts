import {models, model, Schema} from 'mongoose';

type Category={
    _id:Schema.Types.ObjectId;
    categoryName:string;
    totalProducts: number;
    description: string;
    image: string;
    link: string;
};
const categorySchema=new Schema<Category>({
    categoryName:{
        type:String,
        required:true,
    },
    totalProducts: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    link: {
        type: String,
    }
},
    {
        timestamps:true,
    });

    const Category=models['Category'] || model<Category>('Category', categorySchema);
    export default Category;