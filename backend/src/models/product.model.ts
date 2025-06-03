import {models, model, Schema} from 'mongoose';

type Product = {
    _id: Schema.Types.ObjectId;
    name: string;
    detail: string;
    unitPrice: number;
    optionTypes: {
        size: [string];
        images: [string];
        color: [string];
    };
    brand: Schema.Types.ObjectId[];
    productProperties: {
        _id: Schema.Types.ObjectId;
        position: string;
        value: string;
        properties: {
            _id:string;
            name: string;
            presentation: string;
        }
    };
    store: Schema.Types.ObjectId[];
    soldQuantity: number;
    totalQuantity: number;
    discount: number;
    category: Schema.Types.ObjectId[];
    quantity: number;
};

const productSchema = new Schema<Product>({
        name: {
            type: String,
            required: true,
        },
        detail: {
            type: String,
            default: 'Brand new product',
        },
        unitPrice: {
            type: Number,
            required: true,
        },
    optionTypes: {
        size: {
            type: [String],
            default: 'S'
        },
        images: {
            type: [String],
            required: true,
        },
        color: {
            type: [String],
            required: true,
        },
    },
    brand: [{
        type: Schema.Types.ObjectId,
        ref: "Brand",
    }],
        productProperties: {
            _id: Schema.Types.ObjectId,
            position: String,
            value: String,
            properties: {
                _id:Schema.Types.ObjectId,
                name: String,
                presentation: String,
            },
        },
        store:[{
            type: Schema.Types.ObjectId,
            ref: "Stores"
        }],
        soldQuantity: {
            type: Number,
            default: 0
        },
        totalQuantity: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            default: 0
        },
        category: [{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        }],
    quantity: {
            type: Number,
        required: true,
    },
    },
    {
        timestamps: true,
    });

const Product = models['Product'] || model<Product>('Product', productSchema);
export default Product;