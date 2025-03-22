const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center bg-white h-[119px] mx-auto px-4 md:px-8 shadow-md">
            <div className="flex items-center space-x-4 flex-wrap justify-center md:space-x-6">
                <img
                    src="/assets/FRAMETALE-01.svg"
                    alt="Header Icon"
                    className="w-30 h-10 md:w-50 md:h-12"
                />
            </div>
            <p className="mt-2 text-[#4E4E4E] text-center text-[14px] md:text-[15px] font-[500] leading-[22.5px] tracking-[0]">
                Frametale is coming soon! Discover AI-powered photobooks, calendars, prints, and cards to turn your memories into masterpieces.
            </p>
        </header>
    );
};

export default Header;
