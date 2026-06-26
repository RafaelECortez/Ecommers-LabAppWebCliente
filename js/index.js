import { loadBasicHTML} from "./modules/ui-components/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";
import { inicializarLimpiarCarrito } from "./modules/cart/cart-clear.js";
import { renderSearchBar} from "./modules/ui-components/search-bar-render.js";
import { initializeSearchBar } from "./modules/products/search-bar.js";
import { initializeCartState, initializeFinishPurchaseButton } from "./modules/cart/cart-service.js";


document.addEventListener("DOMContentLoaded", async () => {
    loadBasicHTML();
    inicializarLimpiarCarrito();

     initializeCartState();
     initializeFinishPurchaseButton();


    await loadProducts();
    renderSearchBar();
    renderProducts();

    populateCategoryOptions();
    initializeSearchBar();

});
