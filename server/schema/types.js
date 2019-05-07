const { gql } = require('apollo-server-express')
// GraphQL: TypeDefs
  const TYPEDEFS = gql`
  type Content {
      title: String,
      mirror: String
    },
    type Query {
      contents: [Content]
    },
    type Mutation {
      addPost(title: String!, mirror: String!): Content,
    }
  `;
