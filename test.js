saludar = function () {
  let nombre = document.getElementById("txtNombre");
  nombre = nombre.value;
  let apellido = document.getElementById("txtApellido");
  apellido = apellido.value;
  //  let saludo = generarSaludo(nombre, apellido);
  console.log(nombre, apellido);
  console.log(saludo);
  mostrarTexto(saludo);
};

mostrarTexto = function (saludo) {
  let saludarPantalla = document.getElementById("saludar");
  saludarPantalla.innerText = saludo;
};
