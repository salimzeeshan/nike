const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const router = require('../backend/routes/productRoutes')

const database = 'mongodb+srv://zeeshansalim:456123@nike-products.shrdb01.mongodb.net/nike?retryWrites=true&w=majority'

const main = () => { 
    mongoose.connect(database)
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
