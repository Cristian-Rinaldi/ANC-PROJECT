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
