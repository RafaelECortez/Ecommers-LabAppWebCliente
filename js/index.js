import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { populateCategoryOptions } from "./modules/products/category-filter-render.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Estructura
    loadBasicHTML();

    // Filtro
    populateCategoryOptions();
});