import { categories } from './mockData.js'

const Product = {
  category: (obj) => {
    return categories.find((category) => category.id == obj.categoryId)
  }
}

export default Product
