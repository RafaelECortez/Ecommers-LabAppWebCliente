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
                        <p>¡Acá vamos a poner la foto, el precio y la descripción de las zapatillas en el próximo pasito!</p>
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