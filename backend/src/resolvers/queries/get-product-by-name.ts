import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductByName: QueryResolvers["getProductByName"] = async (
  _,
  { name },
) => {
  const prod = await Product.findOne({ name });

  if (!prod) {
    throw new Error("Category not found");
  }

  return prod;
};
