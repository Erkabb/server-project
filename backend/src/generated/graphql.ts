import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "@/types";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type AddUserInput = {
  email: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  userLevel?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuthResponse = {
  __typename?: "AuthResponse";
  token: Scalars["String"]["output"];
  user: User;
};

export type Brand = {
  __typename?: "Brand";
  _id: Scalars["ID"]["output"];
  brandLogo: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  subLogo?: Maybe<Scalars["String"]["output"]>;
  totalProducts?: Maybe<Scalars["Int"]["output"]>;
};

export type BrandInput = {
  brandLogo?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type BrandResponse = {
  __typename?: "BrandResponse";
  messages: Scalars["String"]["output"];
};

export type Category = {
  __typename?: "Category";
  _id: Scalars["ID"]["output"];
  badge?: Maybe<Scalars["String"]["output"]>;
  borderColor?: Maybe<Scalars["String"]["output"]>;
  categoryName: Scalars["String"]["output"];
  color?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  iconColor?: Maybe<Scalars["String"]["output"]>;
  totalProducts?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
};

export type CategoryInput = {
  badge?: InputMaybe<Scalars["String"]["input"]>;
  borderColor?: InputMaybe<Scalars["String"]["input"]>;
  categoryName: Scalars["String"]["input"];
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  iconColor?: InputMaybe<Scalars["String"]["input"]>;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Companies = {
  __typename?: "Companies";
  _id: Scalars["ID"]["output"];
  createdAt: Scalars["Date"]["output"];
  email: Scalars["String"]["output"];
  information?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  number: Scalars["Int"]["output"];
  officialLogo: Scalars["String"]["output"];
  officialName: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
  registerNumber: Scalars["String"]["output"];
  timesheet?: Maybe<Scalars["String"]["output"]>;
  totalProducts: Scalars["Int"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type CompanyInput = {
  email: Scalars["String"]["input"];
  location?: InputMaybe<Scalars["String"]["input"]>;
  officialLogo: Scalars["String"]["input"];
  officialName: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  registerNumber: Scalars["String"]["input"];
};

export type CompanyInputType = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompanyResponse = {
  __typename?: "CompanyResponse";
  message: Scalars["String"]["output"];
};

export type CompanyType = {
  __typename?: "CompanyType";
  email?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
};

export type CreateJobAdInput = {
  company: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  location: Scalars["String"]["input"];
  salary?: InputMaybe<Scalars["Float"]["input"]>;
  title: Scalars["String"]["input"];
};

export type JobAd = {
  __typename?: "JobAd";
  _id: Scalars["ID"]["output"];
  company: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  description: Scalars["String"]["output"];
  location: Scalars["String"]["output"];
  postedBy: User;
  salary?: Maybe<Scalars["Float"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type JobAdResponse = {
  __typename?: "JobAdResponse";
  jobAd?: Maybe<JobAd>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  addUser: User;
  changePassword: Response;
  createBrand: BrandResponse;
  createCategory: Category;
  createCompany: CompanyResponse;
  createJobAd: JobAdResponse;
  createOrder: OrderResponse;
  createOrderRequest: RequestResponse;
  createProduct: ProductResponse;
  createStore: StoreResponse;
  getUploadSignature: Signature;
  login: AuthResponse;
  recoverPassword: Response;
  signUp: User;
  uploadVideo: VideoUploadResponse;
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateBrandArgs = {
  input: BrandInput;
};

export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};

export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};

export type MutationCreateJobAdArgs = {
  input: CreateJobAdInput;
};

export type MutationCreateOrderArgs = {
  input: OrderInput;
};

export type MutationCreateOrderRequestArgs = {
  input: OrderRequestInput;
};

export type MutationCreateProductArgs = {
  input: ProductInput;
};

export type MutationCreateStoreArgs = {
  input: StoreInput;
};

export type MutationGetUploadSignatureArgs = {
  input?: InputMaybe<SignatureInput>;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRecoverPasswordArgs = {
  input: RecoverPasswordInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type MutationUploadVideoArgs = {
  input: VideoUploadInput;
};

export type OptionTypeInput = {
  color?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  size?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  weight?: InputMaybe<Scalars["String"]["input"]>;
};

export type OptionTypes = {
  __typename?: "OptionTypes";
  color?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  images?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  size?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  weight?: Maybe<Scalars["String"]["output"]>;
};

export type Order = {
  __typename?: "Order";
  _id: Scalars["ID"]["output"];
  availableHours?: Maybe<Scalars["Float"]["output"]>;
  cancelReason?: Maybe<Scalars["String"]["output"]>;
  companyName?: Maybe<Scalars["String"]["output"]>;
  companyRegister?: Maybe<Scalars["String"]["output"]>;
  completedAt?: Maybe<Scalars["Date"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  declinedAt?: Maybe<Scalars["Date"]["output"]>;
  discount: Scalars["Float"]["output"];
  isCompany?: Maybe<Scalars["Boolean"]["output"]>;
  leftQuantity: Scalars["Int"]["output"];
  phoneNumber: Scalars["String"]["output"];
  pickUpLocation: Scalars["String"]["output"];
  pickedStaff?: Maybe<Scalars["Float"]["output"]>;
  productId: Scalars["ID"]["output"];
  quantity: Scalars["Int"]["output"];
  shipmentTotal?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  total: Scalars["Float"]["output"];
  unitPrice: Scalars["Float"]["output"];
  updatedAt: Scalars["Date"]["output"];
  userAddress: Scalars["String"]["output"];
  waitUntil?: Maybe<Scalars["Date"]["output"]>;
};

export type OrderInput = {
  availableHours?: InputMaybe<Scalars["Float"]["input"]>;
  discount: Scalars["Float"]["input"];
  leftQuantity: Scalars["Int"]["input"];
  phoneNumber: Scalars["String"]["input"];
  pickUpLocation: Scalars["String"]["input"];
  pickedStaff?: InputMaybe<Scalars["Float"]["input"]>;
  productId: Scalars["ID"]["input"];
  quantity: Scalars["Int"]["input"];
  total: Scalars["Float"]["input"];
  unitPrice: Scalars["Float"]["input"];
  userAddress: Scalars["String"]["input"];
};

export type OrderRequestInput = {
  budget: Scalars["String"]["input"];
  company?: InputMaybe<CompanyInputType>;
  description: Scalars["String"]["input"];
  features: Array<Scalars["String"]["input"]>;
  projectType: Scalars["String"]["input"];
  timeline: Scalars["String"]["input"];
  user?: InputMaybe<UserInputType>;
  website?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderResponse = {
  __typename?: "OrderResponse";
  message: Scalars["String"]["output"];
};

export type Product = {
  __typename?: "Product";
  _id: Scalars["ID"]["output"];
  brand?: Maybe<Array<Scalars["ID"]["output"]>>;
  category?: Maybe<Array<Scalars["ID"]["output"]>>;
  createdAt: Scalars["Date"]["output"];
  detail?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["Float"]["output"]>;
  estimatedDelivery?: Maybe<Scalars["Date"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  optionTypes?: Maybe<OptionTypes>;
  productProperties?: Maybe<Properties>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  soldQuantity?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  store?: Maybe<Array<Scalars["ID"]["output"]>>;
  totalQuantity?: Maybe<Scalars["Int"]["output"]>;
  trackCode?: Maybe<Scalars["String"]["output"]>;
  unitPrice?: Maybe<Scalars["Float"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
};

export type ProductInput = {
  brand?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  category?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  detail?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Float"]["input"]>;
  estimatedDelivery?: InputMaybe<Scalars["Date"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  optionTypes?: InputMaybe<OptionTypeInput>;
  productProperties?: InputMaybe<PropertyInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  store?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  totalQuantity?: InputMaybe<Scalars["Int"]["input"]>;
  trackCode?: InputMaybe<Scalars["String"]["input"]>;
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ProductResponse = {
  __typename?: "ProductResponse";
  message: Scalars["String"]["output"];
};

export type Properties = {
  __typename?: "Properties";
  _id?: Maybe<Scalars["ID"]["output"]>;
  position?: Maybe<Scalars["String"]["output"]>;
  properties?: Maybe<SubProperties>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type PropertyInput = {
  _id?: InputMaybe<Scalars["ID"]["input"]>;
  position?: InputMaybe<Scalars["String"]["input"]>;
  properties?: InputMaybe<SubPropertyInput>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  getCategories: Array<Maybe<Category>>;
  getCategory: Array<Category>;
  getJobAdById?: Maybe<JobAd>;
  getJobAds: Array<JobAd>;
  getOrderById: Array<Order>;
  getOrders: Array<Order>;
  getProduct: Array<Product>;
  getProductById: Product;
  getRequests: Array<Request>;
  getShop: Array<Companies>;
  getShopById: Companies;
  getSignature: Signature;
  getUserById: User;
  getUsers: Array<User>;
  getVideoById: VideoUpload;
  getVideos: Array<VideoUpload>;
};

export type QueryGetCategoryArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetJobAdByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetOrderByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetProductByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetShopByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetUserByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type QueryGetVideoByIdArgs = {
  _id: Scalars["ID"]["input"];
};

export type RecoverPasswordInput = {
  password: Scalars["String"]["input"];
  resetToken: Scalars["String"]["input"];
};

export type Request = {
  __typename?: "Request";
  budget: Scalars["String"]["output"];
  company?: Maybe<CompanyType>;
  description: Scalars["String"]["output"];
  features: Array<Scalars["String"]["output"]>;
  projectType: Scalars["String"]["output"];
  timeline: Scalars["String"]["output"];
  user?: Maybe<UserType>;
  website?: Maybe<Scalars["String"]["output"]>;
};

export type RequestResponse = {
  __typename?: "RequestResponse";
  message: Scalars["String"]["output"];
};

export type Response = {
  __typename?: "Response";
  message: Scalars["String"]["output"];
};

export type SignUpInput = {
  email: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Signature = {
  __typename?: "Signature";
  _id: Scalars["ID"]["output"];
  apiKey: Scalars["String"]["output"];
  cloudName: Scalars["String"]["output"];
  folder: Scalars["String"]["output"];
  signature: Scalars["String"]["output"];
  timestamp: Scalars["Float"]["output"];
};

export type SignatureInput = {
  folder: Scalars["String"]["input"];
};

export type StoreInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  short_name?: InputMaybe<Scalars["String"]["input"]>;
  storeLocation?: InputMaybe<Scalars["String"]["input"]>;
  timesheets?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type StoreResponse = {
  __typename?: "StoreResponse";
  message: Scalars["String"]["output"];
};

export type Stores = {
  __typename?: "Stores";
  _id: Scalars["ID"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  short_name?: Maybe<Scalars["String"]["output"]>;
  storeLocation?: Maybe<Scalars["String"]["output"]>;
  timesheets?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  totalProducts: Scalars["Int"]["output"];
};

export type SubProperties = {
  __typename?: "SubProperties";
  _id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  presentation?: Maybe<Scalars["String"]["output"]>;
};

export type SubPropertyInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  presentation?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  _id: Scalars["ID"]["output"];
  age?: Maybe<Scalars["String"]["output"]>;
  birthDate?: Maybe<Scalars["String"]["output"]>;
  companyName?: Maybe<Scalars["String"]["output"]>;
  companyPhoneNumber?: Maybe<Scalars["String"]["output"]>;
  companyRegister?: Maybe<Scalars["String"]["output"]>;
  cookie?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  email: Scalars["String"]["output"];
  firstname?: Maybe<Scalars["String"]["output"]>;
  info?: Maybe<Scalars["String"]["output"]>;
  isCompany?: Maybe<Scalars["Boolean"]["output"]>;
  lastname?: Maybe<Scalars["String"]["output"]>;
  newPassword?: Maybe<Scalars["String"]["output"]>;
  nickname?: Maybe<Scalars["String"]["output"]>;
  otp?: Maybe<Scalars["String"]["output"]>;
  password: Scalars["String"]["output"];
  passwordResetToken?: Maybe<Scalars["String"]["output"]>;
  passwordResetTokenExpire?: Maybe<Scalars["String"]["output"]>;
  pfp?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
  userLevel?: Maybe<Scalars["String"]["output"]>;
};

export type UserInputType = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserType = {
  __typename?: "UserType";
  email?: Maybe<Scalars["String"]["output"]>;
  firstname?: Maybe<Scalars["String"]["output"]>;
  lastname?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
};

export type VideoUpload = {
  __typename?: "VideoUpload";
  _id: Scalars["ID"]["output"];
  category?: Maybe<Scalars["String"]["output"]>;
  channelTitle?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<Scalars["String"]["output"]>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  unitPrice?: Maybe<Scalars["Float"]["output"]>;
  youtubeUrl: YoutubeUrlType;
};

export type VideoUploadInput = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  channelTitle?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  unitPrice?: InputMaybe<Scalars["Float"]["input"]>;
  youtubeUrl: YoutubeUrlInput;
};

export type VideoUploadResponse = {
  __typename?: "VideoUploadResponse";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  video?: Maybe<VideoUpload>;
};

export type YoutubeUrlInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type YoutubeUrlType = {
  __typename?: "YoutubeUrlType";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {},
> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddUserInput: AddUserInput;
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Brand: ResolverTypeWrapper<Brand>;
  BrandInput: BrandInput;
  BrandResponse: ResolverTypeWrapper<BrandResponse>;
  Category: ResolverTypeWrapper<Category>;
  CategoryInput: CategoryInput;
  ChangePasswordInput: ChangePasswordInput;
  Companies: ResolverTypeWrapper<Companies>;
  CompanyInput: CompanyInput;
  CompanyInputType: CompanyInputType;
  CompanyResponse: ResolverTypeWrapper<CompanyResponse>;
  CompanyType: ResolverTypeWrapper<CompanyType>;
  CreateJobAdInput: CreateJobAdInput;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  JobAd: ResolverTypeWrapper<JobAd>;
  JobAdResponse: ResolverTypeWrapper<JobAdResponse>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  OptionTypeInput: OptionTypeInput;
  OptionTypes: ResolverTypeWrapper<OptionTypes>;
  Order: ResolverTypeWrapper<Order>;
  OrderInput: OrderInput;
  OrderRequestInput: OrderRequestInput;
  OrderResponse: ResolverTypeWrapper<OrderResponse>;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  ProductResponse: ResolverTypeWrapper<ProductResponse>;
  Properties: ResolverTypeWrapper<Properties>;
  PropertyInput: PropertyInput;
  Query: ResolverTypeWrapper<{}>;
  RecoverPasswordInput: RecoverPasswordInput;
  Request: ResolverTypeWrapper<Request>;
  RequestResponse: ResolverTypeWrapper<RequestResponse>;
  Response: ResolverTypeWrapper<Response>;
  SignUpInput: SignUpInput;
  Signature: ResolverTypeWrapper<Signature>;
  SignatureInput: SignatureInput;
  StoreInput: StoreInput;
  StoreResponse: ResolverTypeWrapper<StoreResponse>;
  Stores: ResolverTypeWrapper<Stores>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  SubProperties: ResolverTypeWrapper<SubProperties>;
  SubPropertyInput: SubPropertyInput;
  User: ResolverTypeWrapper<User>;
  UserInputType: UserInputType;
  UserType: ResolverTypeWrapper<UserType>;
  VideoUpload: ResolverTypeWrapper<VideoUpload>;
  VideoUploadInput: VideoUploadInput;
  VideoUploadResponse: ResolverTypeWrapper<VideoUploadResponse>;
  YoutubeUrlInput: YoutubeUrlInput;
  YoutubeUrlType: ResolverTypeWrapper<YoutubeUrlType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddUserInput: AddUserInput;
  AuthResponse: AuthResponse;
  Boolean: Scalars["Boolean"]["output"];
  Brand: Brand;
  BrandInput: BrandInput;
  BrandResponse: BrandResponse;
  Category: Category;
  CategoryInput: CategoryInput;
  ChangePasswordInput: ChangePasswordInput;
  Companies: Companies;
  CompanyInput: CompanyInput;
  CompanyInputType: CompanyInputType;
  CompanyResponse: CompanyResponse;
  CompanyType: CompanyType;
  CreateJobAdInput: CreateJobAdInput;
  Date: Scalars["Date"]["output"];
  Float: Scalars["Float"]["output"];
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  JobAd: JobAd;
  JobAdResponse: JobAdResponse;
  LoginInput: LoginInput;
  Mutation: {};
  OptionTypeInput: OptionTypeInput;
  OptionTypes: OptionTypes;
  Order: Order;
  OrderInput: OrderInput;
  OrderRequestInput: OrderRequestInput;
  OrderResponse: OrderResponse;
  Product: Product;
  ProductInput: ProductInput;
  ProductResponse: ProductResponse;
  Properties: Properties;
  PropertyInput: PropertyInput;
  Query: {};
  RecoverPasswordInput: RecoverPasswordInput;
  Request: Request;
  RequestResponse: RequestResponse;
  Response: Response;
  SignUpInput: SignUpInput;
  Signature: Signature;
  SignatureInput: SignatureInput;
  StoreInput: StoreInput;
  StoreResponse: StoreResponse;
  Stores: Stores;
  String: Scalars["String"]["output"];
  SubProperties: SubProperties;
  SubPropertyInput: SubPropertyInput;
  User: User;
  UserInputType: UserInputType;
  UserType: UserType;
  VideoUpload: VideoUpload;
  VideoUploadInput: VideoUploadInput;
  VideoUploadResponse: VideoUploadResponse;
  YoutubeUrlInput: YoutubeUrlInput;
  YoutubeUrlType: YoutubeUrlType;
};

export type AuthResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["AuthResponse"] = ResolversParentTypes["AuthResponse"],
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Brand"] = ResolversParentTypes["Brand"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  brandLogo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subLogo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  totalProducts?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrandResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["BrandResponse"] = ResolversParentTypes["BrandResponse"],
> = {
  messages?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  badge?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  borderColor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  categoryName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  icon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  iconColor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  totalProducts?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompaniesResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Companies"] = ResolversParentTypes["Companies"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  information?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  location?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  officialLogo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  officialName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  registerNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timesheet?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  totalProducts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["CompanyResponse"] = ResolversParentTypes["CompanyResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyTypeResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["CompanyType"] = ResolversParentTypes["CompanyType"],
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type JobAdResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["JobAd"] = ResolversParentTypes["JobAd"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  company?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  postedBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  salary?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobAdResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["JobAdResponse"] = ResolversParentTypes["JobAdResponse"],
> = {
  jobAd?: Resolver<Maybe<ResolversTypes["JobAd"]>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  addUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationAddUserArgs, "input">
  >;
  changePassword?: Resolver<
    ResolversTypes["Response"],
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, "input">
  >;
  createBrand?: Resolver<
    ResolversTypes["BrandResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBrandArgs, "input">
  >;
  createCategory?: Resolver<
    ResolversTypes["Category"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, "input">
  >;
  createCompany?: Resolver<
    ResolversTypes["CompanyResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, "input">
  >;
  createJobAd?: Resolver<
    ResolversTypes["JobAdResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateJobAdArgs, "input">
  >;
  createOrder?: Resolver<
    ResolversTypes["OrderResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, "input">
  >;
  createOrderRequest?: Resolver<
    ResolversTypes["RequestResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderRequestArgs, "input">
  >;
  createProduct?: Resolver<
    ResolversTypes["ProductResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, "input">
  >;
  createStore?: Resolver<
    ResolversTypes["StoreResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateStoreArgs, "input">
  >;
  getUploadSignature?: Resolver<
    ResolversTypes["Signature"],
    ParentType,
    ContextType,
    Partial<MutationGetUploadSignatureArgs>
  >;
  login?: Resolver<
    ResolversTypes["AuthResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "input">
  >;
  recoverPassword?: Resolver<
    ResolversTypes["Response"],
    ParentType,
    ContextType,
    RequireFields<MutationRecoverPasswordArgs, "input">
  >;
  signUp?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationSignUpArgs, "input">
  >;
  uploadVideo?: Resolver<
    ResolversTypes["VideoUploadResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUploadVideoArgs, "input">
  >;
};

export type OptionTypesResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["OptionTypes"] = ResolversParentTypes["OptionTypes"],
> = {
  color?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  images?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  size?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  weight?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  availableHours?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  cancelReason?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyRegister?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  completedAt?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  declinedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  discount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  isCompany?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  leftQuantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickUpLocation?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pickedStaff?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  productId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  shipmentTotal?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userAddress?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  waitUntil?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["OrderResponse"] = ResolversParentTypes["OrderResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  brand?: Resolver<Maybe<Array<ResolversTypes["ID"]>>, ParentType, ContextType>;
  category?: Resolver<
    Maybe<Array<ResolversTypes["ID"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  estimatedDelivery?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  link?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  optionTypes?: Resolver<
    Maybe<ResolversTypes["OptionTypes"]>,
    ParentType,
    ContextType
  >;
  productProperties?: Resolver<
    Maybe<ResolversTypes["Properties"]>,
    ParentType,
    ContextType
  >;
  quantity?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  soldQuantity?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  store?: Resolver<Maybe<Array<ResolversTypes["ID"]>>, ParentType, ContextType>;
  totalQuantity?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  trackCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  unitPrice?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["ProductResponse"] = ResolversParentTypes["ProductResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertiesResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Properties"] = ResolversParentTypes["Properties"],
> = {
  _id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  properties?: Resolver<
    Maybe<ResolversTypes["SubProperties"]>,
    ParentType,
    ContextType
  >;
  value?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getCategories?: Resolver<
    Array<Maybe<ResolversTypes["Category"]>>,
    ParentType,
    ContextType
  >;
  getCategory?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCategoryArgs, "_id">
  >;
  getJobAdById?: Resolver<
    Maybe<ResolversTypes["JobAd"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetJobAdByIdArgs, "_id">
  >;
  getJobAds?: Resolver<Array<ResolversTypes["JobAd"]>, ParentType, ContextType>;
  getOrderById?: Resolver<
    Array<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetOrderByIdArgs, "_id">
  >;
  getOrders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  getProduct?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  getProductById?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<QueryGetProductByIdArgs, "_id">
  >;
  getRequests?: Resolver<
    Array<ResolversTypes["Request"]>,
    ParentType,
    ContextType
  >;
  getShop?: Resolver<
    Array<ResolversTypes["Companies"]>,
    ParentType,
    ContextType
  >;
  getShopById?: Resolver<
    ResolversTypes["Companies"],
    ParentType,
    ContextType,
    RequireFields<QueryGetShopByIdArgs, "_id">
  >;
  getSignature?: Resolver<ResolversTypes["Signature"], ParentType, ContextType>;
  getUserById?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserByIdArgs, "_id">
  >;
  getUsers?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  getVideoById?: Resolver<
    ResolversTypes["VideoUpload"],
    ParentType,
    ContextType,
    RequireFields<QueryGetVideoByIdArgs, "_id">
  >;
  getVideos?: Resolver<
    Array<ResolversTypes["VideoUpload"]>,
    ParentType,
    ContextType
  >;
};

export type RequestResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Request"] = ResolversParentTypes["Request"],
> = {
  budget?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  company?: Resolver<
    Maybe<ResolversTypes["CompanyType"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  features?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  projectType?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timeline?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["UserType"]>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["RequestResponse"] = ResolversParentTypes["RequestResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Response"] = ResolversParentTypes["Response"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignatureResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Signature"] = ResolversParentTypes["Signature"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  apiKey?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cloudName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  folder?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["StoreResponse"] = ResolversParentTypes["StoreResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoresResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Stores"] = ResolversParentTypes["Stores"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  short_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  storeLocation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  timesheets?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  totalProducts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubPropertiesResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["SubProperties"] = ResolversParentTypes["SubProperties"],
> = {
  _id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  presentation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  birthDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyPhoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  companyRegister?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cookie?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  firstname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  info?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  isCompany?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  lastname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  newPassword?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  nickname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  otp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  passwordResetToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  passwordResetTokenExpire?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pfp?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  userLevel?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTypeResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["UserType"] = ResolversParentTypes["UserType"],
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstname?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoUploadResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["VideoUpload"] = ResolversParentTypes["VideoUpload"],
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  channelTitle?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  level?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  thumbnail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  youtubeUrl?: Resolver<
    ResolversTypes["YoutubeUrlType"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoUploadResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["VideoUploadResponse"] = ResolversParentTypes["VideoUploadResponse"],
> = {
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  video?: Resolver<
    Maybe<ResolversTypes["VideoUpload"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YoutubeUrlTypeResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["YoutubeUrlType"] = ResolversParentTypes["YoutubeUrlType"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AuthResponse?: AuthResponseResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  BrandResponse?: BrandResponseResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Companies?: CompaniesResolvers<ContextType>;
  CompanyResponse?: CompanyResponseResolvers<ContextType>;
  CompanyType?: CompanyTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  JobAd?: JobAdResolvers<ContextType>;
  JobAdResponse?: JobAdResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OptionTypes?: OptionTypesResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderResponse?: OrderResponseResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductResponse?: ProductResponseResolvers<ContextType>;
  Properties?: PropertiesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Request?: RequestResolvers<ContextType>;
  RequestResponse?: RequestResponseResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  Signature?: SignatureResolvers<ContextType>;
  StoreResponse?: StoreResponseResolvers<ContextType>;
  Stores?: StoresResolvers<ContextType>;
  SubProperties?: SubPropertiesResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserType?: UserTypeResolvers<ContextType>;
  VideoUpload?: VideoUploadResolvers<ContextType>;
  VideoUploadResponse?: VideoUploadResponseResolvers<ContextType>;
  YoutubeUrlType?: YoutubeUrlTypeResolvers<ContextType>;
};
