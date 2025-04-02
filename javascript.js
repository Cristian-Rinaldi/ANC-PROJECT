
// IMMAGINI SCORREVOLI

const body = document.querySelector("body");
let arrayImgScorrevoli = [
  "assets/pompiere.jpg",
  "assets/difesa-personale.jpg",
  "assets/caduceo.jpg",
  "assets/incendi boschivi.jpg",
  "assets/wrestling.jpg",
  "assets/blsd for life.png",
  "assets/pompiere scale.jpg",
  "assets/blsd-pediatrico.jpeg",
  "assets/bambini wrestling.jpg",
  "assets/elisoccorso.jpeg",
  "assets/fuoco2.jpg",
];

let index = 0;
const idInterval = setInterval(() => {
  body.style.backgroundImage = `url(${arrayImgScorrevoli[index]})`;
  body.style.backgroundSize = 'cover'; 
  body.style.backgroundPosition = 'center';
  body.style.backgroundAttachment = 'fixed';
  index = (index + 1) % arrayImgScorrevoli.length; 
}, 3000); 


// MENU HAMBURGER

//Apri Menu

const hamburger = document.getElementById("hamburger");
const menuHamburger = document.getElementById("menuHamburger");
const closer = document.getElementById("close");
const card = document.querySelector(".card");

hamburger.addEventListener("click", () => {
    menuHamburger.style.left = "0"; 
    closer.style.display = "block"
      menuHamburger.style.zIndex = "10";
});

// Chiud Menu

closer.addEventListener("click", () => {
  menuHamburger.style.left = "-450px"; 
  card.addEventListener("mouseover", () => {
  })
})
