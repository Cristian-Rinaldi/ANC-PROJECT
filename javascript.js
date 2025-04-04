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
  window.location.href = "sez-sanitaria.html"; 
});

cardAntincendio.addEventListener("click", () => {
  window.location.href = "sez-antincendio.html"; 
});

cardDifesa.addEventListener("click", () => {
  window.location.href = "sez-difesa.html"; 
});

// SALVA DATI UTENTE IN LOCALE


const datiUtenteDiv = document.getElementById("datiUtente");
const formDiv = document.querySelector("form");
const btnEsci = document.getElementById("btnEsci");


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
  mostraDatiUtente(nome, cognome, dataNascita, email);
  const utente2 = document.getElementById("utente2");
  utente2.innerText = `${nome} ${cognome}`;
  formDiv.reset();
}
function mostraDatiUtente(nome, cognome, dataNascita, email) {
  // Nascondi il form di registrazione
  formDiv.style.display = "none";
  
  // Mostra la sezione con i dati utente
  datiUtenteDiv.style.display = "block";
  
  // Inserisci i dati nel menu
  const utenteSpan = document.getElementById("utente");
  const infoUtente = document.getElementById("infoUtente");

  utenteSpan.innerText = `${nome} ${cognome}`;
  infoUtente.innerHTML = `
    <strong>Data di Nascita:</strong> ${dataNascita} <br>
    <strong>E-mail:</strong> ${email}
  `;
}

// Gestione del pulsante "Esci"
btnEsci.addEventListener("click", () => {
  // Rimuovi i dati dal localStorage
  localStorage.removeItem("nome");
  localStorage.removeItem("cognome");
  localStorage.removeItem("dataNascita");
  localStorage.removeItem("email");

  // Nascondi i dati utente e mostra il form di registrazione
  datiUtenteDiv.style.display = "none";
  formDiv.style.display = "block";

  // Reimposta la visualizzazione del nome nell'intro
  const utenteSpan = document.getElementById("utente");
  utenteSpan.innerText = "";
  const utente2 = document.getElementById("utente2");
  utente2.innerText = "";  // Rimuove il nome nel messaggio di benvenuto
});


const utente2=document.getElementById("utente2")
  const nomeUtente= localStorage.getItem("nome");
  const cognomeUtente=localStorage.getItem("cognome");
  if(nomeUtente&&cognomeUtente){
    utente2.innerText=`${nomeUtente} ${cognomeUtente}`
  }