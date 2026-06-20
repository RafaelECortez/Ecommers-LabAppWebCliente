/**
 * Initializes the basic HTML structure of the app.
 *
 * This function loads the main sections of the web page:
 *  - Header: store branding and navigation menu
 *  - Main: content sections for filters and product listings
 *  - Footer: copyright information
 *
 * Each section is dynamically created and appended to its respective container.
 * This function serves as the entry point to render the basic layout before
 * adding interactive features or API-driven content.
 */
export function loadBasicHTML(){
    loadBasicHeader();
    loadBasicMain();
    loadBasicFooter();

    const cartHTML = `
    <div class="offcanvas offcanvas-end" tabindex="-1" id="cartSidebar" aria-labelledby="cartSidebarLabel">
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title" id="cartSidebarLabel">Tu Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column">
        <div id="cart-items" class="flex-grow-1">
            <p class="text-muted text-center mt-5">El carrito está vacío.</p>
        </div>
        
        <div class="mt-auto border-top pt-3">
            <div class="d-flex justify-content-between mb-3">
                <span class="fw-bold">Total:</span>
                <span id="cart-total" class="fw-bold text-primary">$0.00</span>
            </div>
            <button id="btn-clear-cart" class="btn btn-danger w-100 fw-bold mt-2">CLEAR CART</button>
            <!-- Agregado por Aixa: id utilizado para conectar el botón con la lógica de finalizar compra. -->
            <button id="btn-finish-purchase" class="btn btn-primary w-100 fw-bold">FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', cartHTML);
}

/*
=========================================================
   HEADER SECTION
=========================================================
*/

/**
 * Creates the HTML content for the application header.
 *
 * Includes:
 *  - Store branding (logo/name)
 *  - Navigation menu (Home, Cart)
 *
 * @returns {string} HTML string for the header content
 */
function createContentHeader() {
    return `
    <a href="/" class="text-decoration-none mb-2 mb-sm-0">
      <p class="mb-0 fs-3 fw-bold text-center text-sm-start">
        Store<span class="text-primary">Team1</span>
      </p>
    </a>

    <div class="d-flex align-items-center gap-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link active">Home</a>
          </li>
        </ul>

        <button class="btn btn-dark position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartSidebar">
          🛒
          <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            0
          </span>
        </button>
    </div>
    `;
}

/**
 * Configures and renders the header section into the DOM.
 *
 * - Selects the header container (.app-header)
 * - Applies Bootstrap layout classes
 * - Injects HTML content
 */
function loadBasicHeader() {
    const header = document.querySelector('.app-header');

    header.classList.add('container');
    header.classList.add('d-flex')
    header.classList.add('flex-column')
    header.classList.add('flex-sm-row')
    header.classList.add('align-items-center')
    header.classList.add('justify-content-between')
    header.classList.add('border-bottom');
    header.classList.add('py-3')
    header.innerHTML = createContentHeader();
}

/*
=========================================================
   MAIN SECTION
=========================================================
*/

/**
 * Configures and renders the main application layout.
 *
 * Includes:
 *  - Filters section (categories + search bar)
 *  - Products container (dynamic product cards)
 *  - Applies Bootstrap layout classes
 */
function loadBasicMain() {
    const main = document.querySelector('.app-main');

    main.classList.add('container');
    main.classList.add('flex-grow-1');

    main.innerHTML = `
        <section id="filters-section" class="my-4">
            <!--Para el filtro por categorias y la barra de busqueda-->
        </section>

        <section>
            <div id="products-container" class="row g-4"></div>
            <!--Para mostrar los productos-->
        </section>
    `;
}

/*
=========================================================
   FOOTER SECTION
=========================================================
 */

/**
 * Creates the HTML content for the footer section.
 *
 * @returns {string} HTML string for the footer
 */
function createContentFooter() {
    return `    
    <div class="container">
        <p class="text-center text-body-secondary">© 2026 Company, Inc. All rights reserved.</p>
    </div>`;
}

/**
 * Configures and renders the footer section into the DOM.
 *
 * - Selects footer container (.app-footer)
 * - Applies Bootstrap styling
 * - Injects footer HTML content
 */
function loadBasicFooter() {
    const footer = document.querySelector('.app-footer');

    footer.classList.add('footer');
    footer.classList.add('mt-auto');
    footer.classList.add('py-3');
    footer.classList.add('bg-body-tertiary');
    footer.innerHTML = createContentFooter();
}