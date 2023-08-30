// search.js
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const suggestionsContainer = document.getElementById("suggestions-container");
    const clothingWrapper = document.getElementById("clothing-card-container");
    const accessoriesWrapper = document.getElementById("accessories-card-container");
    const noOfItems = document.getElementById("items__in__cart");

    // Fetch the list of products from the API
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(response => response.json())
        .then(products => {
            // Event listener for input changes
            searchBox.addEventListener("input", function () {
                const searchTerm = searchBox.value.toLowerCase();
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm)
                );

                renderSuggestions(filteredProducts);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });

    function renderSuggestions(products) {
        suggestionsContainer.innerHTML = ""; // Clear previous suggestions

        products.forEach(product => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = product.name;

            suggestionItem.addEventListener("click", function () {
                searchBox.value = product.name;
                suggestionsContainer.innerHTML = "";

                // Clear both clothing and accessories wrappers
                clothingWrapper.innerHTML = "";
                accessoriesWrapper.innerHTML = "";

                // Render the selected product
                renderProduct(product);
            });

            suggestionsContainer.appendChild(suggestionItem);
        });
    }

    // Function to render a product
    function renderProduct(product) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        // Customize the HTML structure for your product card
        productCard.innerHTML = `
            <img class="product-img" src="${product.preview}" alt="${product.name}" />
            <div class="product-meta">
                <h4>${product.name}</h4>
                <h5>Brand: ${product.brand}</h5>
                <p>Price Php ${product.price}.00</p>
                <!-- Add more product details as needed -->
            </div>
        `;

        if (product.isAccessory === false) {
            clothingWrapper.appendChild(productCard);
        } else {
            accessoriesWrapper.appendChild(productCard);
        }
    }
});
