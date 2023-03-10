const productTypeDefs = `#graphql
  input productFilters {
    onSale: Boolean
    averageRatings: Int
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
  }

  input UpdateProductInput {
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    categoryId: ID
    category: UpdateCategoryInput
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID
    category: Category
    reviews: [Review!]
  }
`

export default productTypeDefs
