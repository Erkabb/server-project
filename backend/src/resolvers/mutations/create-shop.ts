import { MutationResolvers } from "@/generated/graphql";
import User from "@/models/auth.model";
import Shop from "@/models/company.model";

export const createCompany: MutationResolvers["createCompany"] = async (
  _,
  { input },
  { userId, websiteId },
) => {
  const user = await User.findOne({ _id: userId, websiteId });
  if (!user) throw new Error();
  try {
    await Shop.create({
      email: input.email,
      officialName: input.officialName,
      location: input.location,
      phoneNumber: input.phoneNumber,
      officialLogo: input.officialLogo,
      registerNumber: input.registerNumber,
      websiteId: websiteId,
    });
    return {
      message: "Your company successfully created.",
    };
  } catch (error) {
    throw error;
  }
};
