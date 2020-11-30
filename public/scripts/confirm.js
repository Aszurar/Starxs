// CONFIRMATION
const formDelete = document.querySelectorAll('#form-delete')

formDelete.forEach(deleteForm => {
    deleteForm.addEventListener('submit', function(event){

        const confirmation = confirm("Are you sure?")
    
        if(!confirmation) event.preventDefault()
    
    })
    
})


const formBuy = document.querySelector('#form-buy')

formBuy.addEventListener('submit', function(event){
    alert("Purchase completed successfully!")
})
    
