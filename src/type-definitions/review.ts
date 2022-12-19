const reviewTypeDefs = `#graphql
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`

export default reviewTypeDefs
