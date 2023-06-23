import { Product } from "../../models/Product";
import ExpandingButtonLink from "../generic/ExpandingButtonLink";
import Carousel from "./Carousel";

function FeaturedContent({ products }: { products: Product[] }) {
    return (
        <section className="flex flex-row justify-center">
            <div className="max-w-[1144px] my-8 mx-4 text-neutral-600">
                <div className="font-bold mb-4 text-3xl">Featured</div>
                <div
                    className="flex flex-col sm:flex-row h-80 mb-4 md:text-2xl font-small-caps rounded-lg
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
                    className="flex flex-col md:flex-row items-center text-center gap-4
                        md:gap-8 text-lg md:text-2xl font-bold mb-8"
                >
                    <div>
                        An epic adventure across the land and skies of
                        Trashtopia awaits
                    </div>
                    <ExpandingButtonLink
                        target="_blank"
                        to="https://www.youtube.com/watch?v=lINJW1oRYJA"
                    >
                        Available now
                    </ExpandingButtonLink>
                </div>
                <Carousel products={products} />
            </div>
        </section>
    );
}
export default FeaturedContent;
