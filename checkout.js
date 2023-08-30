var noOfItems = document.getElementById("items__in__cart")
var cartLogo = document.getElementById("cart-logo")
var cartIcon = document.getElementById("cart-icon")
cartLogo.addEventListener("click", function (e) {
    cartIcon.href = "./cart.html"
  })



localStorage.getItem("cartItemNo") ? noOfItems.innerHTML += localStorage.getItem("cartItemNo") : noOfItems.innerHTML = 0

