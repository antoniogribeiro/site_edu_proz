let NomeInput = document.getElementById('nome');
let NomeLabel = document.querySelector('label [for="nome"]');
NomeInput.addEventListener('focus', e => {
  NomeLabel.classList.add('required-popup');
});
