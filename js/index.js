import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";

document.addEventListener("DOMContentLoaded", async () => {
    // creation of basic components in HTML
    loadBasicHTML();

    // product loading and rendering
    await loadProducts();
    renderProducts();

    populateCategoryOptions();
});
