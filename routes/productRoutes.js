const express = require('express')
const router = express()

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

router.get("/users", productController.users)
router.post("/user-add", productController.userAdd)

module.exports = router