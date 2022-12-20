const Query = {
  products: (obj, args, { products, reviews }) => {
    if (!args.productFilters) {
      return products
    }

    let filteredProducts = products
    const { onSale, averageRatings } = args.productFilters

    // Filter by sale first
    if (onSale) {
      filteredProducts = filteredProducts.filter((product) => product.onSale === onSale)
    }

    if (averageRatings) {
      filteredProducts = filteredProducts.filter((product) => {
        let totalRatings = 0
        let numRatings = 0

        reviews.forEach((review) => {
          if (review.productId === product.id) {
            totalRatings += review.rating
            numRatings += 1
          }
        })

        return totalRatings / numRatings >= averageRatings
      })
    }

    return filteredProducts
  },
  categories: (obj, args, { categories }) => categories,
  reviews: (obj, args, { reviews }) => reviews
}

export default Query
