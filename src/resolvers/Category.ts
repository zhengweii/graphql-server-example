const Category = {
  products: (obj, args, { products }) => {
    const res = []
    products.forEach((product) => {
      if (product.categoryId == obj.id) {
        res.push(product)
      }
    })

    return res
  }
}

export default Category
