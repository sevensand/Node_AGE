const express = require('express');
const mongoose = require('./server/connection');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./server/schema');

const typeDefs = require('./server/schema/graphSchema');
const resolvers = require('./server/schema/resolvers');
// const typeDefs = gql`
//     type Query {
//         hello: String
//     }
// `;
// const resolvers = {
//   Query: {
//     hello: () => 'Hello World!'
//   }
// };

const apolloServer = new ApolloServer({ typeDefs, resolvers});

const app = express();
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
);
