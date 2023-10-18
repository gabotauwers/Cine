if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
}

const form = document.getElementById("miFormulario"); 

// Agregar un evento de submit al formulario
form.addEventListener("submit", (event) => {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const peliculas = document.getElementById("pelicula").value;
  const peliculaPoster = document.getElementById("posterPelicula").src;
  const boletos = document.getElementById("boletos").value;
  const precio = 50;
  // Crear una nueva fila en la tabla
  const fila = tabla.insertRow();

  // Crear celdas para cada valor del formulario
  const celdaNombre = fila.insertCell();
  const celdaCorreo = fila.insertCell();
  const celdaPeliculas = fila.insertCell();
  const celdaPosterPelicula = fila.insertCell();
  const celdaBoletos = fila.insertCell();
  const celdaTotal = fila.insertCell();
  const celdaEliminarActulizar = fila.insertCell();
  // Asignar los valores del formulario a las celdas
  celdaNombre.innerHTML = nombre;
  celdaCorreo.innerHTML = correo;
  celdaPeliculas.innerHTML = peliculas;
  celdaPosterPelicula.innerHTML = `<img src="${peliculaPoster}" alt="Poster de la película" id="poster">`;
  celdaBoletos.innerHTML = boletos;
  const total = boletos * precio;
  celdaTotal.innerHTML = `$` + total;
  celdaEliminarActulizar.innerHTML = `<button type="button" class="btn btn-primary editar">Editar</button>
  <button type="button" class="btn btn-danger eliminar" >Eliminar</button>
`;
  // Limpiar el formulario
  form.reset();
  posterPelicula.src = "img/Seleccione.jpg";
});

const tabla = document.getElementById("tabla"); 

// Escucha los clics en los botones de "Editar" y "Eliminar"
tabla.addEventListener("click", function (event) {
  if (event.target.classList.contains("editar")) {
    
       // Obtén la fila a editar
       const fila = event.target.closest("tr");
       if (fila) {
         // Extrae los datos de la fila seleccionada para editar
         const nombre = fila.cells[0].textContent;
         const correo = fila.cells[1].textContent;
         const peliculas = fila.cells[2].textContent;
         const boletos = fila.cells[4].textContent;
  
         // Rellena el formulario con los datos de la fila
         document.getElementById("nombre").value = nombre;
         document.getElementById("correo").value = correo;
         document.getElementById("posterPelicula").src = `img/`+peliculas+`.jpg`;
         document.getElementById("pelicula").value = peliculas;
         document.getElementById("boletos").value = boletos;

         // Elimina la fila seleccionada
         fila.remove();
       }

  } else if (event.target.classList.contains("eliminar")) {
    // Código para eliminar la fila
    const fila = event.target.closest("tr");
    if(confirm("¿Estás seguro de eliminar el registro?")){
      fila.remove();
    }
  }
});


const nombrePeliculas = document.getElementById("pelicula");
const posterPelicula = document.getElementById("posterPelicula");

nombrePeliculas.addEventListener(
  "change",
  function () {
    switch (this.value) {
      case "scarface":
        posterPelicula.src = "img/scarface.jpg";
        break;
      case "hostal":
        posterPelicula.src = "img/hostal.jpg";
        break;
      case "infierno":
        posterPelicula.src = "img/infierno.jpg";
        break;
      case "scream":
        posterPelicula.src = "img/scream.jpg";
        break;
      case "ciempies":
        posterPelicula.src = "img/ciempies.jpg";
        break;
      default:
        posterPelicula.src = "img/Seleccione.jpg";
        break;
    }
  },
  false
);
