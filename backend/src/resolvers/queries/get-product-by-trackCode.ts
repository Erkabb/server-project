import Product from "@/models/product.model";
import { QueryResolvers } from "@/generated/graphql";

export const getProductByTrackCode: QueryResolvers["getProductByTrackCode"] =
  async (_, { trackCode }) => {
    console.log(trackCode);
    const product = await Product.findOne({ trackCode });
    if (!product) {
      throw new Error(`Product with trackCode ${trackCode} not found`);
    }
    return product;
  };
