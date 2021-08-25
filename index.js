// IMPORTANDO O APOLLO 
// IMPORTANDO GQL É UM TEMPLATE
const { AppoloServer, ApolloServer } = require("apollo-server")
const { importSchema } = require('graphql-import') // posso tirar o const typeDefs = gql`
// e acrescentar dentro do appolo server
//  typeDefs: importSchema('./chema/index.graphql'),

//RESOLVERS
const resolvers = require('./resolvers')
//SCHEMAPATH
const schemaPath = './schema/index.graphql'
//DEFINE O SERVIDOR
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers
});
//AQUI DÁ O START NO SERVIDOR
server.listen().then(({ url }) => {
  console.log();
});
