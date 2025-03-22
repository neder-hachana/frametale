import ImageCard from "../../components/ImageCard";

const ForthSection = () => {
    return (
        <section className="flex flex-col items-center mt-10 py-10 bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE]">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-Poppins text-white text-center px-4">
                AI-Generated Templates & Color Palettes
            </h2>

            {/* First Row of Images */}
            <div className="flex flex-wrap justify-center gap-12 mt-8 px-4">
                <ImageCard
                    imageSrc="/assets/rect1.svg"
                    height="265px"
                    width="265px"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect2.svg"
                    height="265px"
                    width="265px"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect3.svg"
                    height="265px"
                    width="265px"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect4.svg"
                    height="265px"
                    width="265px"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
            </div>

            {/* Text Below First Row */}
            <div className=" sm:text-base md:text-lg text-center px-4">
                <p className="text-[#FFFFFF] font-poppins font-[500] text-[17px] mt-4">
                    Memories take on new life when they’re more than just pixels on a screen.
                    Holding them in your hands, <br></br> sharing those cherished moments with friends,
                    and reliving the stories with family bring <br></br>a magic no device can replicate.
                    In a world filled with digital conveniences, Photobooks endure <br></br>as eternal mementos—capturing moments that matter in a form you can truly hold close.</p>
            </div>

            {/* Second Row of Images */}
            <div className="flex flex-wrap justify-center gap-12 mt-12 mb-8 px-4">
                <ImageCard
                    imageSrc="/assets/rect5.svg"
                    height="265px"
                    width="265px"
                    footerImage="/assets/P1.svg"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect6.svg"
                    height="265px"
                    width="265px"
                    footerImage="/assets/P2.svg"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect7.svg"
                    height="265px"
                    width="265px"
                    footerImage="/assets/P3.svg"
                    className="w-full sm:w-[45%] md:w-[22%]"
                />
                <ImageCard
                    imageSrc="/assets/rect8.svg"
                    height="265px"
                    width="265px"
                    className="w-full sm:w-[45%] md:w-[22%]"
                    footerImage="/assets/P4.svg"
                />
            </div>

            <div className=" sm:text-base md:text-lg text-center px-4">
                <p className="text-[#FFFFFF] font-poppins font-[500] text-[17px] mt-4 mb-6">
                    Memories take on new life when they’re more than just pixels on a screen.
                    Holding them in your hands, <br></br> sharing those cherished moments with friends,
                    and reliving the stories with family bring <br></br>a magic no device can replicate.
                    In a world filled with digital conveniences, Photobooks endure <br></br>as eternal mementos—capturing moments that matter in a form you can truly hold close.</p>
            </div>
        </section>
    );
};

export default ForthSection;