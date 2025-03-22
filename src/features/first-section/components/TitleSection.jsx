const TitleSection = () => {
    return (
        <div className="flex justify-center items-center w-full py-8">
            <h2 className="font-[800] text-[24px] sm:text-[30px] md:text-[25px] text-center">
                <span className="text-[#4E4E4E] font-Poppins block sm:inline">
                    Turn Your Memories into Masterpieces.
                </span>
                &nbsp; {/* ✅ Add space here */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE] block sm:inline">
                    AI-Powered Photo Products!
                </span>
            </h2>
        </div>
    );
};

export default TitleSection;
