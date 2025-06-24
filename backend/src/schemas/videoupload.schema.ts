import gql from "graphql-tag";

export const videoUploadTypeDefs = gql`
    type VideoUpload {
        _id: ID!
        title: String
        description: String
        thumbnail: String
        publishedAt: Date
        duration: String
        viewCount: Float
        likeCount: Float
        videoId: String
        youtubeUrl: String
        channelTitle: String
    }

    input VideoUploadInput {
        title: String
        youtubeUrl: String!
    }

    type VideoUploadResponse {
        message: String!
        success: Boolean!
        video: VideoUpload
    }
`