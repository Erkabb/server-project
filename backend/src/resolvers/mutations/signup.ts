import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model";

export const signUp: MutationResolvers["signUp"] = async (_, { input }) => {
  const { firstname, lastname, email, password, websiteId } = input;

  const findUser = await User.findOne({ email, websiteId });

  if (findUser) throw new Error("User already signed up.");

  return await User.create({
    firstname,
    lastname,
    email,
    password,
    role: "admin",
    websiteId,
  });
};
