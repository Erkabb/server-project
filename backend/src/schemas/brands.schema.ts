import gql from "graphql-tag";

export const brandTypeDef = gql`
  type Brand {
    _id: ID!
    #        number: Int!
    name: String!
    brandLogo: String!
    subLogo: String
    totalProducts: Int
    websiteId: String!
  }

  type BrandResponse {
    messages: String!
  }
`;
