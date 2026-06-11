export class ProductDTO {
    constructor(productData) {
        this.id = productData.id;
        this.title = productData.title;
        this.price = productData.price;
        this.description = productData.description;
        this.category = productData.category;
        this.image = productData.image;

        this.rating = productData.rating.rate;
        this.ratingCount = productData.rating.count;
    }
}