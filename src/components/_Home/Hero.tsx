function Hero() {
    return (
        <div className="flex flex-col w-full justify-center items-center h-[calc(100vh-3.5rem)] sm:h-[640px] sm:rounded-lg bg-bintendo">
            <div className="flex flex-col w-full items-center">
                <div className="bg-bintendo-direct h-20 sm:h-40 w-3/5 bg-center bg-contain bg-no-repeat sm:m-8"></div>
                <div className="text-white text-3xl md:text-5xl font-bold tracking-wide">
                    6.21.2023
                </div>
            </div>
        </div>
    );
}

export default Hero;
