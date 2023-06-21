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
            <Cover
                searchBarState={searchBarState}
                setSearchBarState={setSearchBarState}
            />
        </div>
    );
}
export default WishListPage;
