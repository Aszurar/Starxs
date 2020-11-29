// CONFIRMATION
const formDelete = document.querySelectorAll('#form-delete')

formDelete.forEach(deleteForm => {
    deleteForm.addEventListener('submit', function(event){

        const confirmation = confirm("Are you sure?")
    
        if(!confirmation) event.preventDefault()
    
    })
    
})

// PRICE
// const pricesForm = document.querySelectorAll('total-price')
// const totalPrice = 0
// console.log(pricesForm);
// 
// pricesForm.forEach(price => {
    // console.log(price);
    // totalPrice = price.innerHTML
    // console.log(totalPrice);
// })