import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";
import Product from "@/models/product.model";
import Order from "@/models/order.model";

export const createOrder: MutationResolvers["createOrder"] = async (
  _,
  { input },
  { userId, websiteId },
) => {
  if (!userId) throw new Error("Must be logged in");

  const user = await User.findOne({ _id: userId, websiteId });
  if (!user) throw new Error("Invalid tenant");

  const product = await Product.findOne({
    _id: input.productId,
    websiteId,
  });
  if (!product) throw new Error("Product not found for this website");

  if (product.quantity < input.quantity)
    throw new Error("Insufficient quantity");

  const calculatedLeftQuantity = product.quantity - input.quantity;
  if (calculatedLeftQuantity !== input.leftQuantity)
    throw new Error("Invalid left quantity");

  const calculatedTotal =
    input.unitPrice * input.quantity - (input.discount ?? 0);

  if (Math.abs(calculatedTotal - input.total) > 0.01)
    throw new Error("Invalid total calculation");

  // Create order inside tenant
  await Order.create({
    ...input,
    websiteId,
    isCompany: user.isCompany,
    companyName: user.isCompany ? user.companyName : null,
    companyRegister: user.isCompany ? user.companyRegister : null,
    status: "pending",
  });

  // Update product stock
  await Product.updateOne(
    { _id: input.productId, websiteId },
    { $inc: { quantity: -input.quantity, soldQuantity: input.quantity } },
  );

  return { message: "Order created successfully" };
};
