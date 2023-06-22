import { useRef, useState } from "react";
import { Product } from "../../models/Product";
import CarouselCard from "./CarouselCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({ products }: { products: Product[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const [leftButtonDynamicStyles, setLeftButtonDynamicStyles] =
        useState("sm:invisible");
    const [rightButtonDynamicStyles, setRightButtonDynamicStyles] =
        useState("sm:visible");

    const SCROLL_AMOUNT = 640;

    // TODO: Refactor duplicate code in scroll/handleScroll
    const scroll = (scrollOffset: number) => {
        if (ref.current == null) return;
        ref.current.scrollLeft += scrollOffset;

        // Set left button styles
        if (ref.current.scrollLeft + scrollOffset <= 0) {
            setLeftButtonDynamicStyles("sm:invisible");
        } else {
            setLeftButtonDynamicStyles("sm:visible");
        }

        // Set right button styles
        if (
            ref.current.scrollLeft + scrollOffset >=
            ref.current.scrollWidth - ref.current.offsetWidth
        ) {
            setRightButtonDynamicStyles("sm:invisible");
        } else {
            setRightButtonDynamicStyles("sm:visible");
        }
    };

    const handleScroll = (event: React.UIEvent<HTMLElement>) => {
        // Set left button styles
        if (event.currentTarget.scrollLeft <= 0) {
            setLeftButtonDynamicStyles("sm:invisible");
        } else {
            setLeftButtonDynamicStyles("sm:visible");
        }

        // Set right button styles
        if (
            event.currentTarget.scrollLeft >=
            event.currentTarget.scrollWidth - event.currentTarget.offsetWidth
        ) {
            setRightButtonDynamicStyles("sm:invisible");
        } else {
            setRightButtonDynamicStyles("sm:visible");
        }
    };

    return (
        <div
            className="max-w-[calc(100vw-2rem)] flex flex-row items-center py-8
                 h-[340px] overflow-y-clip overflow-x-scroll no-scrollbar scroll-smooth"
            ref={ref}
            onScroll={handleScroll}
        >
            <button
                className={`invisible ${leftButtonDynamicStyles} sticky left-0 z-10 h-[calc(100%+3rem)] px-3 rounded-e-lg
                    bg-black opacity-30 hover:opacity-60 duration-300 -mr-14`}
                onClick={() => {
                    scroll(-SCROLL_AMOUNT);
                }}
            >
                <ArrowBackIosNewIcon
                    fontSize="large"
                    className="text-white opacity-100"
                />
            </button>
            {products.slice(0, 10).map((product) => {
                return (
                    <CarouselCard key={product.productId} product={product} />
                );
            })}
            <button
                className={`invisible ${rightButtonDynamicStyles} sticky right-0 z-10 h-[calc(100%+3rem)] px-3 rounded-s-lg
                    bg-black opacity-30 hover:opacity-50 duration-300 -ml-14`}
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
