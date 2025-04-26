import gql from "graphql-tag";

export const typeDefs = gql`
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
    isCompany: Boolean
    companyName: String
    companyRegister: String
    phoneNumber: String!
    status: String
    shipmentTotal: String
    declinedAt: Date
    cancelReason: String
    completedAt: Date
    waitUntil: Date    
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
        phoneNumber: String!
    }
    type OrderResponse {
    message: String!
    }
    
    type OrderMutation {
        createOrder(input: OrderInput!):OrderResponse!
    }
`