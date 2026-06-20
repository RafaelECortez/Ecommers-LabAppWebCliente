export function mostrarToast(titulo, mensaje, tipo = "success", duration) {
    let toastContainer = document.getElementById("toast-container");

    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toast-container";
        toastContainer.className = "toast-container position-fixed bottom-0 end-0 p-3";
        document.body.appendChild(toastContainer);
    }

    let colorFondo = "text-bg-success"; 
    if (tipo === "danger") {
        colorFondo = "text-bg-danger"; 
    } else if (tipo === "warning") {
        colorFondo = "text-bg-warning"; 
    }


    if (!duration) {
        if (tipo === "success") duration = 2000; 
        else if (tipo === "warning") duration = 2000; 
        else if (tipo === "danger") duration = 5000; 
        else duration = 2000; 
    }

    const toast = document.createElement("div");
    toast.className = `toast show align-items-center ${colorFondo} border-0 mb-2`;
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");

    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${titulo}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${mensaje}
        </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}

// ==========================================
// COMPONENTE: MODAL DE CONFIRMACIÓN CRÍTICA
// ==========================================

export function mostrarModalConfirmacion(titulo, mensaje, onConfirm, tipo = "danger") {
    let modalElement = document.getElementById("modal-confirmacion");

    if (!modalElement) {
        modalElement = document.createElement("div");
        modalElement.id = "modal-confirmacion";
        modalElement.className = "modal fade";
        modalElement.setAttribute("tabindex", "-1");
        document.body.appendChild(modalElement);
    }

    const botonColor = tipo === "danger" ? "btn btn-danger" : "btn btn-success";

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

    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();

    const btnConfirmar = modalElement.querySelector("#modal-btn-confirmar");
    btnConfirmar.onclick = () => {
        onConfirm(); 
        bootstrapModal.hide(); 
    };
}
