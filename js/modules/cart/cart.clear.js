import { mostrarModalConfirmacion } from '../ui.components/user.messager.js';
import { cart } from './cart-service.js'; 

// ==========================================
// FUNCIÓN: CONFIGURAR BOTÓN DE VACIAR CARRITO
// ==========================================
export function inicializarLimpiarCarrito() {
    
    const btnVaciar = document.getElementById('btn-clear-cart');
    
    if (!btnVaciar) return; 

    btnVaciar.addEventListener('click', () => {
        
        mostrarModalConfirmacion(
           "Clear Cart?",
            "Are you sure you want to remove all items from your cart? This action cannot be undone.",
            () => {
                cart.length = 0; 

                localStorage.removeItem('cart');

                window.location.reload();
            },
            "danger" 
        );
    });
}