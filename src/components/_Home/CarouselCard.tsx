import { Link } from "react-router-dom";
import { Product } from "../../models/Product";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { getProductTypeById } from "../../models/tables/DefaultProductTypes";

function CarouselCard({ product }: { product: Product }) {
    return (
        <Link
            to={`/store/${product.productId}`}
            className="relative h-full border-[1px] min-w-[300px] m-4 rounded-lg hover:text-bintendo
                hover:h-[calc(100%+1rem)] hover:mb-8 ease-in-out duration-300
                drop-shadow-xl bg-white
            "
        >
            <div
                className="h-32 w-full rounded-t-lg
                    bg-featured-bins bg-center bg-cover"
            ></div>
            <div className="absolute bottom-0 flex flex-col gap-16 justify-end p-4 ">
                <div className="text-lg font-bold">
                    {product.name} – Pre-order now
                </div>
                <div className="flex flex-row gap-2 items-cente text-neutral-600">
                    <div className="w-[3px] bg-bintendo h-5"></div>
                    <div>{getProductTypeById(product.productTypeId)!.name}</div>
                </div>
            </div>
        </Link>
    );
}
export default CarouselCard;
