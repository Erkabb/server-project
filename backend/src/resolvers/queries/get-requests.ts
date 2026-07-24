import { QueryResolvers } from "@/generated/graphql";
import OrderRequest from "@/models/order-request.model";

export const getRequests: QueryResolvers["getRequests"] = async (
  _,
  __,
  { userId, websiteId },
) => {
  if (!userId || !websiteId) throw new Error("User must be logged in");
  return OrderRequest.find({ websiteId });
};
