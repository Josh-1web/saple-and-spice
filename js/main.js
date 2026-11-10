```javascript
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem("sapleSpiceCart") || "[]");
    if (!Array.isArray(cart)) cart = [];
  } catch {
    cart = [];
  }

  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.reduce(
      (sum, item) => sum + (Number(item.quantity) || 0),
      0
    );
  });
});

// Restaurant WhatsApp number (Nigeria)
const RESTAURANT_WHATSAPP = "2349162454303";

function sendWhatsApp(message) {
  const whatsappLink =
    "https://wa.me/" +
    RESTAURANT_WHATSAPP +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappLink, "_blank");
}
```