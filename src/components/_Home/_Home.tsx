import Cover from "../generic/Cover";

function HomePage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1">
            HomePage
            <Cover
                searchBarState={searchBarState}
                setSearchBarState={setSearchBarState}
            />
        </div>
    );
}
export default HomePage;
