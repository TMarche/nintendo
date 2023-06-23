import ExpandingButtonLink from "../generic/ExpandingButtonLink";

function GarbageSystems() {
    return (
        <section className="flex flex-row justify-center">
            <section className="max-w-[1144px] my-8 mx-4 flex-1 text-3xl text-neutral-600">
                <div className="">
                    <div className="font-bold mb-4">Garbage Systems</div>
                    <div className="mb-8 h-52 sm:h-80 w-full bg-garbage-truck bg-cover bg-center rounded-lg"></div>
                    <div className="flex flex-col md:flex-row gap-4 text-lg md:text-2xl text-center md:text-left font-bold items-center">
                        <div className="text-neutral-600">
                            Find the perfect Bintendo garbage system for you.
                        </div>
                        <ExpandingButtonLink to="/store">
                            Explore now
                        </ExpandingButtonLink>
                    </div>
                </div>
            </section>
        </section>
    );
}
export default GarbageSystems;
