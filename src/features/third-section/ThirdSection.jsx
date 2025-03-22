import FirstBlock from "./FirstBlock"
import SecondBlock from "./SecondBlock"
import ThirdBlock from "./ThirdBlock"

const ThirdSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 sm:px-10 py-8">
        <div className="flex flex-col items-center gap-y-10 md:gap-y-12 lg:gap-y-14">
            <FirstBlock />
            <SecondBlock />
            <ThirdBlock />
        </div>
    </section>
  );
};

export default ThirdSection;
