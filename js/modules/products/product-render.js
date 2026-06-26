import { mostrarModalDetalle } from "../ui-components/product-modal.js";
import { filteredProductsSearch } from "../../data/product-store.js";
import { createProductCard } from "../ui-components/product-cart.js";

export function renderProducts() {
    const productsContainer = document.querySelector('#products-container');

    if (filteredProductsSearch.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    No products found.
                </div>
            </div>
        `;

        return;
    }

    productsContainer.innerHTML = filteredProductsSearch
        .map(product => createProductCard(product))
        .join('');

    // Buscamos los botones y les asignamos el evento click
    const botones = productsContainer.querySelectorAll('.btn-ver-detalle');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('data-id');
            const producto = filteredProductsSearch.find(p => p.id == id);
            mostrarModalDetalle(producto);
        });
    });
}