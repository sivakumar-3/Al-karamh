import React, { useEffect, useState } from "react";
import ProductCard from "./../product/productcard";
import { useLanguage } from './../LanguageContext'; // Assuming you have a LanguageContext
import productsData from "../../data/products.json"; // Adjust the path based on your file structure

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const { language } = useLanguage(); // Get the current language (either 'en' or 'ar')

  useEffect(() => {
    // Update products based on selected language
    const languageProducts = productsData.languages[language].products.slice(0, 4).map((product) => ({
      ...product,
      name: product.name, // Use the product name based on the current language
    }));
    setProducts(languageProducts);
  }, [language]); // Re-run effect when language changes

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold josefin-sans-heading text-[#2c6343] text-center mb-6">
          Featured Products
        </h2>
  
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </section>
  );  
}
