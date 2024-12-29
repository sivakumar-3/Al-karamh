import React, { useEffect, useState } from "react";
import { useLanguage } from "./../LanguageContext";
import data from './../../data/products.json'; // Import your JSON data

export default function Welcome() {
  const { language } = useLanguage(); // Get the selected language from context
  const [aboutUsContent, setAboutUsContent] = useState("");

  useEffect(() => {
    const selectedLanguage = language || 'en'; 

    // Access the correct language content directly from the imported JSON
    const aboutUsText = data.languages[selectedLanguage]?.homePageContent?.aboutUs || 'Content not available';
    setAboutUsContent(aboutUsText);
  }, [language]); // Re-run effect when the language changes

  return (
    <div className="max-w-5xl mx-auto">
      <div className="p-6 text-center">
        <h1 className="text-3xl lg:text-4xl lg:mt-20 font-bold text-[#2c6343] mb-4">
          {language === "en" ? "About Us" : "من نحن"}
        </h1>
        <p className="text-gray-600 text-xl lg:text-2xl mb-4">{aboutUsContent}</p>
      </div>
    </div>
  );
}
