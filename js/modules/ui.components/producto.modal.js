// ==========================================
// COMPONENTE: MODAL DE DETALLE DE PRODUCTO
// ==========================================

// == inicio bloque agregado de Aixa ==

// Agregado de Aixa para importar lógica de localstorage

import { addProductToCart } from "../cart/cart-service.js";

// Agregado de Aixa para mostrar el feedback al usuario 
import { mostrarToast } from "./user.messager.js";

// == fin agregado de Aixa ==

export function mostrarModalDetalle(producto) {

    // 1. Buscamos el contenedor, y si no existe, lo creamos dinámicamente
    let modalContainer = document.getElementById('modal-detalle-container');
    
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'modal-detalle-container';
        document.body.appendChild(modalContainer);
    }

    // 2. Armamos el diseño de la ventanita (con textos en inglés y adaptado a la API)
    const modalHTML = `
        <div class="modal fade" id="productoModal" tabindex="-1" aria-labelledby="productoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productoModalLabel">${producto.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center mb-3 mb-md-0">
                                <img src="${producto.image}" class="img-fluid rounded shadow-sm" alt="${producto.title}" style="max-height: 300px; object-fit: contain;">
                            </div>
                            <div class="col-md-6 d-flex flex-column justify-content-center">
                                <span class="badge bg-secondary mb-2 align-self-start text-uppercase">${producto.category}</span>
                                <h3 class="text-primary fw-bold">$${producto.price}</h3>
                                <p class="mt-2 text-muted">${producto.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <!-- Agregado por Aixa: id utilizado para capturar el click y conectar el botón con la lógica del carrito. -->
                        <button type="button" class="btn btn-primary" id="btn-add-to-cart">
                            <i class="bi bi-cart-plus"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 3. Inyectamos ese diseño adentro del HTML
    modalContainer.innerHTML = modalHTML;

    // 4. Usamos Bootstrap nativo para levantar
    const modalElement = document.getElementById('productoModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();


    // Agregado por Aixa: integración del botón "Add to cart" con carrito, localStorage y Toasts.
    const btnAddToCart = document.getElementById("btn-add-to-cart");

    btnAddToCart.addEventListener("click", () => {
        addProductToCart(producto);

        mostrarToast(
          "Product Added",
            "The product was successfully added to your cart.",
            "success"
        );

        modalInstance.hide();
    });


  // 5. Limpiamos el navegador cuando el modal se termina de ocultar
    modalElement.addEventListener('hidden.bs.modal', () => {
        modalContainer.innerHTML = ''; // Vacía el HTML para no acumular nodos repetidos
        modalInstance.dispose(); // Destruye la instancia en la memoria de Bootstrap
    });
}