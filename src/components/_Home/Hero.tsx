function Hero() {
    const date = new Date();

    return (
        <div
            className="flex flex-col w-full justify-center items-center h-[640px]
                max-h-[calc(100vh-12rem)] sm:max-h-[calc(100vh-6.5rem)] sm:rounded-lg
                bg-bintendo"
        >
            <div className="flex flex-col w-full items-center">
                <div className="bg-bintendo-direct h-20 sm:h-40 w-3/5 bg-center bg-contain bg-no-repeat sm:m-8"></div>
                <div className="text-white text-3xl md:text-5xl font-bold tracking-wide">
                    {date.getMonth() + 1}.{date.getDate()}.{date.getFullYear()}
                </div>
            </div>
        </div>
    );
}

export default Hero;
