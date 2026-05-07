const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const messageInput = document.querySelector("#message").value;

  if (!nameInput || !messageInput) {
    alert = "Please fill in all fields";
    return;
  }
});
