import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchBar from "./SearchBar";

function Navigation({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="fixed bg-white top-0 left-0 z-50 w-full flex flex-row justify-between h-14 text-neutral-700">
            <div className="flex flex-row sm:gap-4 flex-1 h-full">
                <Link className="z-20 w-full sm:w-fit" to="/">
                    <div className="bg-bintendo p-4 w-full text-white">
                        Bintendo
                    </div>
                </Link>
                <div className="hidden md:flex flex-row flex-1 max-w-md items-center">
                    <SearchBar
                        searchBarState={searchBarState}
                        setSearchBarState={setSearchBarState}
                    />
                </div>
            </div>
            <nav className="sm:pr-8 sm:flex-1">
                <ul className="hidden h-full sm:flex flex-row justify-end items-center gap-4">
                    <li>
                        <Link
                            to="/wishList"
                            className="flex flex-row gap-1 hover:text-bintendo ease-in-out duration-300"
                        >
                            <FavoriteIcon />
                            Wish List
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="flex flex-row gap-1 hover:text-bintendo ease-in-out duration-300"
                        >
                            <ShoppingCartIcon />
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="flex flex-row gap-1 hover:text-bintendo ease-in-out duration-300"
                        >
                            <PersonIcon />
                            Log in / Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
