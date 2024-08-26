const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nomeInput = document.querySelector("#nome");
  const emailInput = document.querySelector("#email");
  const mensagemInput = document.querySelector("#mensagem");
  const termosCheckbox = document.querySelector("#terms");
  const spansErro = document.querySelectorAll(".spanErro");

  nomeInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  mensagemInput.classList.remove("invalid");
  spansErro.forEach((span) => span.classList.remove("erro"));

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const mensagem = mensagemInput.value.trim();
  const aceitouOsTermos = termosCheckbox.checked ? "sim" : "não";

  let formValido = true;

  if (nome === "") {
    nomeInput.classList.add("invalid");
    spansErro[0].classList.add("erro");
    formValido = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailInput.classList.add("invalid");
    spansErro[1].classList.add("erro");
    formValido = false;
  }

  if (mensagem === "") {
    mensagemInput.classList.add("invalid");
    spansErro[2].classList.add("erro");
    formValido = false;
  }

  if (aceitouOsTermos === "não") {
    alert("Aceite os termos para continuar.");
    formValido = false;
  }

  if (formValido) {
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);
    console.log("Aceitou os termos:", aceitouOsTermos);
    alert("Sua mensagem foi enviada!");
  }
});
