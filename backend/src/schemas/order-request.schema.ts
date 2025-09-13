import gql from "graphql-tag";

export const requestTypeDefs = gql`
  type Request {
    projectType: String!
    features: [String!]!
    budget: String!
    timeline: String
    description: String
    website: String
    user: UserType
    company: CompanyType
  }

  type UserType {
    firstname: String
    lastname: String
    email: String
    phone: String
  }

  input UserInputType {
    firstname: String
    lastname: String
    email: String
    phone: String
  }

  type CompanyType {
    name: String
    email: String
    phoneNumber: String
  }

  input CompanyInputType {
    name: String
    email: String
    phoneNumber: String
  }

  input OrderRequestInput {
    projectType: String!
    features: [String!]!
    budget: String!
    timeline: String
    description: String
    website: String
    user: UserInputType
    company: CompanyInputType
  }
  type RequestResponse {
    message: String!
  }
`;
