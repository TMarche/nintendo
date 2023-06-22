import { Product } from "../../models/Product";
import CarouselCard from "./CarouselCard";

function Carousel({ products }: { products: Product[] }) {
    return (
        <div
            className="max-w-[calc(100vw-2rem)] flex flex-row items-center py-8
                 h-[340px] overflow-y-clip overflow-x-scroll no-scrollbar"
        >
            {products.slice(0, 10).map((product) => (
                <CarouselCard product={product} />
            ))}
        </div>
    );
}

export default Carousel;
