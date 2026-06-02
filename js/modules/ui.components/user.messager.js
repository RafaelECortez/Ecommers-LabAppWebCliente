export function mostrarToast(titulo, mensaje, tipo = 'success') {

    // 1- Buscamos el contenedor que va a estar en el HTML
    let toastContainer = document.getElementById('toast-container');

    // 2- Si el contenedor no existe en el HTML, lo creamos dinámicamente
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
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
        <div class="toast show align-items-center ${colorFondo} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">${titulo}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${mensaje}
            </div>
        </div>
    `;
}