import FirstCard from './components/FirstCard';
import SecondCard from './components/SecondCard';
import ThirdSection from './components/ThirdSection';
import TitleSection from './components/TitleSection';

const FirstSection = () => {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-screen-xl px-6 sm:px-10 py-10"> {/* Padding for smaller screens */}
                {/* Cards Section */}
                <div className="flex flex-wrap justify-center items-center gap-6 w-full">
                    <FirstCard className="flex-1 min-w-[250px] max-w-[90%] sm:max-w-[80%] md:max-w-[45%]" />
                    <SecondCard className="flex-1 min-w-[250px] max-w-[90%] sm:max-w-[80%] md:max-w-[45%]" />
                </div>
                {/* Title and Third Section */}
                <div className="w-full flex flex-col items-center mt-6">
                    <TitleSection />
                    <div className="w-full">
                        <ThirdSection />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;



