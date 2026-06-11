import { filteredProducts } from "../../data/product-store.js";

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
                    <button class="btn btn-dark mt-auto">View Product</button>
                </div>
            </div>
        </div>
    `;
}

export function renderProducts() {
    const productsContainer = document.querySelector('#products-container');

    productsContainer.innerHTML = filteredProducts
        .map(product => createProductCard(product))
        .join('');
}