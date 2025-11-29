import { QueryResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";

export const getUsers: QueryResolvers["getUsers"] = async (
  _,
  __,
  { websiteId },
) => {
  return User.find({ websiteId });
};

export const getUserById: QueryResolvers["getUserById"] = async (
  _,
  __,
  { userId, websiteId },
) => {
  if (!userId) throw new Error("User not found");
  const [user] = await Promise.all([User.findOne({ _id: userId, websiteId })]);
  return user;
};
