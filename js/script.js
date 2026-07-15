const contenedor = document.getElementById("contenedor-cards");

function crearCards(array) {

  array.forEach(item => {

    contenedor.innerHTML += `
            <div class="col tarjeta-item" data-categoria="${item.tipo}">
                <div class="card h-100 shadow-sm">

                    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${item.nombre}
                        </h5>

                        <p class="card-text flex-grow-1">
                            ${item.descripcion}
                        </p>

                        <a href="${item.link}" target="_blank" class="btn btn-primary mt-auto">
                            Ver
                        </a>

                    </div>

                </div>
            </div>
        `;
  });

}

crearCards(peliculas);
crearCards(series);
crearCards(libros);
crearCards(mangas);

document.querySelectorAll('.filtro-opcion').forEach(opcion => {
  opcion.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que la página recargue al hacer clic en el enlace

    const categoriaSeleccionada = this.getAttribute('data-categoria');
    const tarjetas = document.querySelectorAll('.tarjeta-item');

    // Actualizar el texto del botón principal para mostrar qué se seleccionó
    document.getElementById('filtroCards').innerText = this.innerText;

    tarjetas.forEach(tarjeta => {
      const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

      // Si el usuario elige "todas" o la tarjeta coincide con la categoría, se muestra
      if (categoriaSeleccionada === 'todas' || categoriaTarjeta === categoriaSeleccionada) {
        tarjeta.style.display = 'block'; // Muestra la columna que contiene la card
      } else {
        tarjeta.style.display = 'none';  // Oculta la columna por completo
      }
    });
  });
});