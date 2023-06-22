import Cover from "../generic/Cover";

function LoginPage({
    searchBarState,
    setSearchBarState,
}: {
    searchBarState: "ACTIVE" | "INACTIVE";
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    return (
        <div className="relative flex-1">
            LoginPage
            {searchBarState === "ACTIVE" && (
                <Cover setSearchBarState={setSearchBarState} />
            )}
        </div>
    );
}
export default LoginPage;
