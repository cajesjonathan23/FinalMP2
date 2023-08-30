var noOfItems = document.getElementById("items__in__cart")
localStorage.getItem("cartItemNo") ? noOfItems.innerHTML += localStorage.getItem("cartItemNo") : noOfItems.innerHTML = 0

var cartIcon = document.getElementById("cart-icon")
var cartLogo = document.getElementById("cart-logo")
var listTotalWrapper = document.getElementById("list-amount-wrapper")
var list = document.getElementById("List")
var totalSumPrice = document.getElementById("Total")
var totalitems = document.getElementById("Total_Items")
var placeOrder = document.getElementById("placeOrder")

function renderProductToBuy(data, index) {
    list.innerHTML += `
    <div class="items-list-card">
        <div class="image-section">
            <img src=${data.preview} alt="">
        </div>
        <div class="details-section">
            <h3 class="product_name">${data.name}</h3>
            <p class="quantity">Quantity: ${data.quantity}</p>
            <p class="amount">Php ${data.totalprice}.00</p>
            <button class="delete-order" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>
    `
}


cartLogo.addEventListener("click", function (e) {
    cartIcon.href = "./cart.html"
  })


  function renderCardInLocalStorage() {
    var fromLocalStorage = localStorage.getItem("productData");
    if (fromLocalStorage !== null && fromLocalStorage !== undefined) {
        fromLocalStorage = JSON.parse(localStorage.getItem("productData"));
        total = 0;
        totalItems = 0;
        for (var i = 0; i < fromLocalStorage.length; i++) {
            renderProductToBuy(fromLocalStorage[i], i); // Pass the index
            total += fromLocalStorage[i].totalprice;
            totalItems += fromLocalStorage[i].quantity;
        }
    }
    totalSumPrice.innerHTML = "Total Amount: " + "Php " + total + ".00";
    totalitems.innerHTML = "Total Items: " + totalItems;
}

  
renderCardInLocalStorage()
list.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-product-btn")) {
        var index = parseInt(e.target.getAttribute("data-index"));
        removeProductFromLocalStorage(index);
        list.innerHTML = ""; // Clear the cart UI
        renderCardInLocalStorage(); // Render the updated cart UI
        updateCartItemCount(); // Update the cart item count
    }
});

function removeProductFromLocalStorage(index) {
    var fromLocalStorage = localStorage.getItem("productData");
    if (fromLocalStorage !== null && fromLocalStorage !== undefined) {
        fromLocalStorage = JSON.parse(localStorage.getItem("productData"));
        fromLocalStorage.splice(index, 1); // Remove the product at the specified index
        localStorage.setItem("productData", JSON.stringify(fromLocalStorage));
    }
}


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


function removeCardFromLocalStorage() {
    var FromLocalStorage = localStorage.getItem("productData");
    if (FromLocalStorage !== null && FromLocalStorage !== undefined) {
        FromLocalStorage = JSON.parse(localStorage.getItem("productData"));

        // Clear the array instead of looping through it
        FromLocalStorage.length = 0;
    }
    localStorage.setItem("productData", JSON.stringify(FromLocalStorage));
}

// Add an event listener to the "Delete All Products" button
var deleteAllProductsBtn = document.getElementById("deleteAllProductsBtn");
deleteAllProductsBtn.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete all products from the cart?")) {
        removeCardFromLocalStorage(); // Delete all products from local storage
        list.innerHTML = ""; // Clear the cart UI
        totalSumPrice.innerHTML = "Total Amount: Php 0"; // Reset total amount
        totalitems.innerHTML = "Total Items: 0"; // Reset total items
        localStorage.setItem("cartItemNo", JSON.stringify(0)); // Reset cart item count
        noOfItems.innerHTML = 0; // Reset cart item count in the header
        alert("All products have been deleted from the cart.");
    }
});








