const mutationTypeDefs = `#graphql
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!

    deleteCategory(id: ID!): ID!
    deleteProduct(id: ID!): ID!
    deleteReview(id: ID!): ID!
  }
`

export default mutationTypeDefs
