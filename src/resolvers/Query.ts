import { categories, products } from './mockData.js'

const Query = {
  products: (obj, args) => {
    if (Object.entries(args.productFilters).length == 0) {
      return products
    }

    const { price, name } = args.productFilters
    const res = []
    products.forEach((each) => {
      if (each.name == name || each.price == Number(price)) {
        res.push(each)
      }
    })
  },
  categories: () => categories
}

export default Query
