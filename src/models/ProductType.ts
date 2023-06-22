export class ProductType {
    static nextId = 0;

    productTypeId: number;
    name: string;

    constructor(name: string) {
        this.productTypeId = this.getNextId();
        this.name = name;
    }

    public getNextId() {
        const retval = ProductType.nextId;
        ProductType.nextId++;
        return retval;
    }
}
