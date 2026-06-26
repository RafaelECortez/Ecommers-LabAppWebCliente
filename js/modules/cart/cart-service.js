import { mostrarModalConfirmacion, mostrarToast } from "../ui.components/user.messager.js";

import { renderCart } from "./cart-render.js";

const CART_STORAGE_KEY = "cart";

export const cart = getCart();

export function getCart() {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
        return [];
    }

    try {
        return JSON.parse(storedCart);
    } catch (error) {
        console.error("Error al leer el carrito desde localStorage:", error);
        localStorage.removeItem(CART_STORAGE_KEY);
        return [];
    }
}

export function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addProductToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    updateCartState();

    return cart;
}

export function addToCart(product) {
    return addProductToCart(product);
}

export function removeFromCart(productId) {
    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }

    updateCartState();

    return cart;
}

export function changeQuantity(productId, delta) {
    const item = cart.find((item) => item.id === productId);

    if (!item) {
        return cart;
    }

    item.quantity += delta;

    if (item.quantity <= 0) {
        return removeFromCart(productId);
    }

    updateCartState();

    return cart;
}

export function clearCart() {
    cart.length = 0;
    localStorage.removeItem(CART_STORAGE_KEY);
    updateCartBadge();
    updateCartView();
    updateCartActionsState();

    return cart;
}

export function finishPurchase() {
    return clearCart();
}

export function getCartTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

export function getCartTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function isCartEmpty() {
    return cart.length === 0;
}

export function initializeCartState() {
    updateCartBadge();
    updateCartView();
    updateCartActionsState();
}

//
export function initializeFinishPurchaseButton() {
    const finishPurchaseButton = document.getElementById("btn-finish-purchase");

    if (!finishPurchaseButton) {
        return;
    }

    finishPurchaseButton.addEventListener("click", () => {
        if (isCartEmpty()) {
            return;
        }

        mostrarModalConfirmacion(
            "Confirm Purchase",
            "Are you ready to complete your order and proceed to payment?",
            () => {
                finishPurchase();

                mostrarToast(
                    "Purchase completed",
                    "The purchase was completed successfully.",
                    "success"
                );
      
            },
            "success");
    });
}

export function updateCartBadge() {
    const cartBadge = document.getElementById("cart-count");

    if (!cartBadge) {
        return;
    }

    const totalQuantity = getCartTotalQuantity();

    cartBadge.textContent = totalQuantity;
    cartBadge.classList.toggle("d-none", totalQuantity === 0);
}

function updateCartActionsState() {
    const finishPurchaseButton = document.getElementById("btn-finish-purchase");
    const clearCartButton = document.getElementById("btn-clear-cart");

    const shouldDisableActions = isCartEmpty();

    if (finishPurchaseButton) {
        finishPurchaseButton.disabled = shouldDisableActions;
    }

    if (clearCartButton) {
        clearCartButton.disabled = shouldDisableActions;
    }
}

function updateCartState() {
    saveCart();
    updateCartBadge();
    updateCartView();
    updateCartActionsState();
}

function updateCartView() {
    try {
        renderCart();
    } catch (error) {
        console.warn("No se pudo actualizar la vista del carrito:", error);
    }
}