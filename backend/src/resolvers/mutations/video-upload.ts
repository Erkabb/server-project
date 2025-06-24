import { MutationResolvers } from "@/generated/graphql";
import VideoUpload from "@/models/youtube-video.model";

// Function to extract video ID from YouTube URL
const extractVideoId = (url: string): string | null => {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/v\/([^&\n?#]+)/,
        /youtube\.com\/watch\?.*&v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return match[1];
        }
    }
    return null;
};

// Function to fetch video info from YouTube (mock implementation)
// In a real implementation, you would use YouTube Data API
const fetchVideoInfo = async (videoId: string) => {
    // This is a mock implementation
    // In production, you would use YouTube Data API v3
    // const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics,contentDetails`);
    
    return {
        title: "Sample Video Title",
        description: "Sample video description",
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        channelTitle: "Sample Channel",
        publishedAt: new Date(),
        duration: "PT10M30S", // ISO 8601 duration format
        viewCount: 1000,
        likeCount: 100,
        videoId: videoId
    };
};

export const uploadVideo: MutationResolvers['uploadVideo'] = async (_, { input }, { userId }) => {
    try {
        if (!userId) {
            return {
                message: "Authentication required",
                success: false,
                video: null
            };
        }

        const { youtubeUrl, title } = input;

        if (!youtubeUrl) {
            return {
                message: "YouTube URL is required",
                success: false,
                video: null
            };
        }

        // Extract video ID from URL
        const videoId = extractVideoId(youtubeUrl);
        if (!videoId) {
            return {
                message: "Invalid YouTube URL",
                success: false,
                video: null
            };
        }

        // Check if video already exists
        const existingVideo = await VideoUpload.findOne({ videoId });
        if (existingVideo) {
            return {
                message: "Video already exists in database",
                success: false,
                video: existingVideo
            };
        }

        // Fetch video information
        const videoInfo = await fetchVideoInfo(videoId);

        // Create video record
        const video = await VideoUpload.create({
            title: title || videoInfo.title,
            description: videoInfo.description,
            thumbnail: videoInfo.thumbnail,
            channelTitle: videoInfo.channelTitle,
            publishedAt: videoInfo.publishedAt,
            duration: videoInfo.duration,
            viewCount: videoInfo.viewCount,
            likeCount: videoInfo.likeCount,
            videoId: videoInfo.videoId,
            youtubeUrl: youtubeUrl
        });

        return {
            message: "Video uploaded successfully",
            success: true,
            video: video
        };

    } catch (error) {
        console.error("Error uploading video:", error);
        return {
            message: "Failed to upload video",
            success: false,
            video: null
        };
    }
};
