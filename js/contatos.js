//-----Atribuindo as variáveis do campo nome----------//
let inputNome = document.getElementById('input_nome');
let labelNome = document.getElementById('label_nome');

//-----Atribuindo as variáveis do campo email----------//
let inputEmail = document.getElementById('input_email');
let labelEmail = document.getElementById('label_email');

// Mostrar popup de campo obrigatório
function mostrarPopUp(input, label) {
  input.addEventListener('focus', e => {
    label.classList.add('campo_obri');
  });

  input.addEventListener('blur', e => {
    label.classList.remove('campo_obri');
  });
}

mostrarPopUp(inputNome, labelNome);
mostrarPopUp(inputEmail, labelEmail);

// Validar valor do input
//adicionamos um evento do tipo input ao input do username e definimos um pararametro para capturar o evento
inputNome.addEventListener('input', e => {
  //printamos o valor digitado no input
  console.log(e.target.value);
  //capturamos o valor do ipt através do value e salvamos na variavel valorIpt
  let valotIpt = e.target.value;
  //condicional que verifica se a quantidade de caracteres digitados no input é maior que 3
  if (valotIpt.length < 3) {
    //sendo menos que 3 nos removemos a classe(css) correct do elemento input do username
    inputNome.classList.remove('correct');
    //adicionamos a classe error ao input do username
    inputNome.classList.add('error');
    //alteramos o texto do elemento <p> atraves da propriedade innertext
    usernameHelper.innerText = 'Seu username deve ter mais que 3 caracters';
    //adicionamos a classe visible ao elemento <p> fazendo a mensagem de ajuda aparecer ao usuario
    usernameHelper.classList.add('visible');
    //se a quantidade de caracters digitados no input for maior que 3 cai no else
  } else {
    //removemos a classe error do elemento usernameInput
    inputNome.classList.remove('error');
    //adicionamos a classe correct ao elemento usernameinput
    inputNome.classList.add('correct');
    //removemos a classe visible do elemento usernameHelper
    usernameHelper.classList.remove('visible');
  }
});
