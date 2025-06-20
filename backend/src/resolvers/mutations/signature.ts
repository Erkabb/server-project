import { MutationResolvers, Signature } from '@/generated/graphql';
import cloudinary from "@/utils/cloudinary";

export const getUploadSignature: MutationResolvers['getUploadSignature'] = async (
    _,
    { input }
): Promise<Signature> => {
    const secret = process.env.CLOUDINARY_API_SECRET;
    if (!secret) throw new Error('CLOUDINARY_API_SECRET is not set');

    const timestamp = Math.floor(Date.now() / 1000);
    const folder = input?.folder || 'your-folder-name';

    const signature = cloudinary.utils.api_sign_request(
        { timestamp, folder },
        secret
    );

    return {
        _id: '',
        timestamp,
        signature,
        apiKey: process.env.CLOUDINARY_API_KEY || '',
        cloudName: process.env.CLOUD_NAME || '',
        folder,
    };
};
