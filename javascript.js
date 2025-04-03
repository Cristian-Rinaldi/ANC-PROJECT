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
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundAttachment = "fixed";
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
  closer.style.display = "block";
  menuHamburger.style.zIndex = "10";
});

// Chiud Menu

closer.addEventListener("click", () => {
  menuHamburger.style.left = "-450px";
  card.addEventListener("mouseover", () => {});
});




const contenitoreCard = document.getElementsByClassName("cardContainer");
const cardSanitaria = document.getElementById("primoSoccorso");
const cardAntincendio = document.getElementById("antincendio");
const cardDifesa = document.getElementById("difesaPersonale");

cardSanitaria.addEventListener("click", () => {
    window.open("sez-sanitaria.html", "_blank"); // Apre la pagina in una nuova finestra/scheda
});

cardAntincendio.addEventListener("click", () => {
    window.open("sez-antincendio.html", "_blank"); // Apre la pagina in una nuova finestra/scheda
});

cardDifesa.addEventListener("click", () => {
    window.open("sez-difesa.html", "_blank"); // Apre la pagina in una nuova finestra/scheda
});

