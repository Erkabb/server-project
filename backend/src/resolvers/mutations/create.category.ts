import { MutationResolvers } from "@/generated/graphql";
import Category from "../../models/category.model";
import Website from "@/models/website.model";

export const createCategory: MutationResolvers["createCategory"] = async (
  _,
  { input },
  { websiteId },
) => {
  const website = await Website.findById({ _id: websiteId });

  if (!website) throw new Error("Invalid website");

  return await Category.create({
    ...input,
    websiteId,
  });
};
