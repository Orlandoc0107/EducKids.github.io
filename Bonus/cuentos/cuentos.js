///Creacion de Variables

var lectura = document.querySelector('#lectura');

/////////////// Videos


function VideoUno() {
  fetch('libreria/VideoUno.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoDos() {
  fetch('libreria/VideoDos.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoTres() {
  fetch('libreria/VideoTres.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoCuatro() {
  fetch('libreria/VideoCuatro.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoCinco() {
  fetch('libreria/VideoCinco.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoSeis() {
  fetch('libreria/VideoSeis.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoSiete() {
  fetch('libreria/VideoSiete.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoOcho() {
  fetch('libreria/VideoOcho.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoNueve() {
  fetch('libreria/VideoNueve.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}

function VideoDiez() {
  fetch('libreria/VideoDiez.txt')
    .then(data => data.text())
    .then(data => {
      lectura.innerHTML = `${data}`
    })
}