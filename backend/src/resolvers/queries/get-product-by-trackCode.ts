import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductByNameOrTrackCode: QueryResolvers["getProductByNameOrTrackCode"] =
  async (_, { input }) => {
    // You can design your schema so the client passes either trackCode or name
    const { trackCode, name } = input;

    let product = null;

    if (trackCode) {
      product = await Product.findOne({ trackCode });
      if (!product) {
        throw new Error(`Product with trackCode ${trackCode} not found`);
      }
    } else if (name) {
      product = await Product.findOne({ name });
      if (!product) {
        throw new Error(`Product with name ${name} not found`);
      }
    } else {
      throw new Error("You must provide either trackCode or name");
    }

    return product;
  };
