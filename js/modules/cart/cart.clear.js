import { mostrarModalConfirmacion } from '../ui.components/user.messager.js';
import { cart } from './cart-service.js'; 

// ==========================================
// FUNCIÓN: CONFIGURAR BOTÓN DE VACIAR CARRITO
// ==========================================
export function inicializarLimpiarCarrito() {
    
    // 1. Buscamos el botón de vaciar carrito en el DOM
    // Usamos un ID estándar. Si Guille le pone otro, solo cambiamos este string.
    const btnVaciar = document.getElementById('btn-clear-cart');
    
    if (!btnVaciar) return; // Si el botón no está en la pantalla actual, frena la función

    // 2. Escuchamos el clic del usuario
    btnVaciar.addEventListener('click', () => {
        
        // 3. Invocamos componente global de confirmación crítica
        mostrarModalConfirmacion(
            "¿Vaciar Carrito?",
            "¿Estás seguro de que querés eliminar todos los productos del carrito? Esta acción no se puede deshacer.",
            () => {
                // 4. ACCIÓN AL CONFIRMAR: Lógica de vaciado
                
                // A. Vaciamos el array del carrito de Guille sin romper su referencia
                cart.length = 0; 

                // B. Borramos el almacenamiento local
                localStorage.removeItem('cart');

                // C. Forzamos a que la página se recargue para limpiar la vista por completo
                window.location.reload();
            },
            "danger" // Estilo rojo para advertencias críticas
        );
    });
}