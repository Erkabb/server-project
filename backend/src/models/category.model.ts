import {models, model, Schema} from 'mongoose';

type Category={
    _id:Schema.Types.ObjectId;
    categoryName:string;
    totalProducts: number
};
const categorySchema=new Schema<Category>({
    categoryName:{
        type:String,
        required:true,
    },
    totalProducts: {
        type: Number,
        default: 0
    }
},
    {
        timestamps:true,
    });

    const Category=models['Category'] || model<Category>('Category', categorySchema);
    export default Category;