const Category = {
  products: (obj, args, { products }) => {
    if (!args.productFilters) {
      return products.filter((product) => product.categoryId === obj.id)
    }

    const { onSale } = args.productFilters
    const filteredProducts = products.filter((product) => product.onSale === onSale)
    return filteredProducts.filter((product) => product.categoryId === obj.id)
  }
}

export default Category
