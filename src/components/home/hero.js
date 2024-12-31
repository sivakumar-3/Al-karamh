import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero1 from "./../../images/home/hero_img.jpg";
import hero2 from './../../images/home/hero2.jpg'
import hero3 from './../../images/home/hero3.jpg'
import hero4 from './../../images/home/hero4.jpg'
import hero5 from './../../images/home/hero5.jpg'
import hero6 from './../../images/home/hero6.jpg'
import hero7 from './../../images/home/hero7.jpg'
import hero8 from './../../images/home/hero8.jpg'

export default function Hero({ banners = { desktop: [], mobile: [] } }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  // Determine slides based on device type (desktop or mobile)
  const slides = isMobile 
    ? (banners.mobile?.length > 0 ? banners.mobile : [hero1,hero2,hero3,hero4,hero5,hero6,hero7,hero8]) 
    : (banners.desktop?.length > 0 ? banners.desktop : [hero1,hero2,hero3,hero4,hero5,hero6,hero7,hero8]);

  // Adjust `isMobile` when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="flex-grow relative">
      {/* Carousel Wrapper */}
      <div className="h-screen overflow-hidden relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Carousel Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white scale-110" 
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
