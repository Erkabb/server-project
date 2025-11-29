// type JobAd {
//     _id: ID!
//     title: String!
//     description: String!
//     company: String!
//     location: String!
//     salary: Float
//     postedBy: User!
//     createdAt: Date!
//     updatedAt: Date!
//   }

import gql from "graphql-tag";

//   input CreateJobAdInput {
//     title: String!
//     description: String!
//     company: String!
//     location: String!
//     salary: Float
//   }

//   type JobAdResponse {
//     jobAd: JobAd
//     message: String
//   }

//   extend type Query {
//     getJobAds: [JobAd!]!
//     getJobAdById(_id: ID!): JobAd
//   }

//   extend type Mutation {
//     createJobAd(input: CreateJobAdInput!): JobAdResponse!
//   }

export const jobAdTypeDef = gql`
  type JobAd {
    _id: ID!
    title: String!
    description: String!
    company: String!
    location: String!
    salary: Float
    postedBy: User!
    createdAt: Date!
    updatedAt: Date!
    websiteId: String!
  }

  input CreateJobAdInput {
    title: String!
    description: String!
    company: String!
    location: String!
    salary: Float
    websiteId: String!
  }

  type JobAdResponse {
    jobAd: JobAd
    message: String
  }
`;
