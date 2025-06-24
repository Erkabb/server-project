// success
// videoInfo {
//     title
//     description
//     thumbnail
//     channelTitle
//     publishedAt
//     duration
//     viewCount
//     likeCount
//     videoId
//     youtubeUrl
// }
// message

import {model, models, Schema} from "mongoose";

type VideoUpload = {
    _id: Schema.Types.ObjectId,
    title: string,
    description: string,
    thumbnail: string,
    channelTitle: string,
    publishedAt: Date,
    duration: string,
    viewCount: number,
    likeCount: number,
    videoId: string,
    youtubeUrl: string,
};

const videoUploadSchema = new Schema<VideoUpload>({
    title: String,
    description: String,
    thumbnail: String,
    channelTitle: String,
    publishedAt: Date,
    duration: String,
    viewCount: Number,
    likeCount: Number,
    videoId: String,
    youtubeUrl: String,
}, { timestamps: true });

const VideoUpload = models['VideoUpload'] || model<VideoUpload>('VideoUpload', videoUploadSchema);

export default VideoUpload;