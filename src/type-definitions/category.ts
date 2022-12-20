const categoryTypeDefs = `#graphql
  type Category {
    id: ID!
    name: String!
    products(productFilters: productFilters): [Product!]!
  }
`

export default categoryTypeDefs
