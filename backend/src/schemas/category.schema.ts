import gql from 'graphql-tag';

export const typeDefs=gql`
scalar Date
    type Category{
        _id:ID!
        categoryName:String!
        createdAt: Date!
        updatedAt: Date!
        totalProducts:Int
        description:String
        image:String
        link:String
    }

    input CategoryInput {
        categoryName:String!
        description:String
        totalProducts:Int
        image:String
        link:String
    }
    type CategoryResponse {
        messages:String!
    }
`