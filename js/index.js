import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";
import { inicializarLimpiarCarrito } from "./modules/cart/cart.clear.js";
import { renderSearchBar } from "./modules/products/search-bar-render.js";
import { initializeSearchBar } from "./modules/products/search-bar.js";

// == inicio bloque agregado Aixa ==
// función para importar la inicialización del carrito y recuperar el estado guardado en localstorage.
import { initializeCartState, initializeFinishPurchaseButton } from "./modules/cart/cart-service.js";
// == fin bloque agregado Aixa ==

document.addEventListener("DOMContentLoaded", async () => {
    loadBasicHTML();
    inicializarLimpiarCarrito();

// == inicio bloque agregado Aixa ==
     // sincroniza el badge y la vista del carrito con los datos persistidos al cargar la página.
     initializeCartState();
     initializeFinishPurchaseButton();
// == fin bloque agregado Aixa ==

    await loadProducts();
    renderSearchBar();
    renderProducts();

    populateCategoryOptions();
    initializeSearchBar();

});
