const express = require('express')
const router = express()
const app = express()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const productController = require('../controllers/productController')

router.get("/all", productController.showAll)
router.get("/men/shoes", productController.menShoes)
router.get("/men/clothes", productController.menClothes)
router.get("/men/accessories", productController.menAccessories)
router.get("/women/shoes", productController.womenShoes)
router.get("/women/clothes", productController.womenClothes)
router.get("/women/bras", productController.womenBras)
router.get("/sale", productController.sale)
router.get("/accessories", productController.accessories)

router.post("/users",jsonParser, productController.users)
router.post("/user-add", jsonParser, productController.userAdd)
router.post("add-to-cart", jsonParser, productController.addToCart)

module.exports = router