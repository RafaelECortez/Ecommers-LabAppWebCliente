import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
// 1. Importamos la función mostrarModalDetalle
import { mostrarModalDetalle } from "./modules/ui.components/producto.modal.js";

document.addEventListener("DOMContentLoaded", async () => {
  // creation of basic components in HTML
  loadBasicHTML();

  // 2. Ejecutamos la función de prueba con un producto falso
  const productoPrueba = { nombre: "Zapatillas de prueba" };
  mostrarModalDetalle(productoPrueba);
});

