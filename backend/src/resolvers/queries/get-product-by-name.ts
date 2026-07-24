import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductByName: QueryResolvers["getProductByName"] = async (
  _,
  { name },
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not identified");
  const prod = await Product.findOne({ name, websiteId });

  if (!prod) {
    throw new Error("Product not found");
  }

  return prod;
};
