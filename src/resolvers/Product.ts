const Product = {
  category: (obj, args, { categories }) => {
    return categories.find((category) => category.id === obj.categoryId)
  },
  reviews: (obj, args, { reviews: reviewsData }) => {
    return reviewsData.filter((review) => review.productId === obj.id)
  }
}

export default Product
