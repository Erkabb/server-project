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

import { model, models, Schema } from "mongoose";

type VideoUpload = {
  _id: Schema.Types.ObjectId;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
  youtubeUrl: {
    url: string;
    id: Schema.Types.ObjectId;
    name: string;
  };
  unitPrice: number;
  category: string;
  level: string;
};

const videoUploadSchema = new Schema<VideoUpload>(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    thumbnail: String,
    channelTitle: String,
    youtubeUrl: {
      url: String,
      name: String,
    },
    unitPrice: {
      type: Number,
    },
    category: String,
    level: {
        type: String,
      enum: ["beginner", "advanced", "proficient"],
    },
  },
  { timestamps: true },
);

const VideoUpload =
  models["VideoUpload"] || model<VideoUpload>("VideoUpload", videoUploadSchema);

export default VideoUpload;
