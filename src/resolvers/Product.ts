const Product = {
  category: (obj, args, { categories }) => {
    return categories.find((category) => category.id == obj.categoryId)
  }
}

export default Product
