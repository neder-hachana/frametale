import PropTypes from "prop-types";

const TextBlock = ({ title, subtitle, paragraphs, subtitleClass }) => {
  return (
    <div className="pl-4">
      {/* Title */}
      <h2 className="text-[24px] md:text-[23px] font-[800] font-poppins text bg-clip-text text-transparent bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE]">
        {title}
      </h2>
      
      {/* Subtitle */}
      <h3 className={`text-Poppins font-[800] text-[20px] md:text-[20px] text-[#4E4E4E] ${subtitleClass}`}>
        {subtitle}
      </h3>
      
      {/* Paragraphs */}
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="text-[#4E4E4E] text-Poppins text-[12px] md:text-[13px]"
          dangerouslySetInnerHTML={{ __html: text }} // Render HTML (including <br>)
        />
      ))}
    </div>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitleClass: PropTypes.string 
};

export default TextBlock;
