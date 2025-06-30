function validarFormulario(event) {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre === "" || apellido === "" || email === "") {
    alert("Por favor, complete todos los campos.");
    event.preventDefault();
  }
}

function cargarFormulario() {
  var formulario = document.getElementById("formulario");
  if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
  }
}





