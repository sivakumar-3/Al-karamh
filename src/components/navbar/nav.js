import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import defaultLogo from "../../images/logo.png";
import productData from "../../data/products.json";

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productData);
  }, []);

  useEffect(() => {
    const filtered = products?.filter((product) =>
      product?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProductClick = () => {
    navigate(`/products`);
  };

  return (
    <nav className={`bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center shadow-md ${menuOpen ? "bg-white" : ""}`}>
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="mb-2 md:mb-0">
          <img 
            src={defaultLogo} 
            alt="Logo" 
            className="h-14 lg:h-20" 
          />
        </Link>
        <div className="relative lg:hidden block flex items-center mt-2 md:ml-auto">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2.5 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
          </div>
          {searchTerm && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => handleProductClick()}
                  >
                    {product.name}
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-500 text-center">No products found</div>
              )}
            </div>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} absolute md:static top-12 left-0 w-full bg-white md:bg-transparent`}>
        {menuOpen && (
          <div className="absolute inset-0 bg-white z-10" onClick={() => setMenuOpen(false)} />
        )}
        <div className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 relative z-20`}>
          <button onClick={() => setMenuOpen(false)} className="md:hidden mb-2 flex items-center">
            <X className="h-6 w-6 text-green-800" />
          </button>
          <Link to="/" className="text-green-800 hover:text-green-600">Home</Link>
          <Link to="/products" className="text-green-800 hover:text-green-600">Products</Link>
          <Link to="/contact" className="text-green-800 hover:text-green-600">Contact Us</Link>
        </div>
      </div>
      <div className="relative lg:block hidden flex items-center mt-2 md:ml-auto">
        <div className="relative">
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-64 p-2.5 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </div>
        {searchTerm && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleProductClick(product.id)}  // Navigate to product page
                >
                  {product.name}
                </div>
              ))
            ) : (
              <div className="p-3 text-gray-500 text-center">No products found</div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
