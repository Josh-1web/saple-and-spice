document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("sapleSpiceCart") || "[]");
    if (!Array.isArray(cart)) cart = [];
  } catch {
    cart = [];
  }
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  });
});
// Replace this with the restaurant's WhatsApp number, including country code, without + or spaces.
// Example format for Nigeria: 2348012345678
const RESTAURANT_WHATSAPP = "09162454303";
function sendWhatsApp(message) {
  if (RESTAURANT_WHATSAPP === "2340000000000") {
    alert("Please configure the restaurant's WhatsApp number in js/main.js before using this feature.");
    return;
  }
  window.open("https://wa.me/" + RESTAURANT_WHATSAPP + "?text=" + encodeURIComponent(message), "_blank");
}
