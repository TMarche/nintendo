function Cover({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div
            className={`absolute h-full w-full top-0 ${
                searchBarState === "INACTIVE" ? "hidden" : ""
            } bg-neutral-500 opacity-30 flex-1`}
            onClick={() => setSearchBarState("INACTIVE")}
        ></div>
    );
}
export default Cover;
