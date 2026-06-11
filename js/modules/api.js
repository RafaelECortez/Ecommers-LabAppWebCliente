const BASE_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}