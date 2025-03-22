import TextBlock from "../../components/TextBlock";

const ThirdBlock = () => {
    const thirdBlockContent = [
        {
            title: "AI-Powered Photo Enhancement",
            subtitle: "Bring Your Images to Life",
            subtitleClass: "text-[25px] mb-4",
            paragraphs: [
                `Frametale’s advanced AI enhances your photos automatically, bringing <br> out vibrant colors, sharp details, and perfect lighting. Say goodbye to dull <br> or low-quality images—our intelligent system optimizes every photo for a <br> stunning, high-resolution look.`
            ]
        },
        {
            title: "",
            subtitle: "Smart Scaling for Any Size",
            subtitleClass: "text-[20px] mt-4",
            paragraphs: [
                `Perfect Quality at Any Resolution. No matter the size you need, Frametale’s  <br> AI ensures perfect scaling without loss of quality. Whether printing a <br> small keepsake or a large wall piece, your images remain crisp and clear,  <br> preserving every detail.`
            ]
        },
        {
            title: "",
            subtitle: "Effortless Quality Improvement",
            subtitleClass: "text-[20px] mt-4",
            paragraphs: [
                `Professional Results in Seconds. Enhancing and resizing photos has never <br> been easier. With Frametale, you don’t need editing skills—our AI does all <br> the work, delivering professional-quality images in just seconds. Enjoy <br> flawless results with zero effort.`
            ]
        }
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
            {/* Left Section with Image */}
            <div className="w-full md:w-1/2 flex justify-center sm:py-4">
                <img
                    src="/assets/thirdBlock2.svg"
                    alt="Block 1"
                    className="w-[90%] max-w-[350px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] h-auto"
                />
            </div>

            {/* Right Section with Text */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
                {thirdBlockContent.map((content, index) => (
                    <TextBlock
                        key={index}
                        title={content.title}
                        subtitle={content.subtitle}
                        subtitleClass={content.subtitleClass}
                        paragraphs={content.paragraphs}
                    />
                ))}
            </div>
        </div>
    );
};

export default ThirdBlock;
