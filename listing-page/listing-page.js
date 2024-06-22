let listingItem = JSON.parse(localStorage.getItem('listing'))

function showListing(){




    console.log(listingItem)

    // 3 things to create a new element
//         1. create the element using document.createElement
//         2. populate the elements
//         3. append the elements onto the page

//  1. create the element using document.createElement
    let titleElement = document.createElement('h2')

    let priceElement = document.createElement('p')

    let pictureElement = document.createElement('img')


//         2. populate the elements

    titleElement.innerHTML = listingItem.title

    console.log(titleElement)

    priceElement.innerHTML = `$${listingItem.price}`

    console.log(priceElement)

    pictureElement.src = listingItem.picture

    pictureElement.alt = listingItem.title

    console.log(pictureElement)

    let button = document.createElement('button')


    pictureElement.className= "listing-picture"

    button.className = 'btn'

    button.innerHTML = "Add to Shopping Cart"

    


    // pictureElement.style.height = "300px"

    // pictureElement.style.width = "300px"


    
    
//3. append the elements onto the page

    let oneItemContainer = document.querySelector("#one-item-container")

    console.log(oneItemContainer)



    oneItemContainer.appendChild(titleElement)

    oneItemContainer.appendChild(pictureElement)

    oneItemContainer.appendChild(priceElement)

    oneItemContainer.appendChild(button)







}

window.addEventListener('load',()=>{
    
    showListing()

    let button = document.querySelector('.btn')


    button.addEventListener('click',()=>{

        let shoppingCart = localStorage.getItem('shoppingCart')

        if(!shoppingCart){
            let newCart = [{title:listingItem.title,picture:listingItem.picture,price:listingItem.price,quantity:1}]
            // console.log(newCart)
            localStorage.setItem('shoppingCart',JSON.stringify(newCart))
        }
  
        else{
            let parsedCart = JSON.parse(shoppingCart)

            parsedCart.forEach(element => {
                if(element.title === listingItem.title){
                    element.quantity+=1
                }
                else{
                    parsedCart.push({title:listingItem.title,picture:listingItem.picture,price:listingItem.price,quantity:1})
                }
                
            });
            console.log(parsedCart)
            localStorage.setItem("shoppingCart",JSON.stringify(parsedCart))
            // console.log(parsedCart)

        }

        window.location.href = "../shopping-cart.html"
    })




})




function addToShoppingCart(){


    console.log("Shopping function")


    window.location.href = "../shopping-cart.html"
}


// function addToCart(){
//     let title = document.getElementById('title').innerHTML
//     let picture = document.getElementById('picture').src
//     let price = document.getElementById('price').innerHTML
//     let item = {
//         title: title,
//         price: price,
//         picture: picture
    
//     }
    
    
// let cartItems = JSON.parse(localStorage.getItem('cart'))
// localStorage.setItem('cart', JSON.stringify(cartItems))
// window.location.href = '../shopping-cart/shoppingCart.html'
// }