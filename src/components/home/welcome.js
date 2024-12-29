import React, { useEffect, useState } from "react";
import { useLanguage } from "./../LanguageContext";
import data from "./../../data/products.json"; // Import your JSON data

export default function Welcome() {
  const { language } = useLanguage(); // Get the selected language from context
  const [aboutUsContent, setAboutUsContent] = useState("");

  useEffect(() => {
    const selectedLanguage = language || "en";

    // Access the correct language content directly from the imported JSON
    const aboutUsText =
      data.languages[selectedLanguage]?.homePageContent?.aboutUs ||
      "Content not available";
    setAboutUsContent(aboutUsText);
  }, [language]); // Re-run effect when the language changes

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center">
        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img
            src="/images/products/md_pic.jpg"
            alt="MD picture"
            className="w-auto lg:max-w-full rounded-md shadow-md h-[450px]"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-2/3 flex flex-col justify-center text-center lg:text-left p-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2c6343] mb-4">
            {language === "en" ? "About Us" : "من نحن"}
          </h1>
          <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed">
            {aboutUsContent}
          </p>
        </div>
      </div>
    </div>
  );
}
