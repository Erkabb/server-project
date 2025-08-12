import {QueryResolvers} from "@/generated/graphql";
import Order from "@/models/order.model";

export const getOrderById: QueryResolvers['getOrderById'] = async (_, {_id},  {userId}) => {
   if(!userId) throw new Error('User must be logged in');
    const order = await Order.findById(_id);
    if (!order) throw new Error('Order not found');
    return order;
}

export const getOrders: QueryResolvers['getOrders'] = async (_, __, {userId}) => {
    if(!userId) throw new Error('User must be logged in');
    return Order.find();
}