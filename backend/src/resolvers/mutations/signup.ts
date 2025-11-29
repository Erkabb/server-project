import { MutationResolvers } from "@/generated/graphql";
import User from "../../models/auth.model";

export const signUp: MutationResolvers["signUp"] = async (
  _,
  { input },
  { websiteId: authWebsiteId },
) => {
  const { firstname, lastname, email, password, websiteId } = input;

  const findUser = await User.findOne({ email, websiteId });

  if (findUser) throw new Error("User already signed up.");

  if (websiteId !== authWebsiteId) throw new Error("Invalid website access");

  return await User.create({
    firstname,
    lastname,
    email,
    password,
    role: "admin",
    websiteId,
  });
};
