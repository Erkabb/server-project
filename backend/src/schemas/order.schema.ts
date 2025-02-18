import gql from "graphql-tag";

export const typeDefs = gql`
scalar Date
    type Order{
    _id:ID!
    userId:ID!
    productId:ID!
    quantity: String!
    total: String!
    unitPrice: String!
    discount: String!
    leftQuantity: String!
    userAddress: String!
    pickUpLocation: String!
    createdAt: Date!
    updatedAt: Date!
    }
    
    input OrderInput {
        userId: String!
        productId:ID!
        quantity: String!
        total: String!
        unitPrice: String!
        discount: String!
        leftQuantity: String!
        userAddress: String!
        pickUpLocation: String!
    }
    type Response {
    message: String!
    }
    
    type Mutation {
        createOrder(input: OrderInput!):Response!
    }
`