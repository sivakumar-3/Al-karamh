import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useLanguage } from "./../LanguageContext";

const ProductCard = ({ product }) => {
  const { language } = useLanguage();
  const [addingToCart, setAddingToCart] = useState(false);
  const selectedLanguage = language || "en";

  const handleOrderNow = () => {
    setAddingToCart(true);
    setTimeout(() => {
      setAddingToCart(false);
      const whatsappLink = `https://wa.me/+97466261000?text=Hello,%20I%20would%20like%20to%20place%20an%20order%20for%20${encodeURIComponent(
        product.name
      )}.`;
      window.open(whatsappLink, "_blank");
    }, 2000);
  };

  const orderNowText =
    selectedLanguage === "en" ? "Order Now" : "اطلب الآن";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-xl p-4">
      <div>
        <div className="relative pb-[75%] mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl object-center"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-[#2E7D32] text-1xl font-medium w-full overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </h3>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <button
          className="w-full bg-[#86B84E] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#76a343] transition duration-200"
          onClick={handleOrderNow}
        >
          {addingToCart ? (
            <div className="flex items-center justify-center">
              <HashLoader color="#ffffff" size={24} />
            </div>
          ) : (
            <span>{orderNowText}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
