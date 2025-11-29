import gql from "graphql-tag";

export const storeTypeDefs = gql`
  type Stores {
    _id: ID!
    name: String!
    logo: String
    short_name: String
    storeLocation: String
    phone: String
    address: String
    timesheets: [String]
    totalProducts: Int!
    websiteId: String!
  }

  input StoreInput {
    name: String
    short_name: String
    storeLocation: String
    phone: String
    timesheets: [String]
    websiteId: String!
  }

  type StoreResponse {
    message: String!
  }
`;
