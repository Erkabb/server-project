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

  // Price comes from the database, never from the client
  const calculatedTotal =
    product.unitPrice * input.quantity - (input.discount ?? 0);

  // Atomically reserve stock: only succeeds if enough quantity is left,
  // so concurrent orders cannot oversell
  const stockUpdate = await Product.updateOne(
    { _id: input.productId, websiteId, quantity: { $gte: input.quantity } },
    { $inc: { quantity: -input.quantity, soldQuantity: input.quantity } },
  );
  if (stockUpdate.modifiedCount === 0)
    throw new Error("Insufficient quantity");

  // Create order inside tenant
  await Order.create({
    ...input,
    unitPrice: product.unitPrice,
    total: calculatedTotal,
    leftQuantity: product.quantity - input.quantity,
    websiteId,
    isCompany: user.isCompany,
    companyName: user.isCompany ? user.companyName : null,
    companyRegister: user.isCompany ? user.companyRegister : null,
    status: "pending",
  });

  return { message: "Order created successfully" };
};
