// Sample Menu Items
const menu = [
  { id: 1, name: "Veg Sandwich", price: 40, img: "images.jpg" },
  { id: 2, name: "Masala Dosa", price: 60, img: "dosa.jpg" },
  { id: 3, name: "Fried Rice", price: 70, img: "firedrice.webp" },
  { id: 4, name: "Cold Coffee", price: 50, img: "cold-coffee.jpg" }
];

// Display Menu
if (document.getElementById("menuList")) {
  const menuList = document.getElementById("menuList");
  menu.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuList.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const item = menu.find(m => m.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item.name + " added to cart!");
}

// Display Cart
if (document.getElementById("cartItems")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p>`;
    container.appendChild(div);
    total += item.price;
  });

  document.getElementById("totalAmount").innerText = total;
}

// Checkout Confirmation
if (document.getElementById("checkoutForm")) {
  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    document.getElementById("confirmationMsg").innerText =
      "✅ Your order has been placed successfully!";
  });
}
// Clear Cart Function
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    localStorage.removeItem("cart");
    window.location.reload(); // refresh page to update cart display
  }
}

