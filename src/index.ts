import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// File extension needs to be .js for compilation to work
import resolvers from './resolvers/index.js'
import typeDefs from './type-definitions/index.js'
import { categories, products, reviews } from './mockData.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    categories,
    products,
    reviews
  })
})

console.log(`Server ready at: ${url}`)
