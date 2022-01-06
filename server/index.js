const { ApolloServer  } = require('apollo-server');
const { animals, mainCards, categories } = require('./db')
const  typeDefs  = require('./schema')
const Animal = require('./resolvers/Animal')
const Category = require('./resolvers/Category')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

const server = new ApolloServer(
    { 
        typeDefs,
         resolvers: {
           Query, Category, Mutation, Animal
         } ,
         context: {
           mainCards,
           animals,
           categories
          }
    }); 

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


