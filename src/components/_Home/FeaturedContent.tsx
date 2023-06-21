function FeaturedContent() {
    return (
        <section className="flex flex-row justify-center">
            <div className="max-w-[1144px] my-8 sm:mx-8 flex-1 text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4 text-3xl">Featured</div>
                    <div
                        className="flex flex-col sm:flex-row h-[340px] md:text-2xl font-small-caps sm:rounded-lg
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
                        sm:rounded-e-lg
                        "
                        >
                            <div className="text-center leading-none">
                                <div>
                                    "...A canvas for your own creativity..."
                                </div>
                                <div>
                                    <div>10 | 10</div>
                                    <div className="text-xs sm:text-sm ">
                                        GarbageSpot
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FeaturedContent;
