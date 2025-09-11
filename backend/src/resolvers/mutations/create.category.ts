import { MutationResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const createCategory: MutationResolvers["createCategory"] = async (
  _,
  { input },
) => {
  return await Category.create({
    ...input,
  });
};
