import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";

function Cover({
    setSearchBarState,
}: {
    setSearchBarState: (state: "ACTIVE" | "INACTIVE") => void;
}) {
    useEffect(() => {
        const element = document.getElementById("root");

        if (element !== null) disableBodyScroll(element);
        return () => {
            if (element !== null) enableBodyScroll(element);
        };
    });

    return (
        <div
            className={`absolute z-10 h-full w-full top-0
              bg-black opacity-50 flex-1`}
            onClick={() => setSearchBarState("INACTIVE")}
        ></div>
    );
}
export default Cover;
