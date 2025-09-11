import gql from "graphql-tag";

export const typeDefs = gql`
  scalar Date
  type Category {
    _id: ID!
    categoryName: String!
    createdAt: Date!
    updatedAt: Date!
    totalProducts: Int
    color: String
    borderColor: String
    icon: String
    iconColor: String
    badge: String
    description: String
  }

  input CategoryInput {
    categoryName: String!
    color: String
    borderColor: String
    icon: String
    iconColor: String
    badge: String
    description: String
  }
`;
