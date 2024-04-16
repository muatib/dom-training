/* ------------------------------------ */
/* --- Exercice 1 --- */
//  const btnex1 = document.querySelector('.btnex1');
// const text = ducument.querySelector ('.text-on');

// btnex1.addEventListener ('click', function (event) {

// }
// )

const text = document
  .querySelector("#btn1")
  .addEventListener("click", function (event) {
    document.querySelector("#text1").classList.toggle("text-of");
  });

/* ------------------------------------ */
/* --- Exercice 2 --- */

document.addEventListener("DOMContentLoaded", function () {
  const scrollValueElement = document.getElementById("ex2-scroll-value");

  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    scrollValueElement.textContent = scrollValue;
  });
});

/*---------------------------- */
/* --- Exercice 3 --- */
const button = document.querySelector("#btn2");
const animalList = document.querySelector("#ex3-animals");

button.addEventListener("click", function () {
  const firstAnimal = animalList.firstElementChild;
  if (firstAnimal) {
   animalList.appendChild(firstAnimal);
  }
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
let btn = document.getElementById("btn3");
let colorIndex = 0;
let colors = ["blue", "red", "green"];

btn.addEventListener("click", function () {

  btn.className = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  // btn.style.backgroundColor = colors[colorIndex];
  // colorIndex = (colorIndex + 1) % colors.length;
});
/* ------------------------------------ */
/* --- Exercice 5 --- */
let buttons = document.querySelectorAll("#btn4");

buttons.forEach(function(button) {
  button.addEventListener('mouseover', function() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    button.style.setProperty('--random-color', randomColor);
    button.classList.add('random-color');
  });
});
/* ------------------------------------ */
/* --- Exercice 6 --- */

/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse",
];


let availableTasks = [...taskList];

const btn5 = document.querySelector("#ex7-button");
    const list = document.querySelector("#ex7-list");
    
btn5.addEventListener('click', function(){
  if (availableTasks.length > 0){
    const taskIndex = Math.floor(Math.random() * availableTasks.length);
    const task = availableTasks[taskIndex];

    
    const listItem = document.createElement ('li');
    listItem.textContent = task;
    listItem.classList.add ('task-list-task');
    listItem.addEventListener ('click', function(){
      list.removeChild(listItem);
      availableTasks.push(task);
    });
    availableTasks.splice(taskIndex, 1);
    list.appendChild(listItem);
  }
});

/* ------------------------------------ */
/* --- Exercice 8 --- */

const buttons8 = document.querySelectorAll('.button');


buttons8.forEach((button) => {

  button.addEventListener('click', () => {
  
    const progressId = button.getAttribute(this.dataset.progressId);
    const progressBar = document.getElementById(progressId);

    let currentValue = parseInt(progressBar.style.width, 10) || 0;

   
    const newValue = Math.min(currentValue + 5, 100);

    
    progressBar.style.width = `${newValue}%`;
  });
});