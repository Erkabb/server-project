import {models, model, Schema} from 'mongoose';

type Product = {
    _id: Schema.Types.ObjectId;
    name: string;
    detail: string;
    unitPrice: string;
    optionTypes: {
        size: [string];
        images: [string];
        color: [string];
    };
    brand: {
        _id: Schema.Types.ObjectId;
        brandName: string;
        brandLogo: string;
    };
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
    store: {
        _id: Schema.Types.ObjectId;
        name: string;
        short_name: string;
        description: string;
        storeLocation: string;
        phone: string;
        timesheets: string;
    };
    soldQuantity: string;
    totalQuantity: string;
    discount: string;
    category: Schema.Types.ObjectId[];
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
            type: String,
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
    brand: {
        _id: Schema.Types.ObjectId,
        brandName: String,
        brandLogo: String,
    },
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
        store: {
            _id: Schema.Types.ObjectId,
            name: String,
            short_name: String,
            description: String,
            storeLocation: String,
            phone: String,
            timesheets: String,
        },
        soldQuantity: {
            type: String,
            default: '0'
        },
        totalQuantity: {
            type: String,
            required: true,
        },
        discount: {
            type: String,
            default: '0'
        },
        category: [{
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        }]
    },
    {
        timestamps: true,
    });

const Product = models['Product'] || model<Product>('Product', productSchema);
export default Product;