const mutationTypeDefs = `#graphql
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!

    deleteCategory(id: ID!): ID!
    deleteProduct(id: ID!): ID!
    deleteReview(id: ID!): ID!

    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    updateProduct(id: ID!, input: UpdateProductInput!): Product!
    updateReview(id: ID!, input: UpdateReviewInput!): Review!
  }
`

export default mutationTypeDefs
