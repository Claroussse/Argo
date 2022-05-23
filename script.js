// Confirmation message envoyé
const message =
  "Merci pour votre message. Nous allons vous répondre au plus vite!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
