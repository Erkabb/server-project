import gql from "graphql-tag";

export const websiteTypeDef = gql`
  type Website {
    _id: ID!
    name: String!
    logo: String
    subLogo: String
    domain: String
    subDomain: String
    index: String
    short_name: String
    totalUsers: Int
    storeLocation: String
    phone: String
    address: String
    createdAt: Date!
    updatedAt: Date!
    totalProducts: Int
    token: String
    timesheets: [String]
  }

  input WebsiteInput {
    name: String!
    logo: String
    domain: String
    index: String
    short_name: String
    storeLocation: String
    phone: String
    address: String
    timesheets: [String]
  }

  type WebsiteResponse {
    message: String!
    token: String!
  }
`;
