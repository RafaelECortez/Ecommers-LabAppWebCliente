import {
    filteredProducts,
    setFilteredProductsSearch
} from "../../data/product-store.js";

import { renderProducts } from "./product-render.js";

export function initializeSearchBar() {
    const searchButton = document.querySelector('#search-button');
    const clearButton = document.querySelector('#clear-search-button');
    const searchInput = document.querySelector('#search-input');

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value.trim().toLowerCase();

        if (!searchText) {
            setFilteredProductsSearch([...filteredProducts]);
            renderProducts();
            return;
        }

        const searchResult = filteredProducts
            .filter(product => product.title.toLowerCase().includes(searchText));

        setFilteredProductsSearch(searchResult);
        renderProducts();
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';

        setFilteredProductsSearch([...filteredProducts]);
        renderProducts();
    });
}