//--- I M M A G I N I    S C O R R E V O L I --------------
const imgScorrevoli = document.getElementById("img-scorrevoli");
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
  imgScorrevoli.src = arrayImgScorrevoli[index];
  index = (index + 1) % arrayImgScorrevoli.length;
}, 3000);

// -----C L I C K   S U L L E  3 F O T O  P R I N C I P A L I  ------ 
