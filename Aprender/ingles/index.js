//Funcion para Mostrar o ocultar el Nav

function mostrarMenu() {
    let botonMenu = document.querySelector('#boton-menu');
    let nav = document.querySelector('nav');
    nav.style.left = nav.style.left === '-450px' ? '0' : '-450px';
    localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
}

///Creacion de Variables

var videos = document.querySelector('#video');

/////////////// Videos


function video1() {
  fetch('videos/video1.txt')
    .then(data => data.text())
    .then(data => {
      videos.innerHTML = `${data}`
    })
}

function video2() {
    fetch('videos/video2.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video3() {
    fetch('videos/video3.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video4() {
    fetch('videos/video4.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video5() {
    fetch('videos/video5.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video6() {
    fetch('videos/video6.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video7() {
    fetch('videos/video7.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video8() {
    fetch('videos/video8.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video9() {
    fetch('videos/video9.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  function video10() {
    fetch('videos/video10.txt')
      .then(data => data.text())
      .then(data => {
        videos.innerHTML = `${data}`
      })
  }

  ///// ////////


