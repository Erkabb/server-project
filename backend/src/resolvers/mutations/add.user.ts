import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";

export const addUser: MutationResolvers["addUser"] = async (
  _,
  { input },
  { userId },
) => {
  const isAuth = await User.findById(userId);

  if (!isAuth) throw new Error("User must signed in");

  const { firstname, lastname, phoneNumber, email, password } = input;

  return await User.create({
    firstname,
    lastname,
    phoneNumber,
    email,
    password,
    role: "user",
    userLevel: input.userLevel,
  });
};
