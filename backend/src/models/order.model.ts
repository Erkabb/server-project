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
    }

}, {
    timestamps: true
});
const Order = models['Order'] || model<Order>('Order', orderSchema);
export default Order;