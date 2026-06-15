export function showToast(title, message, type = 'success') {

    let toastContainer = document.getElementById('toast-container');

    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }

    let backgroundColor = 'text-bg-success'; 
    if (type === 'danger') {
        backgroundColor = 'text-bg-danger'; 
    } else if (type === 'warning') {
        backgroundColor = 'text-bg-dark'; 
    }


    toastContainer.innerHTML = `
        <div class="toast show align-items-center ${backgroundColor} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">${title}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
}


export function showConfirmationModal(title, message, onConfirm, type = 'danger') {

    let modalElement = document.getElementById('confirmation-modal');


    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'confirmation-modal';
        modalElement.className = 'modal fade';
        modalElement.setAttribute('tabindex', '-1');
        document.body.appendChild(modalElement);
    }


    const buttonColor = type === 'danger' ? 'btn-danger' : 'btn-success';


    modalElement.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn ${buttonColor}" id="modal-btn-confirm">Confirm</button>
                </div>
            </div>
        </div>
    `;


    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();


    const btnConfirm = modalElement.querySelector('#modal-btn-confirm');
    btnConfirm.onclick = () => {
        onConfirm(); 
        bootstrapModal.hide(); 
    };
}
