export function mostrarToast(mensajes){
    // Buscamos el contenedor que va a estar en el HTML
    const toastContainer = document.getElementById('toast-container');

    //Inyectamos el diseño basico de un Toast de Bootstrap
    toastContainer.innerHTML = `
        <div class="toast show align-items-center text-bg-success border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    ${mensaje}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
}