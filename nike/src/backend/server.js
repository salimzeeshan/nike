const mongoose = require('mongoose')
const express = require('express')
const app = express()

const router = require('../backend/routes/productRoutes')

const main = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/nike")
}

app.listen(4545, async () => {
    try {
        await main()
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log(error)
    }
    console.log("Port: 4545")
})

app.use('/', router)
