import { faker } from "@faker-js/faker";
import { getProductTypeByName } from "./tables/DefaultProductTypes";

export class Product {
    static nextId = 0;

    productId: number;
    productTypeId: number;
    image: string;
    name: string;
    description: string;
    tagLine: string;
    length: number;
    width: number;
    height: number;

    constructor(
        productType: string,
        name: string,
        description: string,
        tagLine: string,
        length: number,
        width: number,
        height: number
    ) {
        this.productId = this.getNextId();
        this.productTypeId =
            getProductTypeByName(productType)?.productTypeId || 0;
        this.image = faker.image.urlLoremFlickr({ category: "business" });
        this.name = name;
        this.description = description;
        this.tagLine = tagLine;
        this.length = length;
        this.width = width;
        this.height = height;
    }

    public getNextId() {
        const retval = Product.nextId;
        Product.nextId++;
        return retval;
    }
}
