###  DEPENDENCIAS ###
- "apollo-server": "^2.4.8"
- "graphql": "^14.2.1"
- "nodemon": "^1.18.10"

###  INSTALAÇÃO ###
- npm i / ou yarn i / ou yarn install

###  START PROJETO ###
- npm start / ou yarn start

###  DEPENDENCIA PARA IMPORT ###
- npm i -s graphql-import
- -s ele grava o arquivo dentro do package.json
- "graphql-import": "^1.0.2"

### COMPLEMENTAR O NODEMON PARA PEGAR O RELOAD DE .JS  .GRAPHQL  ###
- Dentro do package.json colocaremos o comando abaixo para complementar no nodemon
- --ext js, graphql
- "start": "nodemon --ext js, graphql"


### ANOTAÇÕES ###

- METODO UMA FUNÇÃO SEM PARENTES
- DEFINIÇÕES DE TIPOS
- TYPE QUERY TIPO CONSULTA
- CONSEGUE ENTRAR NO NÓ E PEGAR OS DADOS E PEGAR DADOS RELACIONADOS
- É A FORMA DE DEIXAR O COMENTARIO DENTRO DA QUERY

- AQUI FICA TODAS AS MINHAS CONSULTAS E ENTRADAS DA MINHA API
- TIPOS DE CONSULTA
- QUANDO COLOCAMOS DO LADO DO TYPE ` !  ` SIGNIFICA QUE ELE É OBRIGATORIO

-  Nesse caso ele não pode está vazio e precisa ser inteiro `  [Int]! `


- ELE RESOLVE O DADO OU CONVERTE DE UMA COLUNA PARA OUTRA
- 5 Tipos basicos de graphql: Int Float String Boolean ID
- Podemos escalar conforme abaixo:

- scalar Date
- no return eu posso consultar dados no banco
- consultar outra api


- PODEMOS TB CRIAR UMA QUERY ESPECIFICA PARA ALTERAR A CHAVE
-  Usuario: {
-      salario(usuario){
-          return usuario.salario_real
-       }
-   },




