import { products } from './mockData.js'

const Category = {
  products: (obj, args, context) => {
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
