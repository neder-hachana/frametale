const TextSection = () => {
    return (
        <div className="flex flex-col justify-start w-full py-2">
            <h2 className="text-[24px] sm:text-[29px] md:text-[34px] font-[800] font-poppins text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#2ABBAD] via-[#2ABBAD] to-[#0777AE]">
                Smooth Design Experience with AI!
            </h2>
            <p className="text-[#4E4E4E] font-poppins font-[600] text-[14px] sm:text-[12px] md:text-[14px] text-center sm:text-left">
                Create stunning photobooks, calendars, and prints in seconds with auto-layouts, AI color
                <br />
                palettes, and smart scaling.
            </p>
        </div>
    );
};

export default TextSection;
