import gql from 'graphql-tag';

export const typeDefs = gql`
    type Product{
        _id:ID!
        name:String!
        detail:String
        unitPrice:String!
        optionTypes: OptionTypes
        soldQuantity:String
        totalQuantity:String!
        discount:String
        brandName:String
        brandLogo:String
        category:[ID!]!
        createdAt: Date!
        updatedAt: Date!
        productProperties: Properties
        store: Store
    }
    type OptionTypes {
        size: [String]
        images: [String]
        color: [String]
    }
    input OptionTypeInput {
        size: [String]
        images: [String]
        color: [String]
    }
    type Properties {
        _id: ID!
        position: String!
        value: String!
        properties: SubProperties!
      }
    type SubProperties {
        _id: ID!
        name: String!
        presentation: String!
    }
    input SubPropertyInput {
        name: String!
        presentation: String!
    }
    input PropertyInput {
        position: String!
        value: String!
        properties: SubPropertyInput!
    }
    
    type Store {
        _id: ID!
        name: String
        short_name: String
        description: String
        storeLocation: String
        phone: String
        timesheets: String
    }
    input StoreInput {
        name: String
        short_name: String
        description: String
        storeLocation: String
        phone: String
        timesheets: String
    }
    input BrandInput {
        _id:ID!
        name:String!
        brandLogo:String!
    }
    input ProductInput {
        name:String!
        detail:String
        unitPrice:String!
        optionTypes: OptionTypeInput
        totalQuantity:String!
        brand: BrandInput 
        discount:String
        category:[ID!]!
        store: StoreInput
        productProperties: PropertyInput
    }
    type ProductResponse {
        message:String!
    }
`