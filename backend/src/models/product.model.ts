import {models, model, Schema} from 'mongoose';

type Product={
    _id:Schema.Types.ObjectId;
    name:string;
    detail:string;
    unitPrice:string;
    size:string;
    images:[string];
    color:string;
    soldQuantity:string;
    totalQuantity:string;
    discount:string;
    category:Schema.Types.ObjectId[]
};

const productSchema=new Schema<Product>({
    name:{
        type:String,
        required:true,
    },
    detail:{
        type:String,
        default:'Brand new product',
    },
    unitPrice:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        default:'S'
    },
    images:{
        type:[String],
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    soldQuantity:{
        type:String,
        default:'0'
    },
    totalQuantity:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        default:'0'
    },
    category:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category",
    }]},
{
    timestamps:true,
});

const Product=models['Product'] || model<Product>('Product', productSchema);
export default Product;