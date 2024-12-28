import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import defaultLogo from '../../images/logo.png';
import productData from '../../data/products.json'; // Import the product data

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Subscribe Section */}
          <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img src={defaultLogo} alt="Logo" className="max-h-24 max-w-24 object-contain bg-white p-2 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {'Stores of Al Karama Trading Company LLC'}
              </h2>
            </div>
            <p className="text-base sm:text-lg font-medium italic">"Purely Harvested, Perfectly Delivered"</p>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <p className="text-base leading-relaxed">
                Al Karam Store
                <br />
                Mazzraty Compound, Abu Nakhla
                <br />
                Street 646, Building 23
                <br />
                Doha, Qatar
              </p>
              <p className="text-base leading-relaxed">hamad@alkaramh.com</p>
              <p className="text-base leading-relaxed">+974 5108 8899</p>
            </div>
          </div>

          {/* Product Titles */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {productData.map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {["Call", "Email"].map((item) => (
                <li key={item}>
                  <Link to='/contact' className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">Pages</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <li>
                <Link to="/" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[#A4D165] flex flex-col items-center sm:flex-row sm:justify-between gap-4">
          <p className="text-sm sm:text-base font-medium text-center sm:text-left">
            &copy; 2024 Stores of Al Karama Trading Company LLC - All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/share/1CwyqPqktn/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4D7C0F] transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://x.com/karamh_al?s=11&t=sERtC0Gw0eM9kK0iawx6aA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4D7C0F] transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/al_karamh/profilecard/?igsh=d3k3a2E2czAxaHJ6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4D7C0F] transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
