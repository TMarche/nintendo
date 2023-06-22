import { Product } from "../../models/Product";
import Carousel from "./Carousel";

function FeaturedContent({ products }: { products: Product[] }) {
    return (
        <section className="flex flex-row justify-center">
            <div className="max-w-[1144px] my-8 mx-4 sm:mx-8 flex-1 text-neutral-600">
                <div className="font-bold mb-4 text-3xl">Featured</div>
                <div
                    className="flex flex-col sm:flex-row h-[340px] mb-4 md:text-2xl font-small-caps rounded-lg
                     bg-featured-bins bg-center bg-cover bg-no-repeat cursor-pointer"
                >
                    <div
                        className="hidden sm:flex flex-col justify-around p-4 flex-1
                        text-white backdrop-blur-xl drop-shadow
                        sm:rounded-s-lg
                        "
                    >
                        <div className="text-center leading-none">
                            <div>
                                ...Bigger, richer, and somehow even more
                                ambitious..."
                            </div>
                            <div className="leading-normal">
                                <div>10 | 10</div>
                                <div className="text-xs sm:text-sm">
                                    Imagine Garbage Network
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[4_4_0] sm:flex-[2_2_0]"></div>
                    <div
                        className="flex flex-col justify-around p-4 flex-1
                        text-white backdrop-blur-xl drop-shadow
                        sm:rounded-e-lg rounded-b-lg
                        "
                    >
                        <div className="text-center leading-none">
                            <div>"...A canvas for your own creativity..."</div>
                            <div>
                                <div>10 | 10</div>
                                <div className="text-xs sm:text-sm ">
                                    GarbageSpot
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row items-center text-center gap-4
                        sm:gap-8 sm:h-12 text-lg sm:text-2xl font-bold mb-8"
                >
                    <div>
                        An epic adventure across the land and skies of
                        Trashtopia awaits
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=lINJW1oRYJA"
                        target="_blank"
                        className="py-2 px-8 bg-bintendo text-white font-normal text-base sm:text-xl rounded
                            sm:hover:bg-red-800 sm:hover:py-3 sm:hover:px-9 sm:hover:-ml-1 ease-in-out duration-300
                            "
                    >
                        Available now
                    </a>
                </div>
                <Carousel products={products} />
            </div>
        </section>
    );
}
export default FeaturedContent;
