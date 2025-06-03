// import cloudinary from '../cloudinary.js';
// import {MutationResolvers} from "@/generated/graphql";
//
// export const getUploadSignature: MutationResolvers['getUploadSignature'] = async (_, {input}, {}) => {
//             const timestamp = Math.floor(Date.now() / 1000);
//             const folder = 'your-folder-name';
//
//             const signature = cloudinary.utils.api_sign_request(
//                 { timestamp, folder },
//                 process.env.CLOUDINARY_API_SECRET
//             );
//
//             return {
//                 timestamp,
//                 signature,
//                 apiKey: process.env.CLOUDINARY_API_KEY,
//                 cloudName: process.env.CLOUD_NAME,
//                 folder,
//             };
//         },
// };
