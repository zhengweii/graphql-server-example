const Query = {
  products: (obj, args, { products }) => {
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
  categories: (obj, args, { categories }) => categories
}

export default Query
