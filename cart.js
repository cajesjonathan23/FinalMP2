var noOfItems = document.getElementById("items__in__cart")
localStorage.getItem("cartItemNo") ? noOfItems.innerHTML += localStorage.getItem("cartItemNo") : noOfItems.innerHTML = 0

var cartIcon = document.getElementById("cart-icon")
var cartLogo = document.getElementById("cart-logo")
var listTotalWrapper = document.getElementById("list-amount-wrapper")
var list = document.getElementById("List")
var totalSumPrice = document.getElementById("Total")
var totalitems = document.getElementById("Total_Items")
var placeOrder = document.getElementById("placeOrder")

function renderProductToBuy(data){
list.innerHTML += `
<div class="items-list-card">
    <div class="image-section">
        <img src= ${data.preview} alt="">
    </div>
    <div class="details-section">
        <h3 class="product_name">${data.name}</h3>
        <p class="quantity">x${data.quantity}</p>
        <p class="amount">Php ${data.totalprice}</p>
    </div>
</div>
</div>
`
}
cartLogo.addEventListener("click", function (e) {
    cartIcon.href = "./cart.html"
  })


function renderCardInLocalStorage(){
    var fromLocalStorage = localStorage.getItem("productData")
    if(fromLocalStorage !== null && fromLocalStorage !== undefined){
        fromLocalStorage = JSON.parse(localStorage.getItem("productData"));
        total = 0
        totalItems = 0
        for(var i=0;i<fromLocalStorage.length; i++){
            renderProductToBuy(fromLocalStorage[i])
            total += fromLocalStorage[i].totalprice
            totalItems += fromLocalStorage[i].quantity
        }
        
    }
    totalSumPrice.innerHTML = "Total Amount: " + "Php "+ total;
    totalitems.innerHTML = "Total Items: " +totalItems
}
renderCardInLocalStorage()

placeOrder.addEventListener("click", function(e){
    console.log(localStorage.getItem("cartItemNo"))
    if(localStorage.getItem("cartItemNo") === null || localStorage.getItem("cartItemNo") === undefined || localStorage.getItem("cartItemNo") === "0"){
        alert("No Items In the Cart")
    }
    else{
    window.location.href = "./checkout.html"
    removeCardFromLocalStorage()
    localStorage.setItem("cartItemNo", JSON.stringify(0))
    }
})


function removeCardFromLocalStorage(){
    var FromLocalStorage = localStorage.getItem("productData")
    if(FromLocalStorage !== null && FromLocalStorage !== undefined){
        FromLocalStorage = JSON.parse(localStorage.getItem("productData"));
        
        for(var i=0;i<FromLocalStorage.length; i++){
                FromLocalStorage.splice(i,FromLocalStorage.length)
            }
        }
        localStorage.setItem("productData", JSON.stringify(FromLocalStorage))
  }








