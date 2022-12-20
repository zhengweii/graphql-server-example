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
  }
}

export default Mutation
