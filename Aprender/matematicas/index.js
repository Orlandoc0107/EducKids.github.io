//Funcion para Mostrar o ocultar el Nav

//function mostrarMenu() {
//  let botonMenu = document.querySelector('#boton-menu');
//  let nav = document.querySelector('nav');
//  nav.style.left = nav.style.left === '-450px' ? '0' : '-450px';
//  localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
//}



///Creacion de Variables

var video = document.querySelector('#video');
var detalle = document.querySelector('#detalle');

//// funciones
function uno() {
    fetch('videos/uno.txt')
        .then(data => data.text())
        .then(data => {
            video.innerHTML = `${data}`
        })
    
        fetch('videos/unoD.txt')
        .then(data => data.text())
        .then(data => {
            detalle.innerHTML = `${data}`
        })
}

///
function dos() {
  fetch('videos/dos.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/dosD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function tres() {
  fetch('videos/tres.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/tresD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function cuatro() {
  fetch('videos/cuatro.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/cuatroD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function cinco() {
  fetch('videos/cinco.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/cincoD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function seis() {
  fetch('videos/seis.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/seisD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function siete() {
  fetch('videos/siete.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/sieteD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function ocho() {
  fetch('videos/ocho.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/ochoD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function nueve() {
  fetch('videos/nueve.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/nueveD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///

function diez() {
  fetch('videos/diez.txt')
      .then(data => data.text())
      .then(data => {
          video.innerHTML = `${data}`
      })
  
      fetch('videos/diezD.txt')
      .then(data => data.text())
      .then(data => {
          detalle.innerHTML = `${data}`
      })
}

///


function Suma(num1, num2) {
    var resultado = num1 + num2;
  
    var pregunta = document.getElementById("pregunta");
    pregunta.textContent = "¿Cuál es la suma de " + num1 + " y " + num2 + "?";
  
    var respuestaUsuario = parseInt(document.getElementById("respuesta").value);
  
    if (respuestaUsuario === resultado) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es " + resultado + ".");
    }
  }
  
  function Resta(num1, num2) {
    var resultado = num1 + num2;
  
    var pregunta = document.getElementById("pregunta");
    pregunta.textContent = "¿Cuanto es " + num1 + " Menos " + num2 + "?";
  
    var respuestaUsuario = parseInt(document.getElementById("respuesta").value);
  
    if (respuestaUsuario === resultado) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es " + resultado + ".");
    }
  }

  /// Preguntas infinitas 


  // Generar dos números aleatorios entre 1 y 10
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

// Calcular la suma de los dos números
var resultado = num1 + num2;

// Mostrar la pregunta en el DOM
var pregunta = document.getElementById("pregunta");
pregunta.textContent = "¿Cuál es la suma de " + num1 + " y " + num2 + "?";

// Verificar la respuesta del usuario
function verificarRespuesta() {
  var respuestaUsuario = parseInt(document.getElementById("respuesta").value);

  if (respuestaUsuario === resultado) {
    alert("¡Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta. La respuesta correcta es " + resultado + ".");
  }
}