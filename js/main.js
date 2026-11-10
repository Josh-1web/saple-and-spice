document.addEventListener("DOMContentLoaded", () => {
// Mobile navigation menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
toggle.addEventListener("click", () => {
nav.classList.toggle("open");
});
}

// Automatically update copyright year
document.querySelectorAll("#year").forEach(el => {
el.textContent = new Date().getFullYear();
});

// Shopping cart
let cart = [];

try {
cart = JSON.parse(
localStorage.getItem("sapleSpiceCart") || "[]"
);

if (!Array.isArray(cart)) cart = [];
} catch {
cart = [];
}

// Update cart count
document.querySelectorAll("#cart-count").forEach(el => {
el.textContent = cart.reduce(
(sum, item) => sum + (Number(item.quantity) || 0),
0
);
});
});

// Restaurant WhatsApp number (Nigeria)
const RESTAURANT_WHATSAPP = "2349162454303";

// Send orders and messages through WhatsApp
function sendWhatsApp(message) {
const phoneNumber = RESTAURANT_WHATSAPP.replace(/\D/g, "");

const whatsappLink =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(whatsappLink, "_blank");
}
