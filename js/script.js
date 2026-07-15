  document.querySelectorAll('.filtro-opcion').forEach(opcion => {
    opcion.addEventListener('click', function(e) {
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