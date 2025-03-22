import FirstCard from '../first-section/components/FirstCard';
import SecondCard from '../first-section/components/SecondCard';

const SecondBlock = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 w-full px-6 md:px-10">
            <FirstCard className="flex-1 min-w-[250px] max-w-[90%] sm:max-w-[80%] md:max-w-[45%]" />
            <SecondCard className="flex-1 min-w-[250px] max-w-[90%] sm:max-w-[80%] md:max-w-[45%]" />
        </div>
    );
};

export default SecondBlock;
