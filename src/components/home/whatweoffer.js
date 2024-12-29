import { Truck, Search, Award, Clock } from "lucide-react";
import { useLanguage } from "./../LanguageContext";
import data from "./../../data/products.json"; // Import your JSON data
import React, { useEffect, useState } from "react";

export default function Whatweoffer() {
  const { language } = useLanguage();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const selectedLanguage = language || "en"; 
    const whatWeOfferContent = data.languages[selectedLanguage]?.homePageContent?.whatWeOffer || [];
    setContent(whatWeOfferContent);
  }, [language]);

  const icons = [
    <Truck className="h-12 w-12 text-orange-500" />,
    <Search className="h-12 w-12 text-blue-500" />,
    <Award className="h-12 w-12 text-yellow-500" />,
    <Clock className="h-12 w-12 text-green-500" />,
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold josefin-sans-heading text-[#2c6343] text-center mb-8 text-gray-700">
          What We Offer!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="text-center border-md bg-white p-4 rounded-lg shadow-xl"
            >
              <div className="mb-4 flex justify-center">{icons[index]}</div>
              <h3 className="text-lg josefin-sans-heading font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm josefin-sans-heading text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
