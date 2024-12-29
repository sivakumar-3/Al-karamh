import React, { useState, useEffect } from 'react';
import Header from '../components/navbar/header';
import Nav from '../components/navbar/nav';
import { useLanguage } from "./../components/LanguageContext";
import ProductDetailsHeader from '../components/product/ProductDetailsHeader';
import Footer from '../components/footer/footer';
import ProductCard from '../components/product/productcard';
import HashLoader from 'react-spinners/HashLoader';
import productData from './../data/products.json'; // Import the JSON file

export default function Products() {
  const { language } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      const selectedLanguage = language || "en";
      const productlist = productData.languages[selectedLanguage]?.products || [];
      setProducts(productlist);
      setLoading(false); // Set loading to false after fetching products
    };

    fetchProducts();
  }, [language]);

  return (
    <>
      <Header />
      <Nav />
      <ProductDetailsHeader
        title="Products"
        breadcrumbs={[
          { text: 'Home', link: '/' },
          { text: 'Products', link: '/products' },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <main>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <HashLoader color="#86B84E" size={50} />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">
                  {language === "en" ? "Latest Products" : "أحدث المنتجات"}
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
