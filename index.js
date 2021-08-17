// IMPORTANDO O APOLLO 
// IMPORTANDO GQL É UM TEMPLATE
const { AppoloServer, gql, ApolloServer } = require("apollo-server")

// METODO UMA FUNÇÃO SEM PARENTES
// DEFINIÇÕES DE TIPOS
// TYPE QUERY TIPO CONSULTA
// CONSEGUE ENTRAR NO NÓ E PEGAR OS DADOS E PEGAR DADOS RELACIONADOS
// # É A FORMA DE DEIXAR O COMENTARIO DENTRO DA QUERY

//AQUI FICA TODAS AS MINHAS CONSULTAS E ENTRADAS DA MINHA API
//TIPOS DE CONSULTA
const typeDefs = gql`

    scalar Date
    #Pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual: String
        horaInicial: Date
    }
`;

// ELE RESOLVE O DADO OU CONVERTE DE UMA COLUNA PARA OUTRA
//5 Tipos basicos de graphql: Int Float String Boolean ID
// Podemos escalar conforme abaixo:

//scalar Date
const resolvers = {
    Query: {
        ola(){
            return 'Bom dia!'
        },
        horaAtual(){
            return `${new Date()}`
        },
        horaInicial(){
            return new Date
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
