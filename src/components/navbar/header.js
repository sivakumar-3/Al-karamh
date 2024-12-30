import React from "react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "./../LanguageContext";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  // Array of phone numbers for cleaner and dynamic handling
  const phoneNumbers = [
    "+974 51088899",
    "+974 66261000",
    "+974 55545664",
    "+974 66269262",
  ];

  return (
    <header className="bg-green-800 text-white py-2 px-4 flex justify-between items-center flex-col sm:flex-row sm:space-x-4">
      {/* Left side: Email and one Phone Number */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:hamad@alkaramh.com" className="hover:underline">
            hamad@alkaramh.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <a
            href={`tel:${phoneNumbers[0].replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {phoneNumbers[0]}
          </a>
        </div>
      </div>

      {/* Right side: Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="hover:underline text-base bg-white rounded-full text-green-800 px-5 py-1 mt-2 sm:mt-0"
        aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      >
        {language === "en" ? "عربي" : "English"}
      </button>
    </header>
  );
}
