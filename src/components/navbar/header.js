import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from './../LanguageContext';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-green-800 text-white py-2 px-4 flex justify-between items-center">
      {/* Email */}
      <div className="flex items-center space-x-2 text-sm">
        <Mail className="h-4 w-4" />
        <a href="mailto:hamad@alkaramh.com" className="hover:underline">
          hamad@alkaramh.com
        </a>
      </div>
      
      {/* Phone and Language Toggle */}
      <div className="flex items-center text-sm ml-auto gap-10">
        {/* Phone */}
        <span className="space-x-2 flex items-center">
          <Phone className="h-4 w-4" />
          <a href="tel:+97451088899" className="hover:underline">
            +974 5108 8899
          </a>
        </span>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="text-white hover:underline text-base"
          aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          {language === 'en' ? 'عربي' : 'English'}
        </button>
      </div>
    </header>
  );
}
