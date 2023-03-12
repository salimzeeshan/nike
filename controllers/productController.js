const productModel = require('../models/productModel')
const express = require('express')

const app = express()
app.use(express.json())

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
        const data = await productModel.user.find()
        console.log(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const userAdd = async (res, req, next) => {
    try {
        const data = await productModel.user.insertMany(req)
        console.log("User added")
        console.log(req)
        res.end()
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    showAll, menShoes, menClothes, menAccessories, womenBras, womenClothes, womenShoes, accessories, sale, users, userAdd
}