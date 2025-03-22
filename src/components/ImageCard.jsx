import PropTypes from 'prop-types';

const ImageCard = ({ imageSrc, title, height, width, titlePosition = 'top', footerImage }) => {
    const titleClass = `absolute text-white text-xl font-bold px-4 ${titlePosition === 'top' ? 'top-4 left-4' : 'bottom-4 left-4'}`;

    return (
        <div
            className="relative rounded-[32px]"
            style={{ height, width }}
        >
            {/* Title */}
            {title && (
                <div className={titleClass}>
                    {title}
                </div>
            )}

            {/* Image */}
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover rounded-[32px]"
            />

            {/* Footer Image (optional) */}
            {footerImage && (
                <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 z-10">
                    <img
                        src={footerImage}
                        alt="Footer"
                        className="object-contain"
                        style={{ width: '197px', height: '44px' }}
                    />
                </div>
            )}
        </div>
    );
};

ImageCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    titlePosition: PropTypes.oneOf(['top', 'bottom']),
    footerImage: PropTypes.string,
};

export default ImageCard;
