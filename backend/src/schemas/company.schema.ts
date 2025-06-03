import gql from "graphql-tag";

export const companyTypeDef=gql`
    type Companies {
        _id: ID!
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
        totalProducts: Int!
        createdAt: Date!
        updatedAt: Date!
    }   
    input CompanyInput {
        email: String!
        officialName: String!
        location: String
        phoneNumber: String!
        officialLogo: String!
        registerNumber: String!
    }
    type CompanyResponse {
        message: String!
    }
`