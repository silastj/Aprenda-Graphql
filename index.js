//IMPORTANDO O APOLLO 
// IMPORTANDO GQL É UM TEMPLATE
const { AppoloServer, gql, ApolloServer } = require("apollo-server")

// METODO UMA FUNÇÃO SEM PARENTES
// DEFINIÇÕES DE TIPOS
// TYPE QUERY TIPO CONSULTA
// CONSEGUE ENTRAR NO NÓ E PEGAR OS DADOS E PEGAR DADOS RELACIONADOS
// # É A FORMA DE DEIXAR O COMENTARIO DENTRO DA QUERY
const typeDefs = gql`
    #Pontos de entrada da sua API!
    type Query {
        ola: String
    }
`;

// ELE RESOLVE O DADO OU CONVERTE DE UMA COLUNA PARA OUTRA
const resolvers = {
    Query: {
        ola(){
            return 'Bom dia!'
        }
    } 
};

//DEFINE O SERVIDOR
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//AQUI DÁ O START NO SERVIDOR
server.listen().then(({ url }) => {
  console.log();
});
