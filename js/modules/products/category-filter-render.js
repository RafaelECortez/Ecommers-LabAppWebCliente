import {allProducts, setFilteredProducts, syncSearchProducts} from "../../data/product-store.js";
import { renderProducts } from "./product-render.js";
function getUniqueCategories() {
  return [...new Set(allProducts.map((p) => p.category))];
}

export function populateCategoryOptions() {
  const filterSection = document.querySelector("#filters-section");
  if (!filterSection) return;

  const categories = getUniqueCategories();

  filterSection.insertAdjacentHTML(
      'beforeend',
      `
    <div class="row align-items-center">
      <div class="col-md-4">
        <label for="category-filter" class="form-label fw-bold">Filtrar por Categoría</label>
        <select id="category-filter" class="form-select">
            <option value="all">Todas las categorías</option>
            ${categories.map((cat) => `<option value="${cat}">${cat}</option>`).join("")}
        </select>
      </div>
    </div>`
  );

  document.querySelector("#category-filter").addEventListener("change", (e) => {
    const selected = e.target.value;
    const filtered =
      selected === "all"
        ? allProducts
        : allProducts.filter((p) => p.category === selected);

    setFilteredProducts(filtered);
    syncSearchProducts();


    renderProducts();
  });
}
