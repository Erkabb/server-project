import { QueryResolvers } from "@/generated/graphql";
import Website from "@/models/website.model";

export const getWebsiteById: QueryResolvers["getWebsiteById"] = async (
  _,
  { _id },
) => {
  if (!_id) throw new Error("Website ID is required");
  const website = await Website.findById(_id);
  if (!website) throw new Error("Website not found");
  return website;
};
