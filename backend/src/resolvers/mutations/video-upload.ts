import { MutationResolvers } from "@/generated/graphql";
import VideoUpload from "@/models/youtube-video.model";

// Function to extract video ID from YouTube URL
const extractVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
    /youtube\.com\/watch\?.*&v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
};

export const uploadVideo: MutationResolvers["uploadVideo"] = async (
  _,
  { input },
  { userId },
) => {
  try {
    if (!userId) {
      return {
        message: "Authentication required",
        success: false,
        video: null,
      };
    }

    const { youtubeUrl, title } = input;

    if (!youtubeUrl.url) {
      return {
        message: "YouTube URL is required",
        success: false,
        video: null,
      };
    }

    // Extract video ID from URL
    const videoId = extractVideoId(youtubeUrl.url);
    if (!videoId) {
      return {
        message: "Invalid YouTube URL",
        success: false,
        video: null,
      };
    }

    // Check if video already exists
    const existingVideo = await VideoUpload.findOne({ videoId });
    if (existingVideo) {
      return {
        message: "Video already exists in database",
        success: false,
        video: existingVideo,
      };
    }

    // Create video record
    const video = await VideoUpload.create({
      title: title || input.title,
      description: input.description,
      unitPrice: input.unitPrice,
      category: input.category,
      level: input.level,
      youtubeUrl: {
        name: input.youtubeUrl.name,
        url: input.youtubeUrl.url,
      },
      thumbnail: input.thumbnail,
      channelTitle: input.channelTitle,
    });

    return {
      message: "Video uploaded successfully",
      success: true,
      video: video,
    };
  } catch (error) {
    console.error("Error uploading video:", error);
    return {
      message: "Failed to upload video",
      success: false,
      video: null,
    };
  }
};
