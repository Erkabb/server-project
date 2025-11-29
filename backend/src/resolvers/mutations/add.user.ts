import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";

export const addUser: MutationResolvers["addUser"] = async (
  _,
  { input },
  { userId, websiteId: authWebsiteId },
) => {
  if (!userId) throw new Error("Not authenticated");

  // Ensure the authenticated user exists
  const isAuth = await User.findOne({ _id: userId, websiteId: authWebsiteId });
  if (!isAuth) throw new Error("Invalid website access");

  // Ensure website isolation
  if (input.websiteId !== authWebsiteId) {
    throw new Error("Forbidden: wrong website");
  }

  return User.create({
    ...input,
    role: "user",
  });
};
