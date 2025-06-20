import gql from "graphql-tag";

export const signatureTypeDefs = gql`
    type Signature {
        _id: ID!
        timestamp: Float!
        signature: String!
        apiKey: String!
        cloudName: String!
        folder: String!
    }
    input SignatureInput {
        folder: String!
    }
`