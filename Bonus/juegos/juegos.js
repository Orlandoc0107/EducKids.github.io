
var contenido1 = document.querySelector('#contenido');
var contenido2 = document.querySelector('#contenido2');

function uno() {
    fetch('scratch/uno.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/unoD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}

///////////////

function dos() {
    fetch('scratch/dos.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/dosD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}
////////
function tres() {
    fetch('scratch/tres.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/tresD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}
////////
////////
function cuatro() {
    fetch('scratch/cuatro.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/cuatroD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}

////////
function cinco() {
    fetch('scratch/cinco.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/cincoD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}
////////
function seis() {
    fetch('scratch/seis.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/seisD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}

///////

function siete() {
    fetch('scratch/siete.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/sieteD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}

///////

function ocho() {
    fetch('scratch/ocho.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/ochoD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}

///////

function nueve() {
    fetch('scratch/nueve.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/nueveD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}
///////

function diez() {
    fetch('scratch/diez.txt')
        .then(data => data.text())
        .then(data => {
            contenido1.innerHTML = `${data}`
        })
    
        fetch('scratch/diezD.txt')
        .then(data => data.text())
        .then(data => {
            contenido2.innerHTML = `${data}`
        })
}
