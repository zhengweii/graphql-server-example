const categoryTypeDefs = `#graphql
  input AddCategoryInput {
    name: String!
  }

  type Category {
    id: ID!
    name: String!
    products(productFilters: productFilters): [Product!]!
  }
`

export default categoryTypeDefs
