import { fetchProducts } from "../api.js";
import { ProductDTO } from "../../models/ProductDTO.js";

import {
    setAllProducts,
    setFilteredProducts,
    setFilteredProductsSearch
} from "../../data/product-store.js";

export async function loadProducts() {
    const productsData = await fetchProducts();
    const productsDTO = productsData.map(product => new ProductDTO(product));

    setAllProducts(productsDTO);
    setFilteredProducts([...productsDTO]); 
    setFilteredProductsSearch([...productsDTO]);
}