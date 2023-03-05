const mongoose = require('mongoose')
const express = require('express')
const app = express()

const router = require('./routes/productRoutes')

const database = 'mongodb+srv://zeeshansalim:456123@nike-products.shrdb01.mongodb.net/nike?retryWrites=true&w=majority'

const main = () => { 
    mongoose.connect(database)
}

app.listen(2080, async (req, res) => {
    try {
        await main()
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log(error)
    }
    console.log("Port: 2080")
})

app.use('/', router)