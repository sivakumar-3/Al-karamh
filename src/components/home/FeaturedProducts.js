import React, { useEffect, useState } from "react";
import ProductCard from "./../product/productcard";
import productsData from "../../data/products.json"; // Adjust the path based on your file structure.

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Directly use the first 4 products from the JSON
    setProducts(productsData.slice(0, 4));
  }, []);

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold josefin-sans-heading text-[#2c6343] text-center mb-6">
          Featured Products
        </h2>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
