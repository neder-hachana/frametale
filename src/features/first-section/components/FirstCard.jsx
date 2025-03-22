import { useState } from "react";

const FirstCard = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(""); // 'success', 'error', or ''

    // Replace this with your actual Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbwB-UkQZeMdwOw9JcJBUCgV3QLSbwFHqqViCPegHAEkGkYQvAyXzz_J-2lKWpJrgXAl/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const timestamp = new Date().toISOString();

        try {
            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors", // Important for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, timestamp }),
            });

            setStatus("success");
            setEmail(""); // Clear input after success
        } catch (error) {
            console.error("Error!", error.message);
            setStatus("error");
        }
    };

    // Simple email validation
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    return (
        <div className="flex flex-col md:flex-row rounded-[32px] bg-gradient-to-r from-[#2ABBAD] to-[#0777AE] w-full max-w-[765px] h-auto md:h-[200px] mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-[200px] rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none overflow-hidden">
                <img
                    src="/assets/photo-books-all-sizes.svg"
                    alt="Image"
                    className="w-full h-[160px] sm:h-[180px] md:h-full md:w-[200px] object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 text-center md:text-left">
                <h2 className="text-[13px] sm:text-[14px] md:text-[15px] font-[600] text-[#FFFFFF]">New to FRAMETALE?</h2>
                <p className="mt-2 text-[20px] sm:text-[22px] md:text-[24px] font-[800] text-[#FFFFFF]">Save 30% on your first order</p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-[600] text-[#FFFFFF]">by signing up for our newsletter</p>

                {/* Input and Button Section */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required
                        className="px-4 py-2 font-[600] text-[12px] text-black placeholder-[#CDCDCD] bg-[#FFFFFF] rounded-[25px] w-full sm:w-[220px] md:w-[241px]"
                    />

                    <button
                        type="submit"
                        disabled={!isValidEmail(email)} // Disable button if email is invalid
                        className={`border ${isValidEmail(email) ? "border-white" : "border-gray-400 opacity-50 cursor-not-allowed"
                            } text-[12px] font-[600] text-[#FFFFFF] px-4 py-2 rounded-[22px] w-full sm:w-auto`}
                    >
                        Continue
                    </button>
                </form>

                {/* Status messages */}
                {status === "success" && (
                    <p className="text-[12px] sm:text-[12px] md:text-[12px] font-[600] text-[#FFFFFF]">Thank you for subscribing!</p>
                )}
                {status === "error" && (
                    <p className="text-red-300 text-[12px] sm:text-[12px] md:text-[12px] font-[600] text-[#FFFFFF]">Something went wrong. Please try again.</p>
                )}
            </div>
        </div>
    );
};

export default FirstCard;
