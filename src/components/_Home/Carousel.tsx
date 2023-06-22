import { useRef, useState } from "react";
import { Product } from "../../models/Product";
import CarouselCard from "./CarouselCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({ products }: { products: Product[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<HTMLAnchorElement[]>([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const SCROLL_AMOUNT = 640;

    const scroll = (scrollOffset: number) => {
        if (ref.current == null) return;
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div
            className="max-w-[calc(100vw-2rem)] flex flex-row items-center py-8
                 h-[340px] overflow-y-clip overflow-x-scroll no-scrollbar scroll-smooth"
            ref={ref}
        >
            <button
                className="hidden sm:block sticky left-0 z-10 h-[calc(100%+3rem)] px-3 rounded-e-lg
                    bg-black opacity-30 hover:opacity-60 duration-300 -mr-12"
                onClick={() => {
                    scroll(-SCROLL_AMOUNT);
                }}
            >
                <ArrowBackIosNewIcon
                    fontSize="large"
                    className="text-white opacity-100"
                />
            </button>
            {products.slice(0, 10).map((product, index) => {
                return (
                    <CarouselCard
                        key={product.productId}
                        product={product}
                        ref={(ref) =>
                            (cardRefs.current[index] =
                                ref || new HTMLAnchorElement())
                        }
                    />
                );
            })}
            <button
                className="hidden sm:block sticky right-0 z-10 h-[calc(100%+3rem)] px-3 rounded-s-lg
                    bg-black opacity-30 hover:opacity-50 duration-300 -ml-12"
                onClick={() => {
                    scroll(SCROLL_AMOUNT);
                }}
            >
                <ArrowForwardIosIcon fontSize="large" className="text-white" />
            </button>
        </div>
    );
}

export default Carousel;
