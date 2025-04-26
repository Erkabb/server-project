import {models, model, Schema} from 'mongoose';

type Order = {
    _id: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    productId: Schema.Types.ObjectId;
    quantity: string;
    total: string;
    unitPrice: string;
    discount: string;
    leftQuantity: string;
    userAddress: string;
    pickUpLocation: string
    isCompany:boolean;
    companyName:string;
    companyRegister:string;
    phoneNumber:string;
    status:string;
    shipmentTotal: number;
    declinedAt: Date;
    cancelReason: string;
    completedAt:Date;
    waitUntil: Date;
};
const orderSchema = new Schema<Order>({
    userId: {
        type: String,
        ref: "User",
        required: true
    },
    productId: {
        type: String,
        ref: "Product",
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: String,
        required: true
    },
    discount: {
        type: String,
    },
    leftQuantity: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    pickUpLocation: {
        type: String,
        required: true
    },
    isCompany: {type:Boolean, default: false},
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
    phoneNumber: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'declined'],
        default: 'pending',
    },
    shipmentTotal: {
        type: Number,
        default: 0,
    },
    declinedAt: {type: Date, default: null},
    cancelReason: {
        type: String,
        default: null,
    },
    completedAt: {type: Date, default: null},
}, {
    timestamps: true
});
orderSchema.pre('save', function (next) {
    if (this.isModified('status')) {
        if (this.status === 'completed' && !this.completedAt) {
            this.completedAt = new Date()
        } else if (this.status !== 'completed') {
            this.status= 'pending';
        }
    }
    next();
});
const Order = models['Order'] || model<Order>('Order', orderSchema);
export default Order;