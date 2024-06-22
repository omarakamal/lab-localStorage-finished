let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))

let numberInCart = document.getElementById("items-number")

let totalCart = document.getElementById("total-price")



console.log(shoppingCart)
if(shoppingCart){

let total = 0

let totalPrice = 0



shoppingCart.forEach((element)=>{

    totalPrice += (element.quantity * element.price)
    total += element.quantity
    // 1. create element
    let titleElement = document.createElement('h2')

    let priceElement = document.createElement('p')

    let pictureElement = document.createElement('img')

    let div = document.createElement('div')

    let quantityElement = document.createElement('p')

    // 2. populate the elements

    titleElement.innerHTML = element.title;

    priceElement.innerHTML = `$${element.price}`

    pictureElement.src = element.picture

    pictureElement.style.height = '300px'
    pictureElement.style.width = '300px'

    quantityElement.innerHTML = `${element.quantity} quantity`



    // 3. append elements on page

    let shoppingContainer =  document.getElementById('shopping-container')

    console.log(shoppingContainer)

    div.appendChild(titleElement)
    div.appendChild(pictureElement)

    div.appendChild(priceElement)
    div.appendChild(quantityElement)


    shoppingContainer.append(div)
        

})

numberInCart.innerHTML = `Items in ShoppingCart: ${total}`
totalCart.innerHTML = `Total: $${totalPrice}`


console.log(totalPrice)
}


function clearShoppingCart(){
    localStorage.removeItem('shoppingCart')
    alert("Thank you, your items will arrive in 2-3 business Days")
    window.location.reload()
}



function goToHomepage(){
    

   window.location.href = './homepage/index.html'
}