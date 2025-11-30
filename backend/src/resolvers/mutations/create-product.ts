import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";
import Category from "@/models/category.model";
import Stores from "@/models/stores.model";
import Brand from "@/models/brand.model";
import Product from "@/models/product.model";
export const createProduct: MutationResolvers["createProduct"] = async (
  _,
  { input },
  { userId, websiteId },
) => {
  const user = await User.findOne({ _id: userId, websiteId });
  if (!user) {
    return {
      message: "Must be logged in",
      success: false,
      product: null,
    };
  }

  const categoryFind = await Category.findOne({
    _id: input.category,
    websiteId,
  });
  const findStore = await Stores.findOne({
    _id: input.store,
    websiteId,
  });
  const findBrand = await Brand.findOne({
    _id: input.brand,
    websiteId,
  });

  const createdProduct = await Product.create({
    ...input,
    category: categoryFind,
    store: findStore,
    brand: findBrand,
    websiteId,
  });

  // Update product counters per website
  await Brand.updateOne(
    { _id: input.brand, websiteId },
    { $inc: { totalProducts: input.quantity } },
  );

  await Category.updateOne(
    { _id: input.category, websiteId },
    { $inc: { totalProducts: input.quantity } },
  );

  await Stores.updateOne(
    { _id: input.store, websiteId },
    { $inc: { totalProducts: input.quantity } },
  );

  return {
    message: "Product successfully created!",
    success: true,
    product: createdProduct,
  };
};
