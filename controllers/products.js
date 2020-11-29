
const fs = require('fs')
const data = require('../data.json')

const textProducts = {
    title: "Cyber Monday!!: deals are live 70% off!!!",
    button: "Add to Cart"

}

module.exports = {
    index(req, res){
        return res.render("products/index", { products: data.products, textProducts} )
    },

    post(req, res){
        const keys = Object.keys(req.body)

        keys.forEach(key =>{

            if (req.body[key] == "") {
                return res.send("Please, add some product to cart")
            }
        })

            let { id, quantity } = req.body
            
            const foundProduct = data.products.find(function(product){
                return product.id == id
            })

            if (!foundProduct) return res.send("Error adding to cart")

            let { avatar, title, price, rating, weight } = foundProduct                
    
            data.cart.push({
                id,
                avatar,
                title,
                quantity,
                price,
                totalPrice: Number(quantity) * Number(price),
                rating,
                totalWeight: Number(quantity) * Number(weight),
            })

            fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
                if (err) throw `Write file Erro!: ${err}`

                return res.redirect("/products")
            })
    }
}