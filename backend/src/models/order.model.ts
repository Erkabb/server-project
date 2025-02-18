import {models, model, Schema} from 'mongoose';

type Order = {
    _id: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    productId: Schema.Types.ObjectId;
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
    }
});
const Order = models['Order'] || model<Order>('Order', orderSchema);
export default Order;