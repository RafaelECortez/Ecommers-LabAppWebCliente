import { addToCart } from "../cart/cart-service.js";
import { showToast } from "./user.messager.js";

export function showProductModal(product) {
    let modalContainer = document.getElementById('modal-detail-container');
    
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'modal-detail-container';
        document.body.appendChild(modalContainer);
    }

    const modalHTML = `
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel">${product.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center mb-3 mb-md-0">
                                <img src="${product.image}" class="img-fluid rounded shadow-sm" alt="${product.title}" style="max-height: 300px; object-fit: contain;">
                            </div>
                            <div class="col-md-6 d-flex flex-column justify-content-center">
                                <span class="badge bg-secondary mb-2 align-self-start text-uppercase">${product.category}</span>
                                <h3 class="text-primary fw-bold">$${product.price}</h3>
                                <p class="mt-2 text-muted">${product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary btn-add-to-cart">
                            <i class="bi bi-cart-plus"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modalContainer.innerHTML = modalHTML;

    const modalElement = document.getElementById('productModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();

    // 🔹 Connect the button to the cart
    modalElement.querySelector('.btn-add-to-cart').addEventListener('click', () => {
        addToCart(product);
        showToast("Cart", `${product.title} added to cart`);
        modalInstance.hide();
    });

    modalElement.addEventListener('hidden.bs.modal', () => {
        modalContainer.innerHTML = '';
        modalInstance.dispose();
    });
}
