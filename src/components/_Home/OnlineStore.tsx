import ExpandingButtonLink from "../generic/ExpandingButtonLink";

function OnlineStore() {
    return (
        <section className="flex flex-row justify-center">
            <div className="max-w-[1144px] my-8 mx-4 flex-1 text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Online Store</div>
                    <div className="mb-8 h-52 sm:h-80 w-full bg-wes-bins bg-cover bg-center rounded-lg"></div>
                    <div className="flex flex-col md:flex-row gap-4 text-lg md:text-2xl text-center md:text-left font-bold items-center">
                        <div className="text-neutral-600 font-normal">
                            Shop garbage bins, exclusive Bintendo merchandise,
                            and more! Plus get free shipping on orders $50 and
                            over.
                        </div>
                        <ExpandingButtonLink to="/store">
                            Start shopping
                        </ExpandingButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OnlineStore;
