// script.js

// Παράδειγμα προϊόντων
const products = [
  {
    id:1,
    name:"Επαγγελματικό Ψυγείο 400L",
    price:950,
    img:"images/fridge.jpg.png",
    desc:"Ισχυρό επαγγελματικό ψυγείο 400L."
  },
  {
    id:2,
    name:"Σαλατιέρα Inox 2-πόρτες",
    price:780,
    img:"images/fridge.jpg.png",
    desc:"Σαλατιέρα inox με 2 πόρτες."
  },
  {
    id:3,
    name:"Ψυγείο Βιτρίνα LED",
    price:640,
    img:"images/fridge.jpg.png",
    desc:"Ψυγείο βιτρίνα με LED."
  }
];

  
  // --- Προβολή προϊόντων στη σελίδα products.html ---
  const list = document.getElementById("product-list");
  if (list) {
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p><strong>${p.price} €</strong></p>
        <button onclick="addToCart(${p.id})">Προσθήκη στο Καλάθι</button>
      `;
      list.appendChild(card);
    });
  }
  
  // --- Καλάθι ---
  function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function addToCart(id) {
    const cart = getCart();
    const item = products.find(p => p.id === id);
    cart.push(item);
    saveCart(cart);
    alert("Το προϊόν προστέθηκε στο καλάθι!");
  }
  
  // --- Προβολή καλαθιού στη σελίδα cart.html ---
  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    const cart = getCart();
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Το καλάθι σας είναι άδειο.</p>";
    } else {
      let total = 0;
      cartContainer.innerHTML = cart.map(p => {
        total += p.price;
        return `<div class="card"><h3>${p.name}</h3><p>${p.price} €</p></div>`;
      }).join("");
      document.getElementById("cart-total").textContent = `Σύνολο: ${total} €`;
    }
  }

  



