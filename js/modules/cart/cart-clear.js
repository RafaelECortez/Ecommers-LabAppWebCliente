import { mostrarToast, mostrarModalConfirmacion } from '../ui.components/user-messager.js';
import { clearCart } from './cart-service.js';

export function inicializarLimpiarCarrito() {
    const btnVaciar = document.getElementById('btn-delete-cart');
    if (!btnVaciar) return;

    btnVaciar.addEventListener('click', () => {
        mostrarModalConfirmacion(
            "Delete Cart",
            "Are you sure you want to delete all items?",
            () => {
                clearCart(); 
                mostrarToast("Cart Deleted", "Your cart has been cleared.", "danger");
            },
            "danger"
        );
    });
}
