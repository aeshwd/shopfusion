document.addEventListener('DOMContentLoaded', () => {
    // Fetch cart data from local storage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // DOM Elements
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItemsSpan = document.getElementById('total-items');
    const totalPriceSpan = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    checkoutButton.addEventListener("click", () => {
        alert("Your order has been placed. Thanks for shopping with us.")
    })

    // Update Cart UI
    function updateCart() {
        // Clear the container
        cartItemsContainer.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        // Check if the cart is empty
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty! Start shopping now.</p>';
            totalItemsSpan.textContent = '0';
            totalPriceSpan.textContent = '0.00';
            checkoutButton.disabled = true;
            return;
        }

        // Populate the cart with items
        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">Price: ₹${item.price}</p>
                    <div class="cart-item-quantity">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Update totals
        totalItemsSpan.textContent = totalItems;
        totalPriceSpan.textContent = totalPrice.toFixed(2);
        checkoutButton.disabled = false;
    }




    // Remove an item from the cart
    window.removeItem = function (index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Change item quantity in the cart
    window.changeQuantity = function (index, delta) {
        const item = cart[index];
        item.quantity += delta;

        if (item.quantity <= 0) {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Initial render of the cart
    updateCart();
});
