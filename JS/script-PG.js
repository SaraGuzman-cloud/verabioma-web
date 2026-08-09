// ============================================================
// VeraBioma - Lógica de Navegación y Vistas Dinámicas
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Elementos principales de vistas
  const secInicio = document.getElementById('inicio');
  const secProductos = document.getElementById('producto');
  const secProductosOferta = document.getElementById('producto-oferta');
  const detallesProducto = document.querySelectorAll('.producto-detalle');

  // Enlaces de navegación superior
  const navLinks = document.querySelectorAll('#nav ul li a');

  // Oculta absolutamente todas las secciones de contenido/catálogos
  function ocultarTodo() {
    if (secInicio) secInicio.style.display = 'none';
    if (secProductos) secProductos.style.display = 'none';
    if (secProductosOferta) secProductosOferta.style.display = 'none';
    detallesProducto.forEach(detalle => {
      detalle.style.display = 'none';
      detalle.classList.remove('activo');
    });
  }

  // Muestra únicamente la sección de Inicio (banners, ofertas inicio, recetas, reseñas)
  function mostrarInicio() {
    ocultarTodo();
    if (secInicio) secInicio.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Muestra únicamente el Catálogo de Productos Normales (los 3 productos)
  function mostrarCatalogoNormal() {
    ocultarTodo();
    if (secProductos) secProductos.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Muestra únicamente el Catálogo de Ofertas del Día
  function mostrarCatalogoOfertas() {
    ocultarTodo();
    if (secProductosOferta) secProductosOferta.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Muestra la vista detallada de un producto específico
  function mostrarDetalleProducto(idProducto, modo) {
    ocultarTodo();
    const sufijo = modo === 'oferta' ? '-oferta' : '';
    const detalleTarget = document.getElementById(`producto-${idProducto}${sufijo}`);

    if (detalleTarget) {
      detalleTarget.style.display = 'flex';
      detalleTarget.classList.add('activo');
      detalleTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ------------------------------------------------------------
  // NAVEGACIÓN DESDE EL MENÚ SUPERIOR (#nav)
  // ------------------------------------------------------------
  navLinks.forEach(link => {
    link.addEventListener('click', (evento) => {
      const href = link.getAttribute('href');

      if (href === '#inicio') {
        evento.preventDefault();
        mostrarInicio();
      } else if (href === '#producto') {
        evento.preventDefault();
        mostrarCatalogoNormal();
      }
    });
  });

// ------------------------------------------------------------
  // INTERACCIONES CON TARJETAS 
  // ------------------------------------------------------------
  
  // 1. Catálogo Normal (#producto) -> Muestra solo el producto normal específico
  document.querySelectorAll('#producto .product-card[data-product]').forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      mostrarDetalleProducto(tarjeta.dataset.product, 'normal');
    });
  });

  // 2. Inicio > "Ofertas del día" (#ofertas) -> Va al detalle de la oferta
  document.querySelectorAll('#ofertas .oferta[data-product]').forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      mostrarDetalleProducto(tarjeta.dataset.product, 'oferta');
    });
  });

  // 3. Catálogo Ofertas (#producto-oferta) -> Muestra solo la vista de ese producto en oferta
  document.querySelectorAll('#producto-oferta .product-card[data-product]').forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      mostrarDetalleProducto(tarjeta.dataset.product, 'oferta');
    });
  });

  // ------------------------------------------------------------
  // CONTROLES DE CANTIDAD (+ / -)
  // ------------------------------------------------------------
  document.querySelectorAll('.selector-cantidad').forEach((selector) => {
    const input = selector.querySelector('input[type="number"]');
    const btnMenos = selector.querySelector('.btn-menos');
    const btnMas = selector.querySelector('.btn-mas');
    if (!input || !btnMenos || !btnMas) return;

    btnMas.addEventListener('click', () => {
      input.value = parseInt(input.value, 10) + 1;
    });

    btnMenos.addEventListener('click', () => {
      const valorActual = parseInt(input.value, 10);
      if (valorActual > 1) {
        input.value = valorActual - 1;
      }
    });
  });

  // ------------------------------------------------------------
  // FAVORITOS Y CARRITO
  // ------------------------------------------------------------
  document.querySelectorAll('.btn-fav, .btn-favorito').forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      evento.stopPropagation();
      boton.classList.toggle('activo');
      const icono = boton.querySelector('i');
      if (icono) {
        icono.classList.toggle('fa-regular');
        icono.classList.toggle('fa-solid');
      }
    });
  });

  document.querySelectorAll('.btn-add, .btn-carrito').forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      evento.stopPropagation();
      const contenidoOriginal = boton.innerHTML;
      boton.innerHTML = '<i class="fa-solid fa-check"></i> Añadido';
      boton.disabled = true;

      setTimeout(() => {
        boton.innerHTML = contenidoOriginal;
        boton.disabled = false;
      }, 1200);
    });
  });

  // Estado inicial de la página
  mostrarInicio();
});

// ------------------------------------------------------------
// FUNCIONAMIENTO DE CERRAR SESIÓN 
// ------------------------------------------------------------
function cerrarSesion() {
    // NOTA: Borra la credencial de acceso guardada en el navegador
    localStorage.removeItem('sesionIniciada');
    localStorage.removeItem('usuarioActivo');
    
    // NOTA: Reemplaza la página actual para que el usuario no pueda darle "Adelante"
    window.location.replace('index-PP.html');
}