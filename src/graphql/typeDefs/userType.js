import { gql } from "apollo-server-express";

// gql used for writing graphql schema in apollo 

const userType = gql`
  type User {
    name: String!
  }

  type Query {
    getUser: User
  }

  type Mutation {
    createUser(name: String!): User
  }
`;



export default userType;