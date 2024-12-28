import React, { useEffect, useState } from "react";
import ProductCard from "./productcard";
import productData from "../../data/products.json"; // Import the JSON file

export default function RelatedProducts({ currentProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!currentProduct) return;

    const relatedProducts = productData.filter(
      (product) => product.id !== currentProduct.id
    );

    // Shuffle and limit to 4 products
    const shuffledProducts = relatedProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setProducts(shuffledProducts);
  }, [currentProduct]);

  if (products.length === 0) return null;

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c6343] text-center mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
