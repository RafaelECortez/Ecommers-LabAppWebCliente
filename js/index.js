import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";
import { renderProducts } from "./modules/products/product-render.js";

document.addEventListener("DOMContentLoaded", async () => {
    loadBasicHTML();
    populateCategoryOptions();

    renderProducts();
});