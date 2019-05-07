// const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('apollo-server-express');
const TYPEDEFS = require('./types.js');
const RESOLVERS = require('./resolvers.js')

// module.exports = function(app){
//   const SERVER = new ApolloServer({
//     typeDefs: TYPEDEFS,
//     resolvers: RESOLVERS,
//     playground: {
//       endpoint: `http://localhost:4000/graphql`,
//       settings: {
//         'editor.theme': 'light'
//       }
//     }
//   });
// }


module.exports = function(app){
  makeExecutableSchema({
    typeDefs: TYPEDEFS,
    resolvers: RESOLVERS
  })
}
