
var cartIcon = document.getElementById("cart-icon")

var cartLogo = document.getElementById("cart-logo")
var clothingContainer = document.getElementById("clothing-card-container")
var accessoriesContainer = document.getElementById("accessories-card-container")
var noOfItems = document.getElementById("items__in__cart")

localStorage.getItem("cartItemNo") ? noOfItems.innerHTML += localStorage.getItem("cartItemNo") : noOfItems.innerHTML = 0

//noOfItems.innerHTML += localStorage.getItem("cartItemNo")

function clothingCard(data,i){
    
    var productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.id = data[i].id
    
    productCard.addEventListener("click",function(e){
        productId = productCard.id
        localStorage.setItem("pId", productId)
        window.location.href = "./product-details.html?id="+ productId
    })

    var previewImg = document.createElement("img")
    previewImg.className = "product-img"
    productCard.appendChild(previewImg)
    previewImg.src= data[i].preview
    
    var productMeta  = document.createElement("div")
    productMeta.className = "product-meta"
    productCard.appendChild(productMeta)

    var head4 = document.createElement("h4")
    productMeta.appendChild(head4)
    head4.innerHTML = data[i].name

    var head5 = document.createElement("h5")
    productMeta.appendChild(head5)
    head5.innerHTML = "Brand: " + data[i].brand

    var price = document.createElement("p")
    productMeta.appendChild(price)
    price.innerHTML= "Price Php " + data[i].price +".00"

    if(data[i].isAccessory == false) {
        clothingContainer.appendChild(productCard);
    } else {
        accessoriesContainer.appendChild(productCard);
    }
}


$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(response){
    console.log(response)
    for (var i = 0; i < response.length; i++) {      
        clothingCard(response,i)
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1, 
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

cartLogo.addEventListener("click", function (e) {
    cartIcon.href = "./cart.html"
  })

  //scroll to top
  // JavaScript to show/hide the scroll to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
