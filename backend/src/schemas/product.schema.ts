import gql from "graphql-tag";

export const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    detail: String
    trackCode: String
    estimatedDelivery: Date
    status: String
    unitPrice: Float
    optionTypes: OptionTypes
    soldQuantity: Int
    totalQuantity: Int
    discount: Float
    brand: [ID!]
    category: [ID!]
    createdAt: Date!
    updatedAt: Date!
    productProperties: Properties
    store: [ID!]
    quantity: Int
    link: String
  }
  type OptionTypes {
    size: [String]
    images: [String]
    color: [String]
    weight: String
  }
  input OptionTypeInput {
    size: [String]
    images: [String]
    color: [String]
    weight: String
  }
  type Properties {
    _id: ID
    position: String
    value: String
    properties: SubProperties
  }
  type SubProperties {
    _id: ID
    name: String
    presentation: String
  }
  input SubPropertyInput {
    name: String
    presentation: String
  }
  input PropertyInput {
    _id: ID
    position: String
    value: String
    properties: SubPropertyInput
  }
  input BrandInput {
    name: String
    brandLogo: String
  }
  input ProductInput {
    name: String
    detail: String
    unitPrice: Float
    optionTypes: OptionTypeInput
    totalQuantity: Int
    brand: [ID!]
    discount: Float
    category: [ID!]
    store: [ID!]
    quantity: Int
    status: String
    trackCode: String
    estimatedDelivery: Date
    productProperties: PropertyInput
    link: String
  }
  input FindProductInput {
    name: String
    trackCode: String
  }
  type ProductResponse {
    message: String!
  }
`;
