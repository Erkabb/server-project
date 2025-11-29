import { MutationResolvers } from "@/generated/graphql";
import Website from "@/models/website.model";
import { generateWebsiteToken } from "@/utils/generate-token";

export const createWebsite: MutationResolvers["createWebsite"] = async (
  _,
  { input },
) => {
  const web = await Website.create({ ...input });

  const token = generateWebsiteToken({ _id: web._id });
  console.log(token);
  return { message: "Website created successfully", token };
};
