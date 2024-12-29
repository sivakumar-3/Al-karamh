import React, { useEffect, useState } from "react";
import testimonialImage from "./../../images/home/testimonial.png";
import { useLanguage } from "./../LanguageContext";
import data from "./../../data/products.json"; // Import your JSON data

export default function TestimonialSection() {
  const { language } = useLanguage();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchTestimonials = () => {
      const selectedLanguage = language || "en"; // Fallback to 'en' if language is undefined
      const reviews =
        data.languages[selectedLanguage]?.homePageContent?.customerReviews || []; // Ensure reviews exist
      setContent(reviews);
    };

    fetchTestimonials();
  }, [language]);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 josefin-sans-heading text-[#2c6343]">
        {language === "en" ? "What Our Customers Are Saying?" : "ماذا يقول عملاؤنا؟"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.length > 0 ? (
          content.map((testimonial, index) => (
            <div
              key={index}
              className="bg-sky-100 josefin-sans-heading rounded-xl shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={testimonialImage} // Placeholder image
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-xl mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            {language === "en"
              ? "No testimonials available at the moment."
              : "لا توجد شهادات متاحة في الوقت الحالي."}
          </p>
        )}
      </div>
    </section>
  );
}
