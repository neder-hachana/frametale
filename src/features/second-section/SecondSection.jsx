import React from "react";
import Carousel from "./components/Carousel";

const SecondSection = () => {
    const images = [
        { src: "/assets/slide1.svg", title: "Future Moments" },
        { src: "/assets/slide2.svg", title: "Love Moments" },
        { src: "/assets/slide3.svg", title: "Baby Moments" },
        { src: "/assets/slide4.svg", title: "Wedding Moments" },
        { src: "/assets/slide5.svg", title: "Family Moments" },
    ];

    return (
        <section className="flex flex-col items-center py-6 sm:py-8 px-4 sm:px-10 bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE]">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-8 mt-8 text-center text-white font-poppins">
                Tailored Elegance for Any Occasion
            </h2>

            {/* Carousel Component */}
            <Carousel images={images} />

            {/* Section Description */}
            <p className="text-white font-poppins text-center text-sm sm:text-base md:text-lg max-w-4xl mt-6 sm:mt-10 leading-relaxed">
                Memories take on new life when they’re more than just pixels on a screen. Holding them in your 
                hands, sharing those cherished moments with friends, and reliving the stories with family bring 
                a magic no device can replicate. In a world filled with digital conveniences, Photobooks endure 
                as eternal mementos—capturing moments that matter in a form you can truly hold close.
            </p>
        </section>
    );
};

export default React.memo(SecondSection);
