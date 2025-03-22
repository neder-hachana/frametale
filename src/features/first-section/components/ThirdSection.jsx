import ImageCard from '../../../components/ImageCard';
import TextSection from './TextSection';

const ThirdSection = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Image Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                {/* First Block - Start Creating Now */}
                <div className="flex flex-col items-center sm:items-start md:col-span-1">
                    <h2 className="text-[20px] font-poppins sm:text-[22px] font-[800] bg-clip-text text-transparent bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE] text-center sm:text-left">
                        Start Creating Now
                    </h2>
                    <p className="text-[#4E4E4E] font-[600] text-[12px] text-center sm:text-left">
                        Start Creating Now and turn your photos into <br />
                        something extraordinary
                    </p>
                    <div className="mt-4 w-full">
                        <ImageCard
                            imageSrc="/assets/card1.svg"
                            height="336px"
                            width="100%"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Second Block - Photo Books (Wider) */}
                <div className="flex flex-col items-center sm:items-start md:col-span-1">
                    <ImageCard
                        imageSrc="/assets/card2.svg"
                        title="Photo Books"
                        height="440px"
                        width="100%"
                        className="w-full h-auto"
                    />
                </div>

                {/* Third Block - Photo Prints */}
                <div className="flex flex-col items-center sm:items-start md:col-span-1">
                    <ImageCard
                        imageSrc="/assets/card3.svg"
                        title="Photo Prints"
                        height="440px"
                        width="100%"
                        className="w-full h-auto"
                    />
                </div>

                {/* Fourth Block - Two Small Images */}
                <div className="flex flex-col gap-4 items-center sm:items-start md:col-span-1">
                    <ImageCard
                        imageSrc="/assets/card4.svg"
                        title="Calendars"
                        height="205px"
                        width="100%"
                        className="w-full h-auto"
                    />
                    <ImageCard
                        imageSrc="/assets/card5.svg"
                        title="Cards"
                        height="205px"
                        width="100%"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Text Section below, aligned to the left */}
            <div className="w-full flex justify-center sm:justify-start">
                <TextSection />
            </div>
        </div>
    );
};

export default ThirdSection;

