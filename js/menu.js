const menuItems = [
 {id:1,name:"Jollof Rice",category:"Main",price:3500,description:"Classic party-style jollof rice.",icon:"🍚"},
 {id:2,name:"Fried Rice",category:"Main",price:4000,description:"Colourful fried rice with vegetables.",icon:"🥘"},
 {id:3,name:"Grilled Chicken",category:"Main",price:5000,description:"Well-seasoned grilled chicken.",icon:"🍗"},
 {id:4,name:"Pepper Soup",category:"Main",price:4500,description:"A warming, spicy soup favourite.",icon:"🍲"},
 {id:5,name:"Fried Plantain",category:"Sides",price:1500,description:"Sweet golden fried plantain.",icon:"🍌"},
 {id:6,name:"Coleslaw",category:"Sides",price:1200,description:"Fresh creamy vegetable side.",icon:"🥗"},
 {id:7,name:"Fresh Juice",category:"Drinks",price:1800,description:"Refreshing fruit juice.",icon:"🧃"},
 {id:8,name:"Soft Drink",category:"Drinks",price:800,description:"Chilled bottled soft drink.",icon:"🥤"},
 {id:9,name:"Puff Puff",category:"Sides",price:1000,description:"Soft, golden bite-sized snack.",icon:"🍩"}
];
const money = n => "₦" + Number(n).toLocaleString("en-NG");
let cart = JSON.parse(localStorage.getItem("sapleSpiceCart") || "[]");
const grid = document.getElementById("menu-grid");
function saveCart(){localStorage.setItem("sapleSpiceCart",JSON.stringify(cart));renderCart();document.querySelectorAll("#cart-count").forEach(el=>el.textContent=cart.reduce((s,x)=>s+x.quantity,0));}
function renderMenu(category="All"){
 grid.innerHTML="";
 menuItems.filter(item=>category==="All"||item.category===category).forEach(item=>{
  const card=document.createElement("article");card.className="food-card";
  card.innerHTML=`<div class="food-image">${item.icon}</div><div class="food-info"><h3>${item.name}</h3><p>${item.description}</p><div class="food-bottom"><span class="price">${money(item.price)}</span><button class="add-btn" data-id="${item.id}">+ Add to cart</button></div></div>`;
  grid.appendChild(card);
 });
}
function renderCart(){
 const box=document.getElementById("cart-items"), total=document.getElementById("cart-total");
 if(!box)return;
 if(!cart.length){box.innerHTML='<p class="muted">Your cart is empty. Add a meal to get started.</p>';total.textContent=money(0);return;}
 box.innerHTML=cart.map(item=>`<div class="cart-row"><div><b>${item.name}</b><small>${money(item.price)} each</small></div><div class="quantity"><button data-action="minus" data-id="${item.id}" aria-label="Decrease quantity">−</button><b>${item.quantity}</b><button data-action="plus" data-id="${item.id}" aria-label="Increase quantity">+</button><button data-action="remove" data-id="${item.id}" aria-label="Remove item">✕</button></div></div>`).join("");
 total.textContent=money(cart.reduce((s,x)=>s+x.price*x.quantity,0));
}
if (grid) {
 renderMenu();
 document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderMenu(btn.dataset.filter);}));
 grid.addEventListener("click",e=>{const btn=e.target.closest("[data-id]");if(!btn)return;const item=menuItems.find(x=>x.id===Number(btn.dataset.id));const existing=cart.find(x=>x.id===item.id);if(existing)existing.quantity++;else cart.push({...item,quantity:1});saveCart();});
 renderCart();
 const cartItemsElement = document.getElementById("cart-items");
 if (cartItemsElement) cartItemsElement.addEventListener("click",e=>{const btn=e.target.closest("[data-action]");if(!btn)return;const id=Number(btn.dataset.id),item=cart.find(x=>x.id===id);if(!item)return;if(btn.dataset.action==="plus")item.quantity++;if(btn.dataset.action==="minus")item.quantity--;if(btn.dataset.action==="remove"||item.quantity<=0)cart=cart.filter(x=>x.id!==id);saveCart();});
 const clearCartButton = document.getElementById("clear-cart");
 if (clearCartButton) clearCartButton.addEventListener("click",()=>{cart=[];saveCart();});
 const sendOrderButton = document.getElementById("send-order");
 if (sendOrderButton) sendOrderButton.addEventListener("click",()=>{if(!cart.length){alert("Your cart is empty. Please add a meal first.");return;}const lines=cart.map(x=>`${x.name} x ${x.quantity} = ${money(x.price*x.quantity)}`).join("\\n");const total=cart.reduce((s,x)=>s+x.price*x.quantity,0);sendWhatsApp(`Hello Saple & Spice, I would like to place this order:\\n\\n${lines}\\n\\nTotal: ${money(total)}\\n\\nPlease confirm availability and delivery/pickup details.`);});
}
