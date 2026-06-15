export function renderSearchBar() {
    const filtersSection = document.querySelector('#filters-section');

    const searchBarHTML = `
        <div id="search-bar-container" class="mb-4">
            <div class="row g-2">
                <div class="col-12 col-md">
                    <input id="search-input" type="text" class="form-control" placeholder="Search by name">
                </div>

                <div class="col-12 col-md-auto">
                    <button id="search-button" class="btn btn-primary w-100">
                        Search
                    </button>
                </div>

                <div class="col-12 col-md-auto">
                    <button id="clear-search-button" class="btn btn-outline-secondary w-100">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    `;

    filtersSection.insertAdjacentHTML(
        'afterbegin',
        searchBarHTML
    );
}