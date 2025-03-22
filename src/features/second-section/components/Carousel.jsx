import PropTypes from 'prop-types';
import ImageCard from "../../../components/ImageCard";
import { motion } from "framer-motion";

const Carousel = ({ images }) => {
    const duplicatedImages = [...images, ...images]; // Duplicate images for infinite loop

    return (
        <div className="carousel-wrapper mt-6 sm:mt-10 overflow-hidden w-full">
            <motion.div
                className="carousel-content flex gap-4" // Added gap for spacing between items
                animate={{
                    x: ['0%', '-100%'], // Scroll from 0% to -100% for a continuous loop
                }}
                transition={{
                    ease: 'linear', // Smooth linear animation
                    duration: 15, // Adjust this to control speed
                    repeat: Infinity, // Repeat the animation infinitely
                }}
            >
                {/* Mapping through the duplicated images to create the carousel */}
                {duplicatedImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px]" // Fixed width for all images
                    >
                        <ImageCard
                            imageSrc={image.src}
                            title={image.title}
                            height="300px"
                            width="300px"
                            titlePosition="bottom"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Carousel;
