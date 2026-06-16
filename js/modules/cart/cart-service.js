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

    saveCart();
    updateCartBadge();

    return cart;
}

export function clearCart() {
    cart.length = 0;
    localStorage.removeItem(CART_STORAGE_KEY);
    updateCartBadge();

    return cart;
}

export function finishPurchase() {
    clearCart();
}

export function getCartTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

export function isCartEmpty() {
    return cart.length === 0;
}

export function updateCartBadge() {
    const cartBadge = document.getElementById("cart-badge");

    if (!cartBadge) {
        return;
    }

    const totalQuantity = getCartTotalQuantity();

    cartBadge.textContent = totalQuantity;
    cartBadge.classList.toggle("d-none", totalQuantity === 0);
}