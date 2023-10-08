function cargarDatos() {
  let nombre = document.getElementsByName("nombre")[0].value;
  let apellido = document.getElementsByName("apellido")[0].value;
  let edad = document.getElementsByName("edad")[0].value;
  let dni = document.getElementsByName("dni")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let texto = document.getElementById("texto").value;

  if (nombre.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres");
    return false;
  }
  if (apellido.length < 2) {
    alert("El apellido debe tener al menos 2 caracteres");
    return false;
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    alert("Por favor ingrese una edad válida (mayor de 18 y menor de 120)");
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
  if (texto.length < 10) {
    alert("El texto debe tener al menos 10 caracteres");
    return false;
  }

    let queryString = `nombre=${nombre}&apellido=${apellido}&edad=${edad}&dni=${dni}&email=${email}&texto=${texto}`;

    let url = `validacion.html?${queryString}`;
    window.location.href = url;
  
    return false;
}
