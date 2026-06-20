import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";

import { renderSearchBar } from "./modules/products/search-bar-render.js";
import { initializeSearchBar } from "./modules/products/search-bar.js";

import { initializeCartState, initializeFinishPurchaseButton } from "./modules/cart/cart-service.js";
import { inicializarLimpiarCarrito } from "./modules/cart/cart-clear.js"; 

document.addEventListener("DOMContentLoaded", async () => {
    loadBasicHTML();

    initializeCartState();
    initializeFinishPurchaseButton();
    inicializarLimpiarCarrito(); 

    await loadProducts();
    renderSearchBar();
    renderProducts();

    populateCategoryOptions();
    initializeSearchBar();
});
