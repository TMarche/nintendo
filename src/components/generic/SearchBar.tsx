import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

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
                  hover:text-red-600 hover:border-red-600 
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
                    } text-black`}
                    placeholder="Search"
                />
            </div>
            <div
                className={`${
                    searchBarState === "INACTIVE" ? "hidden" : ""
                } absolute top-14 left-0 z-10 h-80 w-full bg-white
                transition-height duration-300 ease-in-out
                `}
            >
                Test
            </div>
        </>
    );
}
export default SearchBar;
