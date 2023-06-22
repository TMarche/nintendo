import Cover from "../generic/Cover";

function StorePage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1">
            StorePage
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
        </div>
    );
}
export default StorePage;
