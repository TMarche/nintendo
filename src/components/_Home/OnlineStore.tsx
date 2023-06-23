import ExpandingButtonLink from "../generic/ExpandingButtonLink";

function OnlineStore() {
    return (
        <section className="flex flex-row justify-center">
            <section className="max-w-[1144px] my-8 mx-4 flex-1 text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Online Store</div>
                    <div>
                        <div className="h-52 mb-8 bg-wes-bins bg-center bg-cover bg-no-repeat rounded-lg"></div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 text-lg md:text-2xl text-center md:text-left font-bold items-center">
                        <div className="text-neutral-600">
                            Shop garbage bins, exclusive Bintendo merchandise,
                            and more! Plus get free shipping on orders $50 and
                            over.
                        </div>
                        <ExpandingButtonLink to="/store">
                            Start shopping
                        </ExpandingButtonLink>
                    </div>
                </div>
            </section>
        </section>
    );
}
export default OnlineStore;
