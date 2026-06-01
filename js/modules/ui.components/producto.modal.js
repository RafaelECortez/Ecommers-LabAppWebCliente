/*Prueba de conexión del módulo producto.modal.js con index.js
export const mostrarModalDetalle = (producto) => {
    // Acá vamos a armar el HTML del modal más adelante
    console.log("¡Función mostrarModalDetalle conectada! Producto recibido:", producto.nombre);
};*/
export const mostrarModalDetalle = (producto) => {
    // 1. Seleccionamos el contenedor vacío que pusiste en tu index.html (línea 28)
    const modalContainer = document.getElementById('modal-detalle-container');

    // 2. Armamos el diseño de la ventanita (el HTML de Bootstrap)
    const modalHTML = `
        <div class="modal fade" id="productoModal" tabindex="-1" aria-labelledby="productoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productoModalLabel">${producto.nombre}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 text-center mb-3 mb-md-0">
                                <img src="${producto.imagen}" class="img-fluid rounded shadow-sm" alt="${producto.nombre}">
                            </div>
                            <div class="col-md-6 d-flex flex-column justify-content-center">
                                <h3 class="text-primary fw-bold">$${producto.precio}</h3>
                                <p class="mt-2">${producto.descripcion}</p>
                                <p><strong>Categoría:</strong> <span class="badge bg-secondary">${producto.categoria}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 3. Inyectamos ese diseño adentro de tu contenedor del HTML
    modalContainer.innerHTML = modalHTML;

    // 4. Usamos la magia de Bootstrap para decirle "¡Aparecé!"
    const modalElement = document.getElementById('productoModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
};