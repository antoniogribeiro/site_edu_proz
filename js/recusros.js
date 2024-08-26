const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const spansErro = document.querySelectorAll(".spanErro");

  emailInput.classList.remove("invalid");
  spansErro.forEach((span) => span.classList.remove("erro"));

  const email = emailInput.value.trim();

  let formValido = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    spansErro[0].classList.add("erro");
    formValido = false;
  }

  if (formValido) {
    console.log("Email:", email);
    alert("Cadastro efetuado.");
  }
});
