import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";
import Category from "@/models/category.model";
import Stores from "@/models/stores.model";
import Brand from "@/models/brand.model";
import Product from "@/models/product.model";
export const createProduct: MutationResolvers["createProduct"] = async (
  _,
  { input },
  { userId },
) => {
  const { category, store, brand, quantity } = input;

  const user = await User.findById(userId);
  if (!user) {
    return {
      message: "Must be logged in",
      success: false,
      product: null,
    };
  }

  try {
    const categoryFind = await Category.findById(category);
    const findStore = await Stores.findById(store);
    const findBrand = await Brand.findById(brand);

    const createdProduct = await Product.create({
      name: input.name,
      detail: input.detail,
      unitPrice: input.unitPrice,
      trackCode: input.trackCode,
      optionTypes: {
        size: input.optionTypes?.size,
        image: input.optionTypes?.images,
        color: input.optionTypes?.color,
        weight: input.optionTypes?.weight,
      },
      totalQuantity: input.totalQuantity,
      brand: findBrand,
      discount: input.discount,
      category: categoryFind,
      store: findStore,
      quantity: input.quantity,
      link: input.link,
      status: input.status,
      estimatedDelivery: input.estimatedDelivery,
      productProperties: input.productProperties
        ? {
            position: input.productProperties.position,
            value: input.productProperties.value,
            properties: input.productProperties.properties
              ? {
                  name: input.productProperties.properties.name,
                  presentation: input.productProperties.properties.presentation,
                }
              : undefined,
          }
        : undefined,
    });

    if (findBrand) {
      const plusQty = (findBrand.totalProducts || 0) + quantity;
      await Brand.findByIdAndUpdate(brand, { totalProducts: plusQty });
    }
    if (categoryFind) {
      const plusQty = categoryFind.totalProducts + quantity;
      await Category.findByIdAndUpdate(category, { totalProducts: plusQty });
    }
    if (findStore) {
      const plusQty = findStore.totalProducts + quantity;
      await Stores.findByIdAndUpdate(store, { totalProducts: plusQty });
    }
    return {
      message: "Product successfully created!",
      success: true,
      product: createdProduct,
    };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to create product: ");
  }
};
