// Función para realizar una búsqueda aleatoria
function Aleatorio() {
  // Limpiar el contenido actual
  datos.innerHTML = '';
  foto.innerHTML = '';

  let id = Math.floor(Math.random() * 7450);
  let url = 'https://api.disneyapi.dev/character/' + id;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      datos.innerHTML += `
        <div>
          <div><b>Nombre:</b> ${data.data.name}</div><br><br>
          <div><b>Películas:</b> ${data.data.films}</div><br><br>
          <div><b>Cortometrajes:</b> ${data.data.shortFilms}</div><br><br>
          <div>Programas de televisión:</b> ${data.data.tvShows}</div><br><br>
          <div><b>Videojuegos:</b> ${data.data.videoGames}</div><br><br>
          <div>Para Mas Detalles del Personaje Visite <a href="${data.data.sourceUrl}" target="_blank">AQui</a> </div>
        </div>
      `;
      foto.innerHTML += `
        <div>
          <img src="${data.data.imageUrl}" alt="Logo" width="200px">
        </div>
      `;
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

// Obtener los elementos HTML
const datos = document.getElementById('datos');
const foto = document.getElementById('foto');
const botonBuscar = document.querySelector('button');

// Agregar el evento onclick al botón de búsqueda
botonBuscar.addEventListener('click', Aleatorio);
