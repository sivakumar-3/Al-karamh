import React, { useEffect, useState } from "react";
import Hero from "../components/home/hero";
import Header from "../components/navbar/header";
import Nav from "../components/navbar/nav";
import Whatweoffer from "../components/home/whatweoffer";
import TestimonialSection from "../components/home/testimonials";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Welcome from "../components/home/welcome";
import Footer from "../components/footer/footer";

export default function HomePage() {

  const [loading,setLoading] = useState(false);
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      <Hero  />
      <Welcome />
      <FeaturedProducts />
      <Whatweoffer />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
