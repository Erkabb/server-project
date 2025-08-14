import gql from "graphql-tag";

export const videoUploadTypeDefs = gql`
  type VideoUpload {
    _id: ID!
    title: String!
    description: String
    thumbnail: String
    unitPrice: Float
    level: String
    category: String
    youtubeUrl: YoutubeUrlType!
    channelTitle: String
  }
  type YoutubeUrlType {
    id: ID!
    name: String
    url: String
  }
  input YoutubeUrlInput {
    name: String
    url: String
  }
  input VideoUploadInput {
    unitPrice: Float
    level: String
    category: String
    title: String!
    youtubeUrl: YoutubeUrlInput!
    description: String
    thumbnail: String
    channelTitle: String
  }

  type VideoUploadResponse {
    message: String!
    success: Boolean!
    video: VideoUpload
  }
`;
