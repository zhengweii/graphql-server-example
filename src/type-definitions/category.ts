const categoryTypeDefs = `#graphql
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`

export default categoryTypeDefs
