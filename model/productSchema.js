import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  id: {
    type: Number,
  },
  image_url: {
    type: String,
  },
  title: {
    type: String,
  },
  style: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  total_reviews: {
    type: String,
  },
  rating: {
    type: String,
  },
  availability: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const products = models.products || model("products", productSchema)

export default products