import Cover from "../generic/Cover";

function CartPage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1">
            CartPage
            <Cover
                searchBarState={searchBarState}
                setSearchBarState={setSearchBarState}
            />
        </div>
    );
}
export default CartPage;
