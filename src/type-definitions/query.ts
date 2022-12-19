const queryTypeDefs = `#graphql
  type Query {
    categories: [Category!]!
    products(productFilters: productFilters!): [Product]!
    reviews: [Review!]!
  }
`

export default queryTypeDefs
