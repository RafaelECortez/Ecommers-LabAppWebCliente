import { loadBasicHTML } from "./modules/basic-html/basic-html.js";
// 1. Importamos la función mostrarModalDetalle
import { mostrarModalDetalle } from "./modules/ui.components/producto.modal.js";

document.addEventListener("DOMContentLoaded", async () => {
  // creation of basic components in HTML
  loadBasicHTML();

  // 2. Ejecutamos la función de prueba con un producto falso
  const productoPrueba = { nombre: "Zapatillas Deportivas Neon", 
    precio: 45000,
    descripcion: "Zapatillas súper livianas ideales para correr o para el uso diario. Cuentan con suela antideslizante y tejido transpirable.",
    categoria: "Calzado Deportivo",
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" };
  mostrarModalDetalle(productoPrueba);
});

