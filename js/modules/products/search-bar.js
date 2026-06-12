import {
    filteredProducts,
    setFilteredProductsSearch
} from "../../data/product-store.js";

import { renderProducts } from "./product-render.js";

export function initializeSearchBar() {
    // Search bar elements
    const searchButton = document.querySelector('#search-button');
    const clearButton = document.querySelector('#clear-search-button');
    const searchInput = document.querySelector('#search-input');

    // Search Functionality
    function executeSearch() {
        const searchText = searchInput.value.trim().toLowerCase();

        // If no text was entered, show all products currently
        if (!searchText) {
            setFilteredProductsSearch([...filteredProducts]);
            renderProducts();
            return;
        }

        // Filter products whose title contains the search text
        const searchResult = filteredProducts.filter(
            product => product.title
                    .toLowerCase()
                    .includes(searchText)
        );
        setFilteredProductsSearch(searchResult);
        renderProducts();
    }

    // Clear Button State
    function updateClearButtonState() {
        // Disable Clear button when input is empty
        clearButton.disabled = searchInput.value.trim() === '';
    }

    // EVENTS
    // Search button click
    searchButton.addEventListener('click', executeSearch);

    // Allow searching by pressing Enter
    searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                executeSearch();
            }
        }
    );

    // Enable/disable Clear button while typing
    searchInput.addEventListener('input', updateClearButtonState);

    // Clear search text and restore products
    clearButton.addEventListener('click', () => {
            searchInput.value = '';
            setFilteredProductsSearch([...filteredProducts]);
            renderProducts();
            updateClearButtonState();
        }
    );

    updateClearButtonState();
}