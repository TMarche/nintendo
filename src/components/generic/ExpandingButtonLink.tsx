import { Link } from "react-router-dom";

function ExpandingButtonLink({
    to,
    target,
    children,
}: {
    to: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
    children?: string | JSX.Element | JSX.Element[];
}) {
    return (
        <Link
            to={to}
            target={target || "_self"}
            className="py-2 px-8 bg-bintendo text-white min-w-fit text-center font-normal text-base sm:text-xl rounded
                shadow-button-initial hover:shadow-button-hover hover:bg-red-800 duration-300 ease-in-out"
        >
            {children}
        </Link>
    );
}
export default ExpandingButtonLink;
