import gql from "graphql-tag";

export const brandTypeDef = gql`
    type Brand {
        _id: ID!
#        number: Int!
        name: String!
        brandLogo: String!
        subLogo: String
        totalProducts: Int
        website: String!
        createdAt: Date!
        updatedAt: Date!
    }
    
    input BrandInput {
        name: String
        brandLogo: String
        website: String!
    }
    
    type BrandResponse {
        messages: String!
    }
`