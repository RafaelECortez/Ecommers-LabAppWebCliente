// ==========================================
// COMPONENTE: MENSAJES FLOTANTES (TOASTS)
// ==========================================

export function mostrarToast(titulo, mensaje, tipo = 'success') {

    // 1- Buscamos el contenedor que va a estar en el HTML
    let toastContainer = document.getElementById('toast-container');

    // 2- Si el contenedor no existe en el HTML, lo creamos dinámicamente
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed bottom-0 start-50 translate-middle-x p-3';
        document.body.appendChild(toastContainer);
    }

    // 3- Definimos el color de Boostrap segun el tipo de mensaje
    let colorFondo = 'text-bg-success';// Verde por defecto
    if(tipo=== 'danger'){
        colorFondo = 'text-bg-danger'; // Rojo para errores
    }
    else if(tipo === 'warning'){
        colorFondo = 'text-bg-dark';} // Amarillo para advertencias

    // 4-Inyectamos el diseño basico de un Toast de Bootstrap
toastContainer.innerHTML = `
        <div class="toast align-items-center ${colorFondo} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">${titulo}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${mensaje}
            </div>
        </div>
    `;
    // 5- Activamos el Toast con la API de Bootstrap.
    // Esconde solo el toast que acabamos de crear.
    const toastElement = toastContainer.querySelector('.toast');
    const toast = new bootstrap.Toast(toastElement, {
        delay: 3000 // milisegundos que queda visible (3 segundos)
    });
    toast.show();
}

// ==========================================
// COMPONENTE: MODAL DE CONFIRMACIÓN CRÍTICA
// ==========================================

export function mostrarModalConfirmacion(titulo, mensaje, onConfirm, tipo = 'danger') {
    // 1. Buscamos si ya existe el contenedor del modal en la pantalla
    let modalElement = document.getElementById('modal-confirmacion');

    // 2. Si no existe, lo creamos dinámicamente
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'modal-confirmacion';
        modalElement.className = 'modal fade';
        modalElement.setAttribute('tabindex', '-1');
        document.body.appendChild(modalElement);
    }

    // 3. Definimos el color del botón principal según el tipo (danger = rojo, success = verde)
    const botonColor = tipo === 'danger' ? 'btn-danger' : 'btn-success';

    // 4. Inyectamos Bootstrap
    modalElement.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${titulo}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${mensaje}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn ${botonColor}" id="modal-btn-confirmar">Confirm</button>
                </div>
            </div>
        </div>
    `;

    // 5. Levantamos el modal usando el objeto nativo de Bootstrap
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();

    // 6. Escuchamos el clic en el botón Confirmar
    const btnConfirmar = modalElement.querySelector('#modal-btn-confirmar');
    btnConfirmar.onclick = () => {
        onConfirm(); // Ejecutamos la acción que nos pidieron
        bootstrapModal.hide(); // Cerramos el modal automáticamente
    };
}