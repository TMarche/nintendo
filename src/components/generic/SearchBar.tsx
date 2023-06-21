import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

function SearchBar({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    const toggleSearchContent = () => {
        setSearchBarState(searchBarState === "ACTIVE" ? "INACTIVE" : "ACTIVE");
    };

    const searchRef = useRef<HTMLInputElement>(null);

    return (
        <div
            className="border-b-2 w-full flex flex-row gap-2 p-1
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
    );
}
export default SearchBar;
