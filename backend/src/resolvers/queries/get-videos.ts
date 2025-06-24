import {QueryResolvers} from "@/generated/graphql";
import VideoUpload from "@/models/youtube-video.model";

export const getVideos: QueryResolvers['getVideos'] = async () => {
    try {
        return await VideoUpload.find().sort({createdAt: -1});
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw new Error("Failed to fetch videos");
    }
};

export const getVideoById: QueryResolvers['getVideoById'] = async (_, { _id }) => {
    try {
        const video = await VideoUpload.findById(_id);
        if (!video) return null;
        return video;
    } catch (error) {
        console.error("Error fetching video by ID:", error);
        throw new Error("Failed to fetch video");
    }
}; 