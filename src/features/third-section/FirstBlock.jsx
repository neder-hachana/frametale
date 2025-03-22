import TextBlock from "../../components/TextBlock";

const FirstBlock = () => {
  const firstBlockContent = [
    {
      title: "Our AI Simplifies Your Story!",
      subtitle: "Effortless Layouts, Powered by AI Magic",
      subtitleClass: " md:text-[10px] lg:text-[16px] mb-2 md:mb-3 lg:mb-4",
      paragraphs: [
        `Frametale’s AI-powered auto-layout revolutionizes the way you design by eliminating the need for manual adjustments. Whether you’re creating a photobook, calendar, or prints, the system ensures your images are arranged for maximum visual appeal.`
      ]
    },
    {
      title: "",
      subtitle: "Seamless Image Arrangement",
      subtitleClass: "text-base md:text-[18px] lg:text-[20px] mt-2 md:mt-3 lg:mt-4",
      paragraphs: [
        `Frametale’s intelligent technology automatically analyzes your photos to create balanced and aesthetically pleasing layouts. This eliminates the need for tedious manual adjustments, giving you a polished and professional result in seconds.`
      ]
    },
    {
      title: "",
      subtitle: "Time-Saving and Beautiful Results",
      subtitleClass: "text-base md:text-[18px] lg:text-[20px] mt-2 md:mt-3 lg:mt-4",
      paragraphs: [
        `With Frametale’s auto-layout, you save time without compromising on quality. The AI-powered tool does the heavy lifting, allowing you to focus on enjoying the creative process and delivering stunning designs effortlessly.`
      ]
    }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-2 px-2 sm:px-8 md:px-12 lg:px-18">
      {/* Text Section */}
      <div className="w-full md:w-[55%] lg:w-1/2 md:pr-6 lg:pr-10 text-center md:text-left">
        {firstBlockContent.map((content, index) => (
          <TextBlock
            key={index}
            title={content.title}
            subtitle={content.subtitle}
            subtitleClass={content.subtitleClass}
            paragraphs={content.paragraphs}
          />
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[45%] lg:w-1/2 flex justify-center mb-0">
        <img 
          src="/assets/thirdBlock1.svg" 
          alt="Block 1" 
          className=" sm:w-[300px] sm: mt-8 md:w-[400px] lg:w-[500px] xl:w-[627px] h-auto"
        />
      </div>
    </div>
  );
};

export default FirstBlock;
