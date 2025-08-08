import {MutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Product from "@/models/product.model";
import Order from "@/models/order.model";

export const createOrder: MutationResolvers['createOrder'] = async(_, {input}, {userId})=> {
    const {productId, quantity, total, unitPrice, discount, leftQuantity, userAddress, pickUpLocation, phoneNumber, availableHours, pickedStaff} = input;
    
    // Check if user is logged in
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Must be logged in');
    }
    
    // Validate the product exists
    const findProduct = await Product.findById(productId);
    if (!findProduct) {
        throw new Error('Product not found');
    }
    
    // Check if there's enough quantity available
    if (findProduct.quantity < quantity) {
        throw new Error('Insufficient product quantity available');
    }
    
    try {
        // Create the order
        const createdOrder = await Order.create({
            productId,
            quantity,
            total,
            unitPrice,
            discount: discount || 0,
            leftQuantity,
            userAddress,
            pickUpLocation,
            phoneNumber,
            availableHours,
            pickedStaff,
            status: 'pending'
        });
        
        // Update product quantity (reduce available quantity)
        await Product.findByIdAndUpdate(productId, {
            $inc: { 
                quantity: -quantity,
                soldQuantity: quantity
            }
        });
        
        return {
            message: "Order successfully created!"
        };
        
    } catch (error) {
        console.error('Error creating order:', error);
        throw new Error('Failed to create order');
    }
}