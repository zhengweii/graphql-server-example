import { v4 as uuidv4 } from 'uuid'

const Mutation = {
  addCategory: (obj, { input }, { categories }) => {
    const { name } = input

    const newCategory = {
      id: uuidv4(),
      name
    }

    categories.push(newCategory)
    return newCategory
  },
  addProduct: (obj, { input }, { products }) => {
    const { id, name, description, quantity, price, image, onSale, categoryId, category } = input

    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
      category
    }

    products.push(newProduct)
    return newProduct
  },
  addReview: (obj, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input

    const newReview = {
      id: uuidv4(),
      date,
      title,
      comment,
      rating,
      productId
    }

    reviews.push(newReview)
    return newReview
  },
  deleteCategory: (obj, { id }, { categories, products }) => {
    const index = categories.findIndex((each) => each.id === id)
    if (index !== -1) {
      categories.splice(index, 1)
    }

    // Delete the categoryId from associated products
    products.forEach((product) => {
      if (product.categoryId === id) {
        product.categoryId = null
      }
    })

    return id
  },
  deleteProduct: (obj, { id }, { products, reviews }) => {
    let index = products.findIndex((each) => each.id === id)
    if (index !== -1) {
      products.splice(index, 1)
    }

    // Delete associated reviews
    index = reviews.findIndex((review) => review.productId === id)
    while (index !== -1) {
      reviews.splice(index, 1)
      index = reviews.findIndex((review) => review.productId === id)
    }
    return id
  },
  deleteReview: (obj, { id }, { reviews }) => {
    let index = reviews.findIndex((each) => each.id === id)
    if (index !== -1) {
      reviews.splice(index, 1)
    }

    return id
  },
  updateCategory: (obj, { id, input }, { categories }) => {
    const index = categories.findIndex((each) => each.id === id)

    categories[index] = {
      ...categories[index],
      ...input
    }

    return categories[index]
  },
  updateProduct: (obj, { id, input }, { products }) => {
    const index = products.findIndex((each) => each.id === id)

    products[index] = {
      ...products[index],
      ...input
    }

    return products[index]
  },
  updateReview: (obj, { id, input }, { reviews }) => {
    const index = reviews.findIndex((each) => each.id === id)

    reviews[index] = {
      ...reviews[index],
      ...input
    }

    return reviews[index]
  }
}

export default Mutation
