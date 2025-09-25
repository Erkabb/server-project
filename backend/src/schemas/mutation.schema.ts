import gql from "graphql-tag";

export const MutationAndQueriesTypeDefs = gql`
  type Mutation {
    signUp(input: SignUpInput!): User!
    login(input: LoginInput!): AuthResponse!
    changePassword(input: ChangePasswordInput!): Response!
    recoverPassword(input: RecoverPasswordInput!): Response!
    createCategory(input: CategoryInput!): Category!
    createOrder(input: OrderInput!): OrderResponse!
    createProduct(input: ProductInput!): ProductResponse!
    createCompany(input: CompanyInput!): CompanyResponse!
    createBrand(input: BrandInput!): BrandResponse!
    createStore(input: StoreInput!): StoreResponse!
    getUploadSignature(input: SignatureInput): Signature!
    uploadVideo(input: VideoUploadInput!): VideoUploadResponse!
    addUser(input: AddUserInput!): User!
    createJobAd(input: CreateJobAdInput!): JobAdResponse!
    createOrderRequest(input: OrderRequestInput!): RequestResponse!
  }
  type Query {
    getUserById(_id: ID!): User!
    getUsers: [User!]!
    getCategory(_id: ID!): [Category!]!
    getCategories: [Category]!
    getOrderById(_id: ID!): [Order!]!
    getOrders: [Order!]!
    getProduct: [Product!]!
    getProductById(_id: ID!): Product!
    getShop: [Companies!]!
    getShopById(_id: ID!): Companies!
    getSignature: Signature!
    getVideos: [VideoUpload!]!
    getVideoById(_id: ID!): VideoUpload!
    getJobAds: [JobAd!]!
    getJobAdById(_id: ID!): JobAd
    getRequests: [Request!]!
    getProductByTrackCode(trackCode: String!): Product!
    getProductByName(name: String!): Product!
  }
`;
