document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("reservation-date");
  const form = document.getElementById("reservation-form");
  const status = document.getElementById("reservation-status");

  // Use the visitor's local calendar date rather than UTC.
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  if (dateInput) dateInput.min = localToday;
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.date < localToday) {
      status.textContent = "Please choose today or a future date.";
      return;
    }

    const message = `Hello Saple & Spice, I would like to request a table reservation.

Name: ${data.name}
Phone: ${data.phone}
Date: ${data.date}
Time: ${data.time}
Guests: ${data.guests}
Special request: ${data.request || "None"}

Please confirm my reservation.`;

    status.textContent = "Opening WhatsApp to send your reservation request...";
    sendWhatsApp(message);
  });
});
