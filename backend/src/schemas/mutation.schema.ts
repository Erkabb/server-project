import gql from "graphql-tag";

export const MutationAndQueriesTypeDefs = gql`
    type Mutation {
        signUp(input: SignUpInput!): User!
        login(input: LoginInput!): AuthResponse!
        changePassword(input: ChangePasswordInput!): Response!
        recoverPassword(input: RecoverPasswordInput!): Response!
        createCategory(categoryName:String!):Category!
        createOrder(input: OrderInput!):OrderResponse!
        createProduct(input: ProductInput!):ProductResponse!
        createShop(input: ShopInput!):ShopResponse!
    }
    type Query {
        getUser: User!
        getCategory:[Category!]!
        getOrder: [Order!]!
        getProduct: [Product!]!
        getProductById(_id:ID!):Product!
        getShop: [Shops!]!
        getShopById(_id: ID!):Shops!
    }
`