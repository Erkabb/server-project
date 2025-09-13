import { QueryResolvers } from "@/generated/graphql";
import OrderRequest from "@/models/order-request.model";

export const getRequests: QueryResolvers["getRequests"] = async () => {
  return OrderRequest.find();
};
