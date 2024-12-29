import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import defaultLogo from '../../images/logo.png';
import productData from '../../data/products.json';
import { useLanguage } from './../LanguageContext';

const translations = {
  en: {
    companyName: "Stores of Al Karama Trading Company LLC",
    slogan: "Purely Harvested, Perfectly Delivered",
    contactInfo: "Contact Info",
    address: "Al Karamah Store, My Farm Complex, Abu Nakhla, Street 646, Building 23, Doha, Qatar",
    email: "Email",
    phone: "Phone",
    products: "Our Products",
    customerCare: "Customer Care",
    call: "Call",
    pages: "Pages",
    home: "Home",
    contact: "Contact Us",
    productsPage: "Products",
    copyright: "All Rights Reserved",
  },
  ar: {
    companyName: "متاجر شركة الكرامة التجارية ذ.م.م",
    slogan: "محصود بشكل طبيعي ، يتم تسليمه بشكل مثالي",
    contactInfo: "معلومات الاتصال",
    address: "مخزن الكرامة، مجمع مزرعتي، أبو نخلة، شارع 646، مبنى 23، الدوحة، قطر",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    products: "منتجاتنا",
    customerCare: "رعاية العملاء",
    call: "اتصال",
    pages: "الصفحات",
    home: "الرئيسية",
    contact: "اتصل بنا",
    productsPage: "المنتجات",
    copyright: "جميع الحقوق محفوظة",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const content = productData.languages[language] || productData.languages['en'];

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img src={defaultLogo} alt="Logo" className="max-h-24 max-w-24 object-contain bg-white p-2 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t.companyName}</h2>
            </div>
            <p className="text-base sm:text-lg font-medium italic">{t.slogan}</p>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t.contactInfo}</h3>
              <p className="leading-relaxed text-sm">{t.address}</p>
              <p className="text-base leading-relaxed">{content.homePageContent.contactInfo?.email || t.email}</p>
              <p className="text-base leading-relaxed">{content.homePageContent.contactInfo?.phone || t.phone}</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t.products}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {content.products.map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t.customerCare}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <li>
                <a href="tel:+97451088899" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                  {t.call}
                </a>
              </li>
              <li>
                <a href="mailto:hamad@alkaramh.com" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t.pages}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <li>
                <Link to="/" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">{t.home}</Link>
              </li>
              <li>
                <Link to="/products" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">{t.productsPage}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-base hover:text-[#4D7C0F] transition-colors duration-200">{t.contact}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#A4D165] flex flex-col items-center sm:flex-row sm:justify-between gap-4">
          <p className="text-sm sm:text-base font-medium text-center sm:text-left">
            &copy; 2024 {t.companyName} - {t.copyright}
          </p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4D7C0F] transition-colors duration-200">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4D7C0F] transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4D7C0F] transition-colors duration-200">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
