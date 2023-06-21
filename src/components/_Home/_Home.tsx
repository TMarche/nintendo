import Cover from "../generic/Cover";
import Hero from "./Hero";

function HomePage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1 bg-gradient-to-bl from-neutral-500 via-white to-white">
            <div className="w-full h-full">
                <div className="sm:p-8 h-[calc(100vh-3.5rem)]">
                    <Hero />
                    <div className="flex flex-row gap-8 my-4 h-12 text-3xl font-bold items-center">
                        <div className="text-neutral-600">
                            Check out the presentation
                        </div>
                        <a
                            href="https://www.youtube.com/watch?v=lINJW1oRYJA"
                            target="_blank"
                            className="py-2 px-8 bg-bintendo text-white font-normal text-xl rounded
                        hover:bg-red-800 hover:py-3 hover:px-9 hover:-ml-1 ease-in-out duration-300
                        "
                        >
                            Watch now
                        </a>
                    </div>
                </div>
                <hr />
                <div className="text-3xl font-bold">
                    <div className="text-neutral-600">Featured</div>
                </div>
            </div>
            <Cover
                searchBarState={searchBarState}
                setSearchBarState={setSearchBarState}
            />
        </div>
    );
}
export default HomePage;
