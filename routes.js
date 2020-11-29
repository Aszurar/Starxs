const express = require('express')
const products = require('./controllers/products')
const cart = require('./controllers/cart')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect("/products")
})

routes.get('/products', products.index)
routes.post('/products', products.post)

routes.get('/cart', cart.index)
routes.delete('/cart', cart.remove)



module.exports = routes