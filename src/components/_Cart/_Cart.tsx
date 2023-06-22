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
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
        </div>
    );
}
export default CartPage;
