const data = require('../data.json')
const fs = require('fs')

module.exports = {
    index(req, res){
        let countJackets = 0
        let totalPrice = 0
        let finalPrice = 0
        
        //find all jackets orders 
        let foundJackets = data.cart.filter(function(product){
            return product.id == 1
        })
        //Find the amount of jackets
        foundJackets.forEach( jackets => {
            countJackets += Number(jackets.quantity)
        });
        console.log(countJackets);
        // find the total price without discount
        data.cart.forEach(productCart =>{
            totalPrice += productCart.totalPrice 
        })
        
        console.log(totalPrice);

        if (countJackets > 2) {
            finalPrice = totalPrice - (totalPrice*0.1)
            discount = totalPrice*0.1
            discountMessage = "CYBERMONDAY!!: +2 jackets, get 10% discount!" 
        }else{
            finalPrice = totalPrice
            discountMessage = ""
            discount = 0
        }

        console.log(finalPrice);

        const price = { 
            totalPrice,
            finalPrice,
            discount,
            discountMessage   
        }

        return res.render("cart/index", { productsCart: data.cart, price})
    },

    remove(req, res){
        const { id } = req.body

        if (Number(id) == 0){
            data.cart = []
        } else {

            const filteredCartProducts = data.cart.filter(function(productCart){
                return productCart.id != id
            })
    
            data.cart = filteredCartProducts
        }

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if (err) throw `File Removal erro: ${err} `

            return res.redirect('/cart')
        })
    }
}