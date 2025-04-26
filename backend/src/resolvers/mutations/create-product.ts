import {ProductMutationResolvers} from "@/generated/graphql";
import Category from "@/models/category.model";
import Product from "@/models/product.model";
import Store from "@/models/shop.model";

export const createProduct: ProductMutationResolvers['createProduct'] = async (_, {input}) => {
    const { category, store}=input;
    const categoryFind = await Category.findById(category);
    const findStore = await Store.findById(store);
    await Product.create({
        name: input.name,
        detail: input.detail,
        unitPrice: input.unitPrice,
        optionTypes: {
            size: input.optionTypes?.size,
            image: input.optionTypes?.images,
            color: input.optionTypes?.color,
        },
        totalQuantity: input.totalQuantity,
        brand: {
            name: input.brand?.name,
            brandLogo: input.brand?.brandLogo,
        },
        discount: input.discount,
        category: categoryFind,
        store: findStore,
        productProperties: {
            position: input.productProperties?.position,
            value: input.productProperties?.value,
            properties: {
                name: input.productProperties?.properties.name,
                presentation: input.productProperties?.properties.presentation,
            }
        }
    });
    return {
        message: "Product successfully created!",
    }
};
