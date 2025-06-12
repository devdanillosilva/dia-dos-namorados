// script.js
const fotos = [
  'images/foto1.jpg',
  'images/foto2.jpg',
  'images/foto3.jpg',
  'images/foto4.jpg',
  'images/foto5.jpg',
  'images/foto6.jpg',
  'images/foto7.jpg',
  'images/foto8.jpg',
  'images/foto9.jpg',
  'images/foto10.jpg',
  'images/foto11.jpg',
  'images/foto12.jpg',
  'images/foto13.jpg',
  'images/foto14.jpg',
  'images/foto15.jpg',
  'images/foto16.jpg',
  'images/foto17.jpg',
  'images/foto18.jpg'
];

let indice = 0;
const img = document.getElementById('foto');

setInterval(() => {
  indice = (indice + 1) % fotos.length;
  img.src = fotos[indice];
}, 3000); // troca a cada 3 segundos

const musica = document.getElementById('musica');
const btn = document.getElementById('toggleMusic');

btn.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btn.textContent = '🔊 Pausar Música';
  } else {
    musica.pause();
    btn.textContent = '🔈 Tocar Música';
  }
});