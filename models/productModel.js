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

const product = mongoose.model("products", productModel)
module.exports = product