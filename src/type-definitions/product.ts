const productTypeDefs = `#graphql
  input productFilters {
    onSale: Boolean
    averageRatings: Int
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
    reviews: [Review!]
  }
`

export default productTypeDefs
