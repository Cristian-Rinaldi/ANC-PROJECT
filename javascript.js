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



// APRI MENU HAMBURGER

const hamburger = document.getElementById("hamburger");
const menuHamburger = document.getElementById("menuHamburger");
const closer = document.getElementById("close");
const card = document.querySelector(".card");

hamburger.addEventListener("click", () => {
  menuHamburger.style.left = "0";
  closer.style.display = "block";
  menuHamburger.style.zIndex = "10";
});

// CHIUDI MENU HAMBURGER

closer.addEventListener("click", () => {
  menuHamburger.style.left = "-450px";
  card.addEventListener("mouseover", () => { });
});


// APRE PAGINA IN UNA NUOVA SCHEDA

const contenitoreCard = document.getElementsByClassName("cardContainer");
const cardSanitaria = document.getElementById("primoSoccorso");
const cardAntincendio = document.getElementById("antincendio");
const cardDifesa = document.getElementById("difesaPersonale");

cardSanitaria.addEventListener("click", () => {
  window.open("sez-sanitaria.html", "_blank"); 
});

cardAntincendio.addEventListener("click", () => {
  window.open("sez-antincendio.html", "_blank"); 
});

cardDifesa.addEventListener("click", () => {
  window.open("sez-difesa.html", "_blank"); 
});



function salvaDati(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const dataNascita = document.getElementById("dataNascita").value;
  const email = document.getElementById("email").value;


  localStorage.setItem("nome", nome);
  localStorage.setItem("cognome", cognome);
  localStorage.setItem("dataNascita", dataNascita);
  localStorage.setItem("email", email);

  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  
  name.innerText = nome;
  lastname.innerText = cognome;
}
