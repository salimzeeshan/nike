const productModel = require('../models/productModel')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const showAll = async (req, res, next) => {
    try {
        const data = await productModel.product.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const menShoes = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "men-shoes" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const menClothes = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "men-clothes" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const menAccessories = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "men-accessories" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const womenShoes = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "women-shoes" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const womenClothes = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "women-clothes" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const womenBras = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "women-bras" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const sale = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "sale" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const accessories = async (req, res, next) => {
    try {
        const data = await productModel.product.find({ "tag": "accessories" })
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}


const users = async (req, res, next) => {
    try {
        const data = await productModel.user.find({"email": `${req.body.email}`})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const userAdd = async (req, res, next) => {
    try {
        await productModel.user.insertMany(req.body)
        res.send({"message": "User added successfully"})
    } catch (error) {
        console.log(error)
    }
}

const addToCart = async (req, res, next) => {
    try {
        const userData = await productModel.user.findOne({"email": `${req.body.email}`})
        var cart = userData.cart
        console.log(typeof cart, userData.cart)
        // cart.push(req.body)
        // res.send(cart)
        // await productModel.user.updateOne({ "email": `${req.body.email}` }, { "cart": cart })
        // res.send({ "message": "Product added to cart successfully" })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    showAll, menShoes, menClothes, menAccessories, womenBras, womenClothes, womenShoes, accessories, sale, users, userAdd, addToCart
}