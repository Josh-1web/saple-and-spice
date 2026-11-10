SAPLE & SPICE — COMPLETE WEBSITE PROJECT
=========================================

PROJECT STRUCTURE
- index.html                 Home page
- about.html                 About page
- menu.html                  Menu and shopping cart
- reservation.html           Table reservation request
- contact.html               Contact form
- css/style.css              Website styling
- js/main.js                 Shared navigation, year and WhatsApp helper
- js/menu.js                 Menu, cart and order actions
- js/reservation.js          Reservation form
- js/contact.js              Contact form

HOW TO OPEN THE WEBSITE
OPTION A — VS CODE + LIVE SERVER (recommended)
1. Extract this ZIP file to a folder on your computer.
2. Open VS Code.
3. Select File > Open Folder and choose the extracted
   Saple_and_Spice_Complete folder.
4. In the Explorer panel, click index.html.
5. Right-click inside index.html and select "Open with Live Server".
   Alternatively press Ctrl+Shift+P, type "Live Server: Open with Live Server",
   and press Enter.
6. Your browser should open an address similar to:
   http://127.0.0.1:5500/index.html

OPTION B — OPEN DIRECTLY
1. Extract the ZIP file.
2. Open the extracted folder.
3. Double-click index.html to open it in your browser.

IMPORTANT CONFIGURATION BEFORE ACCEPTING REAL ORDERS
1. WhatsApp ordering and reservations:
   Open js/main.js and find:
   const RESTAURANT_WHATSAPP = "2340000000000";
   Replace the placeholder with the restaurant's real WhatsApp number,
   including Nigeria's country code 234, without +, spaces or dashes.
   Example format: 2348012345678.
   Until this is configured, WhatsApp order and reservation actions
   will show a reminder instead of sending a message.

2. Contact form:
   Open js/contact.js and set the restaurantEmail variable to the
   restaurant's real email address. This enables the visitor's email
   application to open with the message prepared.

3. Menu and prices:
   Open js/menu.js and edit the menuItems array. The displayed meals
   and prices are sample content and should be checked against the
   restaurant's actual menu.

WHAT IS INCLUDED
- Five linked website pages.
- Responsive layout for desktop and mobile screens.
- Category filters for menu items.
- Shopping cart with quantity controls and automatic total.
- Cart saved in the browser using Local Storage.
- WhatsApp order and reservation message preparation.
- Contact form with email configuration placeholder.

PROJECT LIMITATIONS
This is a front-end website built with HTML, CSS and JavaScript.
It does not currently include a backend, database, customer accounts,
online payment processing, or automatic reservation confirmation.
Orders and reservations require the restaurant to respond and confirm.
