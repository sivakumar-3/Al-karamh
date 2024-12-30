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
    <header className="bg-green-800 text-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
      {/* Email */}
      <div className="flex items-center space-x-2 text-sm">
        <Mail className="h-4 w-4" />
        <a href="mailto:hamad@alkaramh.com" className="hover:underline">
          hamad@alkaramh.com
        </a>
      </div>

      {/* Phone Numbers */}
      <div className="flex flex-wrap items-center justify-center space-x-4 text-sm">
        {phoneNumbers.map((number) => (
          <div key={number} className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a
              href={`tel:${number.replace(/\s+/g, "")}`}
              className="hover:underline"
            >
              {number}
            </a>
          </div>
        ))}
      </div>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="hover:underline text-base bg-white rounded-full text-green-800 px-5 py-1"
        aria-label={
          language === "en" ? "Switch to Arabic" : "Switch to English"
        }
      >
        {language === "en" ? "عربي" : "English"}
      </button>
    </header>
  );
}
