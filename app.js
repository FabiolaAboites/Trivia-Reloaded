//Obteniendo nombre

const nameInsert = document.getElementById('name-insert');
const buttonOk = document.getElementById('button-ok');
const content = document.getElementById('content-prompt');
const firstSection = document.getElementById('first-section');
const sectionAppears = document.getElementById('section-appears1');
const sectionAppears2 = document.getElementById('section-appears2');
const sectionAppears3 = document.getElementById('section-appears3');

const getName1 = () => {
  firstSection.classList.add('disappears');
  sectionAppears.classList.remove('disappears');
  content.innerHTML = "¡Hola " + inputName.value + "!";
}
const disappears1A = () => {
  firstSection.classList.add('disappears1a');
  sectionAppears.classList.remove('disappears1a');
  content.innerHTML = "¡Hola " + inputName.value + "!" + "<br> ¿Quieres jugar?" + "<br><button id='button-name'> JS </button>" + "<button id='button-name'> CSS </button>";
}


buttonOk.addEventListener('click', getName)

const question1 = document.getElementById('question1');
let count = 0;

question1.addEventListener('change',() => {
  const answer = question1.value;
  if(answer === "b) Damos estilo y diseño a las páginas."){
    count++
    alert('¡CORRECTO!');
    }
  else(answer === "a) Ayuda a interactuar con el usuario."){
     count--
     alert('INCORRECTO')
    }
  else(answer === "c) Permite inicializar una variable."){
     count--
     alert('INCORRECTO')
    }
  console.log(count)
})
