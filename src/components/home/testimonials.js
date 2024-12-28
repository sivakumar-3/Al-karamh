import React from "react";
import testimonial from "./../../images/home/testimonial.png";

const Testimonial = ({ quote, name, designation, imageSrc }) => (
  <div className="bg-sky-100 josefin-sans-heading rounded-xl shadow-xl">
    <div className="p-6">
      <blockquote className="text-gray-700 mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        <img
          src={imageSrc || testimonial}
          alt={name}
          width={60}
          className="rounded-xl mr-4"
        />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {

  // Default testimonials data
  const defaultTestimonials = [
    {
      quote: "High-quality feed and excellent service! My livestock are thriving.",
      name: "Ahmed R.",
      designation: "",
      imageSrc: testimonial,
    },
    {
      quote: "Reliable delivery every time. Great customer support too!",
      name: "Fatima A.",
      designation: "",
      imageSrc: testimonial,
    },
    {
      quote: "The search tool is super convenient, and the products are top-notch.",
      name: "Omar K.",
      designation: "",
      imageSrc: testimonial,
    },
    {
      quote: "Affordable prices with uncompromised quality. Highly recommend!",
      name: "Layla H.",
      designation: "",
      imageSrc: testimonial,
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 josefin-sans-heading text-[#2c6343]">
        What Our Customers are Saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {defaultTestimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
