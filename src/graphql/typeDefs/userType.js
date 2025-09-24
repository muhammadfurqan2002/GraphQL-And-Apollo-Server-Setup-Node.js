import { gql } from "apollo-server-express";

// gql used for writing graphql schema in apollo

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean
    registerUser(name: String!, email: String!, password: String!): AuthPayload
    loginUser(email: String!, password: String!): AuthPayload
  }
`;

export default userType;
