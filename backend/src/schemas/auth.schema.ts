import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    firstname:String
    lastname:String
    role: String
    phoneNumber: String
    otp: String
    newPassword:String
    passwordResetToken: String
    passwordResetTokenExpire: String
    age: String
    isCompany: Boolean
    companyName: String
    companyRegister: String
    pfp: String
    birthDate: String
    cookie: String
    status: String
    info: String
    nickname: String
    companyPhoneNumber: String
    createdAt: Date!
    updatedAt: Date!
  }
  type AuthResponse {
    user: User!
    token: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input ChangePasswordInput {
    password: String!
    newPassword: String! 
  }
  input RecoverPasswordInput {
    password: String!
    resetToken: String!
  }
  input SignUpInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
  type Response {
    message: String!
  }
`;
