import OrderRequest from "@/models/order-request.model";
import { MutationResolvers } from "@/generated/graphql";

export const createOrderRequest: MutationResolvers["createOrderRequest"] =
  async (_, { input }) => {
    try {
      await OrderRequest.create({
        ...input,
        user: input.user ? { ...input.user } : undefined,
        company: input.company ? { ...input.company } : undefined,
      });
      return {
        message: "Order request created successfully",
      };
    } catch (err) {
      console.error("CreateOrderRequest error:", err);
      throw err;
    }
  };
