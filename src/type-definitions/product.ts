const productTypeDefs = `#graphql
  input productFilters {
    name: String
    price: Float
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
    category: Category!
  }
`

export default productTypeDefs
