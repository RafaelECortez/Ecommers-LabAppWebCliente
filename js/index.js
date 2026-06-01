//fusionamos trabajo
import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
import { loadProducts } from "./modules/products/product-service.js";
import { renderProducts } from "./modules/products/product-render.js";
// Importamos componente modal
import { mostrarModalDetalle } from "./modules/ui.components/producto.modal.js";

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Creación básica de componente en HTML
    loadBasicHTML();

    // 2. Carga de producto
    await loadProducts();
    renderProducts();

    /*
    const productoPrueba = { 
        nombre: "Zapatillas Deportivas Neon", 
        precio: 45000,
        descripcion: "Zapatillas súper livianas ideales para correr o para el uso diario.",
        categoria: "Calzado Deportivo",
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" 
    };
    mostrarModalDetalle(productoPrueba);
    */
});

