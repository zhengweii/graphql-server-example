const mutationTypeDefs = `#graphql
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
  }
`

export default mutationTypeDefs
