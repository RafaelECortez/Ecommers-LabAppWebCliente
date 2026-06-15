export let allProducts = [];
export let filteredProducts = [];
export let filteredProductsSearch = [];

export function setAllProducts(products) {
    allProducts = products;
}

export function setFilteredProducts(products) {
    filteredProducts = products;
}

export function setFilteredProductsSearch(products) {
    filteredProductsSearch = products;
}

export function syncSearchProducts() {
    filteredProductsSearch = [...filteredProducts];
}