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
  }
}

export default Mutation
