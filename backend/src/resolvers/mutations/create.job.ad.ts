import { MutationResolvers } from "@/generated/graphql";
import JobAd from "../../models/jobAd.model";

export const createJobAd: MutationResolvers["createJobAd"] = async (
  _,
  { input },
  { userId, websiteId },
) => {
  if (!userId) throw new Error("Authentication required");

  const createAd = await JobAd.create({
    ...input,
    postedBy: userId,
    websiteId,
  });

  return {
    createAd,
    message: "Job ad created successfully",
  };
};
