const SecondCard = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-[32px] h-auto md:h-[200px] w-full flex-1 min-w-[300px] border border-[#0777AE] p-4 gap-4">
            {/* Left Section with Text */}
            <div className="flex flex-col justify-center text-center w-full md:w-[60%]">
                <h3 className="text-[18px] sm:text-[20px] md:text-[18px] font-[800] font-poppins text-[#0777AE]">
                    Generate your <br />
                    Designs In Our <br />
                    Online Studio.
                </h3>
            </div>

            {/* Right Section with Image */}
            <div className="flex justify-center items-center w-full md:w-[40%]">
                <img
                    src="/assets/Group.svg"
                    alt="Image"
                    className="w-[100px] sm:w-[120px] md:w-[164px] h-auto"
                />
            </div>
        </div>
    );
};

export default SecondCard;
