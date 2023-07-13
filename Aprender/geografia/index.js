//Funcion para Mostrar o ocultar el Nav

function mostrarMenu() {
    let botonMenu = document.querySelector('#boton-menu');
    let nav = document.querySelector('nav');
    nav.style.left = nav.style.left === '-450px' ? '0' : '-450px';
    localStorage.setItem('menuOpen', nav.style.left === '0' ? 'true' : 'false');
}


/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.866, lng: 151.196 },
    zoom: 15,
  });
  const request = {
    placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
    fields: ["name", "formatted_address", "place_id", "geometry"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);

  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h2");

        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        const placeIdElement = document.createElement("p");

        placeIdElement.textContent = place.place_id;
        content.appendChild(placeIdElement);

        const placeAddressElement = document.createElement("p");

        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  });
}

window.initMap = initMap;


// new Vue({
//   el: '#app',
//   data() {
//     return {
//       map: null,
//     };
//   },
//   mounted() {
//     this.initMap();
//   },
//   methods: {
//     initMap() {
//       this.map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 37.7749, lng: -122.4194 }, // Coordenadas para centrar el mapa
//         zoom: 12, // Nivel de zoom inicial
//       });
//     },
//   },
// });


/////////////

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


