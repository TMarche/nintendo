import { Product } from "../../models/Product";
import Cover from "../generic/Cover";
import Footer from "../generic/Footer";
import FeaturedContent from "./FeaturedContent";
import Hero from "./Hero";

function HomePage({
    searchBarState,
    setSearchBarState,
    products,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
    products: Product[];
}) {
    return (
        <div className="relative flex-1 ">
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
            {/*Hero Section*/}
            <div className="bg-gradient-to-bl from-neutral-500 via-white to-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="sm:p-8 h-[calc(100vh-3.5rem)]">
                        <Hero />
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:h-12 text-xl md:text-3xl text-center md:text-left font-bold items-center">
                            <div className="text-neutral-600">
                                Check out the presentation
                            </div>
                            <a
                                href="https://www.youtube.com/watch?v=lINJW1oRYJA"
                                target="_blank"
                                className="py-2 px-8 bg-bintendo text-white font-normal text-base sm:text-xl rounded
                                  sm:hover:bg-red-800 sm:hover:py-3 sm:hover:px-9 sm:hover:-ml-1 ease-in-out duration-300
                        "
                            >
                                Watch now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/*Featured content section*/}
            <FeaturedContent products={products} />
            <hr />
            {/*Online store section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Online Store</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <hr />
            {/*Garbage System Section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Garbage Systems</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <hr />
            {/*News Section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">News</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <hr />
            {/*Characters Section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Characters</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <hr />
            {/*Best Sellers Section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Best Sellers</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <hr />
            {/*New Releases Section*/}
            <section className="max-w-[1144px] my-8 mx-auto text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">New Releases</div>
                    <div className="sm:h-[340px] bg-bintendo"></div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default HomePage;
