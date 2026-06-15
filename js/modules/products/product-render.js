import { showProductModal } from "../ui.components/product.modal.js";
import { filteredProductsSearch } from "../../data/product-store.js";

function createProductCard(product) {
    return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
                <img 
                    src="${product.image}"
                    class="card-img-top p-3"
                    alt="${product.title}"
                    style="height: 250px; object-fit: contain;"
                >
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text text-muted small">${product.category}</p>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-dark mt-auto btn-ver-detalle" data-id="${product.id}">View Product</button>
                </div>
            </div>
        </div>
    `;
}

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

    // Asignamos el evento click a cada botón
    const botones = productsContainer.querySelectorAll('.btn-ver-detalle');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('data-id');
            const product = filteredProductsSearch.find(p => p.id == id);
            showProductModal(product); 
        });
    });
}
