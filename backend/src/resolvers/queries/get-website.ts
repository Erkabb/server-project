import { QueryResolvers } from "@/generated/graphql";
import Website from "@/models/website.model";

export const getWebsiteById: QueryResolvers["getWebsiteById"] = async (
  _,
  __,
  { websiteId },
) => {
  if (!websiteId) throw new Error("Website not found");
  const [website] = await Promise.all([Website.findById(websiteId)]);

  return website;
};
