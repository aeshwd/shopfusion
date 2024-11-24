/* Countdown */

const countdown = () => {
    const now = new Date().getTime();
    const christmas = new Date('December 25, 2024 00:00:00').getTime();
    const timeLeft = christmas - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    if (timeLeft < 0) {
      document.querySelector('.countdown').innerHTML = "<h2>🎉 Merry Christmas! 🎉</h2>";
    }
  };
  
  // Update the countdown every second
  setInterval(countdown, 1000);
  countdown();


  /* Product page */

  // Sample Product Data
// Product Data with All Categories
const products = {
    "mens-wear": [
        {
            name: "Mens T-Shirt Casual Shirt for Men",
            images: ["images/pro1.jpg", "images/pro2.jpg", "images/pro3.jpg"],
            description: "Comfortable cotton T-Shirt for daily wear.",
            rating: 4.3,
            price: 1200
        },
        {
            name: "Lymio Track Pant for Men",
            images: ["images/pro5.jpg", "images/pro6.jpg", "images/pro7.jpg"],
            description: "Stylish and warm pant for men.",
            rating: 4.7,
            price: 700
        }
    ],
    "womens-wear": [
        {
            name: "KOTTY Women Polyester Blend Solid Trousers",
            images: ["images/pro9.jpg", "images/pro20.jpg", "images/pro10.jpg"],
            description: "Elegant evening dress for special occasions.",
            rating: 4.5,
            price: 1500
        },
        {
            name: "Prixelo Winter Fleece Warm Thermal Leggings Tights Pants for Women and Girls",
            images: ["images/pro11.jpg", "images/pro12.jpg", "images/pro13.jpg"],
            description: "Prixelo Winter Fleece Warm Thermal Leggings",
            rating: 4.6,
            price: 2500
        }
    ],
    "kids-wear": [
        {
            name: "Googo Gaaga Boys Cotton Track Suit",
            images: ["images/pro14.jpg", "images/pro15.jpg", "images/pro16.jpg"],
            description: "Googo Gaaga Boys Cotton Track Suit",
            rating: 4.4,
            price: 399
        },
        {
            name: "AJ DEZINES Kids Regular Fit Clothing Set For Boys",
            images: ["images/pro17.jpg", "images/pro18.jpg", "images/pro19.jpg"],
            description: "Comfortable and durable shoes for kids.",
            rating: 4.5,
            price: 1499
        }
    ],
    "kitchen-appliances": [
        {
            name: "Pigeon Polypropylene Mini Handy and Compact Chopper with 3 Blades",
            images: ["images/pro21.webp", "images/pro22.jpg", "images/pro23.jpg"],
            description: "High-performance grinder for your kitchen.",
            rating: 4.6,
            price: 200
        },
        {
            name: "HomeWiz Oil Dispenser 1 Litre | Pack of 2 | Transparent, Leak-Proof, BPA-Free Oil Container for Cooking Oils & Vinegar",
            images: ["images/pro24.jpg", "images/pro25.jpg", "images/pro26.jpg"],
            description: "Efficient dispenser oven with multiple modes.",
            rating: 4.7,
            price: 157
        }
    ],
    "christmas-special": [
        {
            name: "ELEGANT LIFESTYLE Cute and Sweet Love Horn Head Royal Set ",
            images: ["images/pro27.jpg", "images/pro28.jpg", "images/pro29.jpg"],
            description: "ELEGANT  Cute and Sweet Love Horn Head Royal Set ",
            rating: 4.8,
            price: 400,
            offer: true
        },
        {
            name: "INALSA Air Fryer 4.2 ltr|1400 W with Air Crisp Technology",
            images: ["images/pro30.jpg", "images/pro31.jpg", "images/pro32.jpg"],
            description: "INALSA Air Fryer 4.2 ltr|1400 W with Air Crisp Technology",
            rating: 4.6,
            price: 199,
            offer: true
        }
    ]
};

  
  // Generate Products
function loadProducts() {
    for (const category in products) {
        const container = document.getElementById(category);
        products[category].forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-rating">${'⭐'.repeat(Math.round(product.rating))}</div>
                <button onclick="viewProduct('${category}', ${index})">Buy Now</button>
            `;
            container.appendChild(productCard);
        });
    }
}

function viewProduct(category, index) {
    localStorage.setItem("selectedProduct", JSON.stringify({ category, index }));
    window.location.href = "product-details.html";
}


loadProducts();
