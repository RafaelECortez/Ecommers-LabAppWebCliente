//fusionamos trabajo
import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
import { mostrarModalDetalle } from "./modules/ui.components/producto.modal.js";
import { mostrarToast, mostrarModalConfirmacion } from "./modules/ui.components/user.messager.js";

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Creación básica de componente en HTML
    loadBasicHTML();

    // 2. Carga de producto
    await loadProducts();
    renderProducts();


});

