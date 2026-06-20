import {
  cart,
  getCartTotal,
  changeQuantity,
  removeFromCart,
} from "./cart-service.js";

export function renderCart() {
  const cartContainer = document.querySelector("#cart-items");
  const totalContainer = document.querySelector("#cart-total");
  if (!cartContainer || !totalContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-muted text-center mt-5">El carrito está vacío.</p>`;
    totalContainer.textContent = `$0.00`;
    updateBadge(0);
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="card mb-2 shadow-sm">
            <div class="card-body p-2 d-flex align-items-center">
                <img src="${item.image}" style="width: 40px; height: 40px; object-fit: contain;" class="me-2">
                <div class="flex-grow-1">
                    <p class="small mb-0 fw-bold text-truncate" style="max-width: 120px;">${item.title}</p>
                    <span class="small">$${item.price}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-light border btn-qty-minus" data-id="${item.id}">-</button>
                    <span class="small fw-bold">${item.quantity}</span>
                    <button class="btn btn-sm btn-light border btn-qty-plus" data-id="${item.id}">+</button>
                    <button class="btn btn-sm btn-link text-danger p-0 btn-qty-remove" data-id="${item.id}">🗑️</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");

  totalContainer.textContent = `$${getCartTotal().toFixed(2)}`;
  updateBadge(cart.reduce((acc, item) => acc + item.quantity, 0));

  // ESCUCHADORES DE EVENTOS
  cartContainer
    .querySelectorAll(".btn-qty-plus")
    .forEach((b) =>
      b.addEventListener("click", () =>
        changeQuantity(parseInt(b.dataset.id), 1),
      ),
    );

  cartContainer
    .querySelectorAll(".btn-qty-minus")
    .forEach((b) =>
      b.addEventListener("click", () =>
        changeQuantity(parseInt(b.dataset.id), -1),
      ),
    );

  cartContainer
    .querySelectorAll(".btn-qty-remove")
    .forEach((b) =>
      b.addEventListener("click", () => removeFromCart(parseInt(b.dataset.id))),
    );
}

function updateBadge(count) {
  const badge = document.querySelector("#cart-count");
  if (badge) badge.textContent = count;
}
