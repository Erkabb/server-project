import { QueryResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";

export const getUsers: QueryResolvers["getUsers"] = async (
  _,
  __,
  { userId, websiteId },
) => {
  if (!userId || !websiteId) throw new Error("User must be logged in");
  return User.find({ websiteId });
};

export const getUserById: QueryResolvers["getUserById"] = async (
  _,
  { _id },
  { userId, websiteId },
) => {
  if (!userId || !websiteId) throw new Error("User must be logged in");
  const user = await User.findOne({ _id, websiteId });
  if (!user) throw new Error("User not found");
  return user;
};
