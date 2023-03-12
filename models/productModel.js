const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productModel = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    color_count: {
      type: String  
    },
    price: {
        type: Number,
        required: true
    },
    original_price: {
        type : Number
    },
    discount: {
        type: String
    },
    message: {
        type: String
    },
    tag: {
        type: String,
        required: true
    }
})

const userModel = new Schema({
    email: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: true
    }
})

const product = mongoose.model("products", productModel)
const user = mongoose.model("users", userModel)

module.exports = {product, user}