import {MutationResolvers} from "@/generated/graphql";
import User from "@/models/auth.model";
import Product from "@/models/product.model";
import Order from "@/models/order.model";

export const createOrder: MutationResolvers['createOrder'] = async(_,  {input}, { userId }) => {
    // Check if user is authenticated
    if (!userId) throw new Error('Must be logged in');

    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    const { productId, quantity, total, unitPrice, discount, leftQuantity, userAddress, pickUpLocation, phoneNumber, availableHours, pickedStaff } = input;

    // Validate product exists
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    // Check if product has enough quantity
    if (product.quantity < quantity) throw new Error('Insufficient product quantity');

    // Validate leftQuantity calculation
    const calculatedLeftQuantity = product.quantity - quantity;
    if (calculatedLeftQuantity !== leftQuantity) throw new Error('Invalid left quantity calculation');

    // Validate total calculation
    const calculatedTotal = (unitPrice * quantity) - (discount || 0);
    if (Math.abs(calculatedTotal - total) > 0.01) { // Allow small floating point differences
        throw new Error('Invalid total calculation');
    }

    // Create order
    const order = new Order({
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
        isCompany: user.isCompany,
        companyName: user.isCompany ? user.companyName : null,
        companyRegister: user.isCompany ? user.companyRegister : null,
        status: 'pending'
    });

    // Save order
    await order.save();

    // Update product quantity
    await Product.findByIdAndUpdate(productId, {
        $inc: { quantity: -quantity, soldQuantity: quantity }
    });

    return {
        message: 'Order created successfully'
    };
};