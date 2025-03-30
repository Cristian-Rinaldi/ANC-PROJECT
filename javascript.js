const imgScorrevoli = document.getElementById("img-scorrevoli");
let arrayImgScorrevoli = [
  "assets/pompiere.jpg",
  "assets/difesa-personale.jpg",
  "assets/esculapio.jpg",
  "assets/elisoccorso.jpeg",
  "assets/fuoco2.jpg",
];
let index = 0;
const idInterval = setInterval(() => {
  imgScorrevoli.src = arrayImgScorrevoli[index];
  index = (index + 1) % arrayImgScorrevoli.length;
}, 3000);
