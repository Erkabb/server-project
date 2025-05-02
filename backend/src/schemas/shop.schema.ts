import gql from "graphql-tag";

export const shopTypeDef=gql`
    type Shops {
        _id: ID!
        user: [ID!]!
        number: Int!
        email: String!
        officialName: String!
        name: String
        location: String
        phoneNumber: String!
        officialLogo: String!
        logo: String
        information: String
        timesheet: String
        registerNumber: String!
        createdAt: Date!
        updatedAt: Date!
    }   
    input ShopInput {
        user: [ID!]!
        email: String!
        officialName: String!
        location: String
        phoneNumber: String!
        officialLogo: String!
        registerNumber: String!
    }
    type ShopResponse {
        message: String!
    }
`