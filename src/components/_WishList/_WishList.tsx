import Cover from "../generic/Cover";

function WishListPage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1">
            WishListPage
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
        </div>
    );
}
export default WishListPage;
