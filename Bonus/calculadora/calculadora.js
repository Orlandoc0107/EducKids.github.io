function suma(event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementsByName("num1")[0].value);
    let num2 = parseInt(document.getElementsByName("num2")[0].value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Ingrese números válidos";
    } else {
      let respuesta = parseInt(num1) + parseInt(num2);
      document.getElementById("resultado").innerHTML = respuesta;
    }
  }
  
  
  function resta(event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementsByName("num1")[0].value);
    let num2 = parseInt(document.getElementsByName("num2")[0].value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Ingrese números válidos";
    } else {
      let respuesta = parseInt(num1) - parseInt(num2);
      document.getElementById("resultado").innerHTML = respuesta;
    }
  }
  
  function multiplicacion(event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementsByName("num1")[0].value);
    let num2 = parseInt(document.getElementsByName("num2")[0].value);
  
    
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Ingrese números válidos";
    } else {
      let respuesta = parseInt(num1) * parseInt(num2);
      document.getElementById("resultado").innerHTML = respuesta;
    }
  }
  
  function division(event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementsByName("num1")[0].value);
    let num2 = parseInt(document.getElementsByName("num2")[0].value);
  
    
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").innerHTML = "Ingrese números válidos";
    } else if (num1 == 0 || num2 == 0) {
      document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
    } else {
      let respuesta = parseInt(num1) / parseInt(num2);
      document.getElementById("resultado").innerHTML = respuesta.toFixed(2);
    }
  }  