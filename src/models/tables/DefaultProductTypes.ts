import { ProductType } from "../ProductType";

export const DEFAULT_PRODUCT_TYPES = [
    new ProductType("Commercial"),
    new ProductType("Industrial"),
    new ProductType("Home"),
];

export const getProductTypeById = (id: number) => {
    return DEFAULT_PRODUCT_TYPES.find(
        (productType: ProductType) => productType.productTypeId === id
    );
};

export const getProductTypeByName = (name: string) => {
    return DEFAULT_PRODUCT_TYPES.find(
        (productType: ProductType) => productType.name === name
    );
};
