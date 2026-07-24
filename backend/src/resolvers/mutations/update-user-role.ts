import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";

const ALLOWED_ROLES = ["user", "admin"];

export const updateUserRole: MutationResolvers["updateUserRole"] = async (
  _,
  { input },
  { userId, websiteId },
) => {
  if (!userId || !websiteId) throw new Error("Must be logged in");

  const caller = await User.findOne({ _id: userId, websiteId });
  if (!caller || caller.role !== "admin")
    throw new Error("Only admins can change user roles");

  if (!ALLOWED_ROLES.includes(input.role))
    throw new Error(`Role must be one of: ${ALLOWED_ROLES.join(", ")}`);

  const user = await User.findOneAndUpdate(
    { _id: input.userId, websiteId },
    { role: input.role },
    { new: true },
  );
  if (!user) throw new Error("User not found");

  return user;
};
