document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );

    // Add the restaurant's real email address here to activate email sending.
    const restaurantEmail = "joshuaidehenosasu@gmail.com";

    if (!restaurantEmail) {
      status.textContent =
        "The form is working, but the restaurant email has not been configured yet. Add the email address in js/contact.js to enable sending.";
      return;
    }

    window.location.href = `mailto:${restaurantEmail}?subject=${subject}&body=${body}`;
  });
});
