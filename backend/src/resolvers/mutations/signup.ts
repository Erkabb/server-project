import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model";

export const signUp: MutationResolvers["signUp"] = async (_, { input }) => {
  const { firstname, lastname, email, password, website } = input;
  const findUser = await User.findOne({ email, website });
  if (findUser) throw new Error("User already signed up for this website.");
  return await User.create({
    firstname,
    lastname,
    email,
    password,
    website,
    role: "admin",
  });
};
