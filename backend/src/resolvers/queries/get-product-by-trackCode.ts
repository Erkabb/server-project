import { QueryResolvers } from "@/generated/graphql";
import Product from "@/models/product.model";

export const getProductByNameOrTrackCode: QueryResolvers["getProductByNameOrTrackCode"] =
  async (_, { input }, { websiteId }) => {
    if (!websiteId) throw new Error("Website not identified");
    const { trackCode, name } = input;

    let product = null;

    if (trackCode) {
      product = await Product.findOne({ trackCode, websiteId });
      if (!product) {
        throw new Error(`Product with trackCode ${trackCode} not found`);
      }
    } else if (name) {
      product = await Product.findOne({ name, websiteId });
      if (!product) {
        throw new Error(`Product with name ${name} not found`);
      }
    } else {
      throw new Error("You must provide either trackCode or name");
    }

    return product;
  };
