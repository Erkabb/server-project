import { MutationResolvers } from "@/generated/graphql";
import JobAd from "../../models/jobAd.model";

// export const createJobAd: MutationResolvers["createJobAd"] = async (
//   _,
//   { input },
//   { userId }
// ) => {
//   if (!userId) throw new Error("Authentication required");
//
//   const jobAd = await JobAd.create({
//     ...input,
//     postedBy: userId,
//   });
//   return {
//     jobAd,
//     message: "Job ad created successfully",
//   };
// };
export const createJobAd: MutationResolvers["createJobAd"] = async (_, {input}, {userId},  )=> {

    if(!userId) throw new Error("Authentication required");

    const createAd = await JobAd.create({
        ...input,
        postedBy: userId,
    });

    return {
        createAd, message: "Job ad created successfully"
    }
}