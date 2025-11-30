const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || msg === "") {
    message.style.color = "red";
    message.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  // Si tout est OK
  message.style.color = "green";
  message.textContent = "Message envoyé avec succès !";

  // Effacer les champs
  form.reset();
});
