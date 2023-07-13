/* */

function calcularTotal() {
  let total = 0;
  const precioComboBase = 30000.00;
  const precioComboSuper = 35000.00;
  const precioComboFull = 40000.00;
  const precioHoraExtra = 2500.00;
  const precioGlobologia = 3500.00;
  const precioMaquillajeArtistico = 4500.00;
  const precioShoeDeTiteres = 4000.00;
  const precioCabinaDeFotos = 5500.00;
  const precioShowDeMagia = 5000.00;
  const precioDescartablesParaNino = 750.00;
  const precioDescartablesParaAdultos = 750.00;
  const precioTorta = 5500.00;
  const precioSorpresitas = 500.00;
  const precioCoordinador = 3000.00;
  const precioNinoAdicional = 450.00;
  const precioAdultoAdicional = 450.00;

  const cantidadComboBase = 1;
  const cantidadComboSuper = 1;
  const cantidadComboFull = 1;
  const cantidadHoraExtra = parseInt(document.getElementById("cantidadHoraExtra").value);
  const cantidadGlobologia = parseInt(document.getElementById("cantidadGlobologia").value);
  const cantidadMaquillajeArtistico = parseInt(document.getElementById("cantidadMaquillajeArtistico").value);
  const cantidadShoeDeTiteres= parseInt(document.getElementById("cantidadShowDeTiteres").value);
  const cantidadCabinaDeFotos = parseInt(document.getElementById("cantidadCabinaDeFotos").value);
  const cantidadShowDeMagia = parseInt(document.getElementById("cantidadShowDeMagia").value);
  const cantidadDescartablesParaNino = parseInt(document.getElementById("cantidadDescartablesParaNino").value);
  const cantidadDescartablesParaAdultos = parseInt(document.getElementById("cantidadDescartablesParaAdultos").value);
  const cantidadTorta = parseInt(document.getElementById("cantidadTorta").value);
  const cantidadSorpresitas = parseInt(document.getElementById("cantidadSorpresitas").value);
  const cantidadCoordinador = parseInt(document.getElementById("cantidadCoordinador").value);
  const cantidadNinoAdicional = parseInt(document.getElementById("cantidadNinoAdicional").value);
  const cantidadAdultoAdicional = parseInt(document.getElementById("cantidadAdultoAdicional").value);

  const ComboBaseSeleccionado = document.getElementById("ComboBase").checked;
  const ComboSuperSeleccionado = document.getElementById("ComboSuper").checked;
  const ComboFullSeleccionado = document.getElementById("ComboFull").checked;
  const HoraExtraSeleccionado = document.getElementById("HoraExtra").checked;
  const GlobologiaSeleccionado = document.getElementById("Globologia").checked;
  const MaquillajeArtisticoSeleccionado = document.getElementById("MaquillajeArtistico").checked;
  const ShowDeTiteresSeleccionado = document.getElementById("ShowDeTiteres").checked;
  const CabinaDeFotosSeleccionado = document.getElementById("CabinaDeFotos").checked;
  const ShowDeMagiaSeleccionado = document.getElementById("ShowDeMagia").checked;
  const DescartablesParaNinoSeleccionado = document.getElementById("DescartablesParaNino").checked;
  const DescartablesParaAdultosSeleccionado = document.getElementById("DescartablesParaAdultos").checked;
  const TortaSeleccionado = document.getElementById("Torta").checked;
  const SorpresitasSeleccionado = document.getElementById("Sorpresitas").checked;
  const CoordinadorSeleccionado = document.getElementById("Coordinador").checked;
  const NinoAdicionalSeleccionado = document.getElementById("NinoAdicional").checked;
  const AdultoAdicionalSeleccionado = document.getElementById("AdultoAdicional").checked;

  if (ComboBaseSeleccionado) {
    total += precioComboBase * cantidadComboBase ;
  }

  if (ComboSuperSeleccionado) {
    total += precioComboSuper * cantidadComboSuper ;
  }

  if (ComboFullSeleccionado) {
    total += precioComboFull * cantidadComboFull ;
  }

  if (HoraExtraSeleccionado) {
    total += precioHoraExtra * cantidadHoraExtra;
  }

  if (GlobologiaSeleccionado) {
    total += precioGlobologia * cantidadGlobologia;
  }

  if (MaquillajeArtisticoSeleccionado) {
    total += precioMaquillajeArtistico * cantidadMaquillajeArtistico;
  }

  if (ShowDeTiteresSeleccionado) {
    total += precioShoeDeTiteres * cantidadShoeDeTiteres;
  }

  if (CabinaDeFotosSeleccionado) {
    total += precioCabinaDeFotos * cantidadCabinaDeFotos;
  }

  if (ShowDeMagiaSeleccionado) {
    total += precioShowDeMagia * cantidadShowDeMagia;
  }

  if (DescartablesParaNinoSeleccionado) {
    total += precioDescartablesParaNino * cantidadDescartablesParaNino;
  }

  if (DescartablesParaAdultosSeleccionado) {
    total += precioDescartablesParaAdultos * cantidadDescartablesParaAdultos;
  }

  if (TortaSeleccionado) {
    total += precioTorta * cantidadTorta;
  }

  if (SorpresitasSeleccionado) {
    total += precioSorpresitas * cantidadSorpresitas;
  }

  if (CoordinadorSeleccionado) {
    total += precioCoordinador * cantidadCoordinador;
  }

  if (NinoAdicionalSeleccionado) {
    total += precioNinoAdicional * cantidadNinoAdicional;
  }

  if (AdultoAdicionalSeleccionado) {
    total += precioAdultoAdicional * cantidadAdultoAdicional;
  }

  document.getElementById("total").innerHTML = "Total: $ " + total.toFixed(2);
}

var botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", borrarFormulario);

function borrarFormulario() {
    document.getElementById("miFormulario").reset();


}

function recibo() {

  let total = 0;
  const precioComboBase = 30000.00;
  const precioComboSuper = 35000.00;
  const precioComboFull = 40000.00;
  const precioHoraExtra = 2500.00;
  const precioGlobologia = 3500.00;
  const precioMaquillajeArtistico = 4500.00;
  const precioShoeDeTiteres = 4000.00;
  const precioCabinaDeFotos = 5500.00;
  const precioShowDeMagia = 5000.00;
  const precioDescartablesParaNino = 750.00;
  const precioDescartablesParaAdultos = 750.00;
  const precioTorta = 5500.00;
  const precioSorpresitas = 500.00;
  const precioCoordinador = 3000.00;
  const precioNinoAdicional = 450.00;
  const precioAdultoAdicional = 450.00;

  const cantidadComboBase = 1;
  const cantidadComboSuper = 1;
  const cantidadComboFull = 1;
  const cantidadHoraExtra = parseInt(document.getElementById("cantidadHoraExtra").value);
  const cantidadGlobologia = parseInt(document.getElementById("cantidadGlobologia").value);
  const cantidadMaquillajeArtistico = parseInt(document.getElementById("cantidadMaquillajeArtistico").value);
  const cantidadShoeDeTiteres= parseInt(document.getElementById("cantidadShowDeTiteres").value);
  const cantidadCabinaDeFotos = parseInt(document.getElementById("cantidadCabinaDeFotos").value);
  const cantidadShowDeMagia = parseInt(document.getElementById("cantidadShowDeMagia").value);
  const cantidadDescartablesParaNino = parseInt(document.getElementById("cantidadDescartablesParaNino").value);
  const cantidadDescartablesParaAdultos = parseInt(document.getElementById("cantidadDescartablesParaAdultos").value);
  const cantidadTorta = parseInt(document.getElementById("cantidadTorta").value);
  const cantidadSorpresitas = parseInt(document.getElementById("cantidadSorpresitas").value);
  const cantidadCoordinador = parseInt(document.getElementById("cantidadCoordinador").value);
  const cantidadNinoAdicional = parseInt(document.getElementById("cantidadNinoAdicional").value);
  const cantidadAdultoAdicional = parseInt(document.getElementById("cantidadAdultoAdicional").value);

  const ComboBaseSeleccionado = document.getElementById("ComboBase").checked;
  const ComboSuperSeleccionado = document.getElementById("ComboSuper").checked;
  const ComboFullSeleccionado = document.getElementById("ComboFull").checked;
  const HoraExtraSeleccionado = document.getElementById("HoraExtra").checked;
  const GlobologiaSeleccionado = document.getElementById("Globologia").checked;
  const MaquillajeArtisticoSeleccionado = document.getElementById("MaquillajeArtistico").checked;
  const ShowDeTiteresSeleccionado = document.getElementById("ShowDeTiteres").checked;
  const CabinaDeFotosSeleccionado = document.getElementById("CabinaDeFotos").checked;
  const ShowDeMagiaSeleccionado = document.getElementById("ShowDeMagia").checked;
  const DescartablesParaNinoSeleccionado = document.getElementById("DescartablesParaNino").checked;
  const DescartablesParaAdultosSeleccionado = document.getElementById("DescartablesParaAdultos").checked;
  const TortaSeleccionado = document.getElementById("Torta").checked;
  const SorpresitasSeleccionado = document.getElementById("Sorpresitas").checked;
  const CoordinadorSeleccionado = document.getElementById("Coordinador").checked;
  const NinoAdicionalSeleccionado = document.getElementById("NinoAdicional").checked;
  const AdultoAdicionalSeleccionado = document.getElementById("AdultoAdicional").checked;

  if (ComboBaseSeleccionado) {
    total += precioComboBase * cantidadComboBase ;
    var Base = parseInt(0); 
    Base = precioComboBase * cantidadComboBase ;
  }

  if (ComboSuperSeleccionado) {
    total += precioComboSuper * cantidadComboSuper ;
    var Super = parseInt(0);
    Super = precioComboSuper * cantidadComboSuper ;
  }

  if (ComboFullSeleccionado) {
    total += precioComboFull * cantidadComboFull ;
    var Full = parseInt (0);
    Full = precioComboFull * cantidadComboFull ;
  }

  if (HoraExtraSeleccionado) {
    total += precioHoraExtra * cantidadHoraExtra;
    var Hora = parseInt (0);
    Hora = precioHoraExtra * cantidadHoraExtra;
  }

  if (GlobologiaSeleccionado) {
    total += precioGlobologia * cantidadGlobologia;
    var Globos = parseInt (0);
    Globos = precioGlobologia * cantidadGlobologia;
  }

  if (MaquillajeArtisticoSeleccionado) {
    total += precioMaquillajeArtistico * cantidadMaquillajeArtistico;
    var Maquillaje = parseInt (0);
    Maquillaje = precioMaquillajeArtistico * cantidadMaquillajeArtistico;
  }

  if (ShowDeTiteresSeleccionado) {
    total += precioShoeDeTiteres * cantidadShoeDeTiteres;
    var Titeres = parseInt (0);
    Titeres = precioShoeDeTiteres * cantidadShoeDeTiteres;
  }

  if (CabinaDeFotosSeleccionado) {
    total += precioCabinaDeFotos * cantidadCabinaDeFotos;
    var Cabina = parseInt (0);
    Cabina = precioCabinaDeFotos * cantidadCabinaDeFotos;
  }

  if (ShowDeMagiaSeleccionado) {
    total += precioShowDeMagia * cantidadShowDeMagia;
    var Magia = parseInt (0);
    Magia = precioShowDeMagia * cantidadShowDeMagia;
  }

  if (DescartablesParaNinoSeleccionado) {
    total += precioDescartablesParaNino * cantidadDescartablesParaNino;
    var DescartablesParaN = parseInt (0);
    DescartablesParaN = precioDescartablesParaNino * cantidadDescartablesParaNino;
  }

  if (DescartablesParaAdultosSeleccionado) {
    total += precioDescartablesParaAdultos * cantidadDescartablesParaAdultos;
    var DescartablesParaA = parseInt (0);
    var DescartablesParaA = precioDescartablesParaAdultos * cantidadDescartablesParaAdultos;
  }

  if (TortaSeleccionado) {
    total += precioTorta * cantidadTorta;
    var TortaTotal = parseInt (0);
    TortaTotal = precioTorta * cantidadTorta;
  }

  if (SorpresitasSeleccionado) {
    total += precioSorpresitas * cantidadSorpresitas;
    var Sorpresas = parseInt (0);
    Sorpresas = precioSorpresitas * cantidadSorpresitas;
  }

  if (CoordinadorSeleccionado) {
    total += precioCoordinador * cantidadCoordinador;
    var Coordi = parseInt (0);
    Coordi = precioCoordinador * cantidadCoordinador;
  }

  if (NinoAdicionalSeleccionado) {
    total += precioNinoAdicional * cantidadNinoAdicional;
    var Nadicional = parseInt (0);
    Nadicional = precioNinoAdicional * cantidadNinoAdicional;
  }

  if (AdultoAdicionalSeleccionado) {
    total += precioAdultoAdicional * cantidadAdultoAdicional;
    var Aadicional = parseInt (0);
    Aadicional = precioAdultoAdicional * cantidadAdultoAdicional;
  }

// Validacion de Datos del Cliente 

  // Obtener los valores de los campos del formulario
  let nombre = document.getElementsByName("nombre")[0].value;
  let apellido = document.getElementsByName("apellido")[0].value;
  let dni = document.getElementsByName("dni")[0].value;
  let email = document.getElementsByName("email")[0].value;

  // Validar los datos ingresados
  if (nombre.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres");
    return false;
  }
  if (apellido.length < 2) {
    alert("El apellido debe tener al menos 2 caracteres");
    return false;
  }

  if (dni.length < 6) {
    alert("El DNI debe tener al menos 6 caracteres");
    return false;
  }
  if (
    !/@/.test(email) ||
    email.split("@")[0].length === 0 ||
    email.split("@")[1].length === 0
  ) {
    alert("Por favor ingrese un correo electrónico válido");
    return false;
  }

  /*
  Enviando todos los Valores a la Pagina de Recibo
  */
  let queryString = ` 
  &nombre=${nombre} \
  &apellido=${apellido} \
  &dni=${dni} \ 
  &email=${email} \
  &total=${total} \
  &Base=${Base} \
  &Super=${Super}
  &Full=${Full} \
  &Hora=${Hora} \
  &cantidadHoraExtra=${cantidadHoraExtra} \
  &Globos=${Globos} \
  &cantidadGlobologia=${cantidadGlobologia} \
  &Maquillaje=${Maquillaje} \
  &cantidadMaquillajeArtistico=${cantidadMaquillajeArtistico} \
  &Titeres=${Titeres} \
  &cantidadShoeDeTiteres=${cantidadShoeDeTiteres} \
  &Cabina=${Cabina} \
  &cantidadCabinaDeFotos=${cantidadCabinaDeFotos} \
  &Magia=${Magia} \
  &cantidadShowDeMagia=${cantidadShowDeMagia} \
  &DescartablesParaN=${DescartablesParaN} \
  &cantidadDescartablesParaNino=${cantidadDescartablesParaNino} \
  &DescartablesParaA=${DescartablesParaA} \
  &cantidadDescartablesParaAdultos=${cantidadDescartablesParaAdultos} \
  &TortaTotal=${TortaTotal} \
  &cantidadTorta=${cantidadTorta} \
  &Sorpresas=${Sorpresas} \
  &cantidadSorpresitas=${cantidadSorpresitas} \
  &Coordi=${Coordi} \
  &cantidadCoordinador=${cantidadCoordinador} \
  &Nadicional=${Nadicional} \
  &cantidadNinoAdicional=${cantidadNinoAdicional} \
  &Aadicional=${Aadicional} \
  &cantidadAdultoAdicional=${cantidadAdultoAdicional}\
  `;

  // Enviar la cadena de consulta a la página de destino
  let url = `recibo.html?${queryString}`;
  window.location.href = url;

  // Detener el envío del formulario
  return false;

}