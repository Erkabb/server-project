import {QueryResolvers} from "@/generated/graphql";
import Brand from "@/models/brand.model";

export const getBrands: QueryResolvers['getBrands'] = async (_, __, { website }) => {
    if (!website) throw new Error('Website context is required');
    return Brand.find({ website }).sort({ createdAt: -1 });
};
