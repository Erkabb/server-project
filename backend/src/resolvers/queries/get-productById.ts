import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductById: QueryResolvers["getProductById"] = async (
  _,
  { _id },
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not identified");
  const product = await Product.findOne({ _id, websiteId });
  if (!product) throw new Error("Product not found");
  return product;
};

export const getProduct: QueryResolvers["getProduct"] = async (
  _,
  __,
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not identified");
  return Product.find({ websiteId });
};
