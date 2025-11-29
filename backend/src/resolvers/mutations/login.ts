import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/generate-token";

export const login: MutationResolvers["login"] = async (_, { input }) => {
  const { email, password, websiteId } = input;

  // Search ONLY inside this tenant
  const user = await User.findOne({ email, websiteId });

  if (!user) throw new Error("User not found on this website");

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) throw new Error("Email or password is incorrect");

  const token = generateToken({
    userId: user._id.toString(),
    websiteId: user.websiteId,
    role: user.role,
  });

  return { user, token };
};
