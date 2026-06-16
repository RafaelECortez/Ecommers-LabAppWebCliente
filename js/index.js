import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";

import { renderSearchBar } from "./modules/products/search-bar-render.js";
import { initializeSearchBar } from "./modules/products/search-bar.js";


document.addEventListener("DOMContentLoaded", async () => {
    loadBasicHTML();

    await loadProducts();
    renderSearchBar();
    renderProducts();

    populateCategoryOptions();
    initializeSearchBar();

});
