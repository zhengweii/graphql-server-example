const mutationTypeDefs = `#graphql
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!

    deleteCategory(id: ID!): ID!
  }
`

export default mutationTypeDefs
