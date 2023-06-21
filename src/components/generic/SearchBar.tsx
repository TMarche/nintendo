import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import AnimateHeight from "react-animate-height";

function SearchBar({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    const searchRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <div
                className="z-20 border-b-2 w-full flex flex-row gap-2 p-1
                    cursor-pointer
                  hover:text-bintendo hover:border-bintendo 
                    ease-in-out duration-300"
                onClick={() => {
                    if (searchRef.current === null) return;
                    searchRef.current.focus();
                    setSearchBarState("ACTIVE");
                }}
            >
                <SearchIcon className="text-gray-400" />
                <input
                    ref={searchRef}
                    className={`flex-1 outline-none ${
                        searchBarState === "ACTIVE"
                            ? "cursor-text"
                            : "cursor-pointer"
                    } text-neutral-700`}
                    placeholder="Search"
                />
            </div>
            <AnimateHeight
                className="absolute w-full z-10 top-14 left-0 bg-white"
                duration={300}
                height={searchBarState === "ACTIVE" ? 320 : 0}
            >
                <div className="h-full w-full">Test</div>
            </AnimateHeight>
        </>
    );
}
export default SearchBar;
