import { QueryResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";

export const getCategory: QueryResolvers["getCategory"] = async (
  _,
  { _id },
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not identified");
  const category = await Category.findOne({ _id, websiteId });
  if (!category) throw new Error("Category not found");
  return [category];
};

export const getCategories: QueryResolvers["getCategories"] = async (
  _,
  __,
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not identified");
  return Category.find({ websiteId });
};
