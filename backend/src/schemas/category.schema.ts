import gql from 'graphql-tag';

export const typeDefs=gql`
scalar Date
    type Category{
        _id:ID!
        categoryName:String!
        createdAt: Date!
        updatedAt: Date!
    }
`