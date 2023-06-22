import { Link } from "react-router-dom";
import { Product } from "../../models/Product";
import { getProductTypeById } from "../../models/tables/DefaultProductTypes";

function CarouselCard({ product }: { product: Product }) {
    return (
        <Link
            to={`/store/${product.productId}`}
            className="relative h-full border-[1px] min-w-[260px] m-4 rounded hover:text-bintendo
                hover:h-[calc(100%+1rem)] hover:mb-8 ease-in-out duration-300
                bg-white
            "
        >
            <div
                className={`h-36 w-full rounded-t
                    ${product.image} bg-cover bg-no-repeat bg-top`}
            ></div>
            <div className="absolute bottom-0 flex flex-col gap-2 justify-end p-4 ">
                <div className="text-lg font-bold h-20 overflow-clip">
                    {product.name} – Pre-order now
                </div>
                <div className="flex flex-row gap-2 items-center text-neutral-600">
                    <div className="w-[3px] bg-bintendo h-5"></div>
                    <div>{getProductTypeById(product.productTypeId)?.name}</div>
                </div>
            </div>
        </Link>
    );
}
export default CarouselCard;
