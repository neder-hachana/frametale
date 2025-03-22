import { useState } from "react";

const Footer = () => {
    // Constants
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

    const socialIcons = ["twitter", "facebook", "linkedin", "instagram"];
    const paymentIcons = ["Visa", "PayPal", "Mastercard", "ApplePay"];
    const aboutItems = ["About Us", "Blog", "Team", "Career", "Contact"];
    const companyItems = ["Privacy", "Support", "Help Desk", "All Products", "For Investors"];
    const socialLinks = {
        linkedin: "https://www.linkedin.com/company/frametaleprinting/",
        twitter: "https://x.com/frametale?s=21&t=OoUEq6Pclnd2kyk0iLePqg",
        facebook: "https://www.facebook.com/share/15wngqkWrK/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/frametale_ai?igsh=MnZ4NHpyeWN2bzNo&utm_source=qr"
    };

    // Helper Function
    const renderList = (title, items) => (
        <div>
            <h3 className="font-bold mb-2 text-[18px]">{title}</h3>
            <ul className="space-y-1 text-[16px]">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    return (
        <footer className="text-[#4E4E4E] py-8 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 text-center md:text-left">
                {/* Section 1: Logo */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <img src="/assets/logo.svg" alt="Frametale Logo" className="mb-1 w-[157px] h-[29px]" />
                    <p className="text-[16px] text-[#B5B5B5]">
                        Be sure to take a look at <br /> our Terms of Use and <br /> Privacy Policy
                    </p>
                </div>

                {/* Section 2: About */}
                {renderList("About", aboutItems)}

                {/* Section 3: Company */}
                {renderList("Company", companyItems)}

                {/* Section 4: Subscribe */}
                <div className="space-y-6 w-full">
                    <h3 className="font-bold text-[18px] text-center md:text-left">Subscribe to our Newsletter</h3>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 w-full md:w-auto">
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
                                //"px-3 py-1.5 text-black border-2 border-[#EBEAED] rounded-full w-full md:w-[calc(100%-1rem)]"
                                className="px-4 py-2 font-[600] text-[12px] text-black placeholder-[#CDCDCD]  bg-[#FFFFFF] border-2 border-[#EBEAED] rounded-[25px] w-full sm:w-[220px] md:w-[calc(100%-1rem)]"
                            />

                            <button
                                type="submit"
                                disabled={!isValidEmail(email)} // Disable button if email is invalid
                                className={`bg-[#2ABBAD] text-white text-[16px] font-[500] px-4 py-1.5 rounded-full w-full md:w-[calc(50%-1rem) ] sm:w-auto
                                    ${!isValidEmail(email) ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                Subscribe
                            </button>

                        </form>
                    </div>

                    <div className="flex space-x-10 justify-center md:justify-start">
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={socialLinks[icon]} target="_blank" rel="noopener noreferrer">
                                <img src={`/assets/icon-${icon}.svg`} alt={icon} className="w-[18px] h-[18px]" />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap space-x-3 justify-center md:justify-start">
                        {paymentIcons.map((icon, index) => (
                            <img
                                key={index}
                                src={`/assets/${icon}.svg`}
                                alt={icon}
                                className="w-[54px] h-[37px] mb-3 md:mb-0"
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-[#B5B5B5] mt-6 pt-3">
                <p className="text-right text-[#B5B5B5] text-[16px]">© 2025 Frametale. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
