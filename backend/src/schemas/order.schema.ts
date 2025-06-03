import gql from "graphql-tag";

export const typeDefs = gql`
    type Order{
    _id:ID!
    productId:ID!
    quantity: Int!
    total: Float!
    unitPrice: Float!
    discount: Float!
    leftQuantity: Int!
    userAddress: String!
    pickUpLocation: String!
    isCompany: Boolean
    companyName: String
    companyRegister: String
    phoneNumber: String!
    status: String
    shipmentTotal: Float
    declinedAt: Date
    cancelReason: String
    completedAt: Date
    waitUntil: Date    
    createdAt: Date!
    updatedAt: Date!
        availableHours: Float
        pickedStaff: Float
    }
    
    input OrderInput {
        productId:ID!
        quantity: Int!
        total: Float!
        unitPrice: Float!
        discount: Float!
        leftQuantity: Int!
        userAddress: String!
        pickUpLocation: String!
        phoneNumber: String!
        availableHours: Float
        pickedStaff: Float
    }
    type OrderResponse {
    message: String!
    }
`