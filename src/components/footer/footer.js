import { Facebook, Instagram} from "lucide-react";
import { Link } from "react-router-dom";
import defaultLogo from "../../images/logo.png";
import productData from "../../data/products.json";
import { useLanguage } from "./../LanguageContext";

const translations = {
  en: {
    companyName: "Stores of Al Karamh Trading Company LLC",
    slogan: "Purely Harvested, Perfectly Delivered",
    contactInfo: "Contact Info",
    address:
      "Al Karamah Store, My Farm Complex, Abu Nakhla, Street 646, Building 23, Doha, Qatar",
    email: "Email",
    phone: "Phone",
    products: "Featured products",
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
    address:
      "مخزن الكرامة، مجمع مزرعتي، أبو نخلة، شارع 646، مبنى 23، الدوحة، قطر",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    products: "المنتجات المميزة",
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

  const content =
    productData.languages[language] || productData.languages["en"];

  // Limit to the first 5 products
  const featuredProducts = content.products.slice(5, 10);

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img
                src={defaultLogo}
                alt="Logo"
                className="max-h-24 max-w-24 object-contain bg-white p-2 rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {t.companyName}
              </h2>
            </div>
            <p className="text-base sm:text-lg font-medium italic">
              {t.slogan}
            </p>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t.contactInfo}</h3>
              <p className="leading-relaxed text-sm">{t.address}</p>
              <p className="text-base leading-relaxed">
                {content.homePageContent.contactInfo?.email || t.email}
              </p>
              {[
                "+974 51088899",
                "+974 66261000",
                "+974 55545664",
                "+974 66269262",
              ].map((number) => (
                <p key={number} className="text-base leading-relaxed">
                  <a
                    href={`tel:${number.replace(/\s+/g, "")}`}
                    className="hover:text-[#4D7C0F] transition-colors duration-200"
                  >
                    {number}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t.products}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              {featuredProducts.map((product) => (
                <li key={product.id}>
                  <Link
                    to="/products"
                    className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                  >
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
              <a
                  href="tel:+974 66261000"
                  className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                >
                  {t.call}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hamad@alkaramh.com"
                  className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                >
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">{t.pages}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <li>
                <Link
                  to="/"
                  className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                >
                  {t.productsPage}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base hover:text-[#4D7C0F] transition-colors duration-200"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#A4D165] flex flex-col items-center sm:flex-row sm:justify-between gap-4">
          <p className="text-sm sm:text-base font-medium text-center sm:text-left">
            &copy; 2024 {t.companyName} - {t.copyright}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48" id="x-twitter">
              <path fill="#fff" d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z"></path>
            </svg>   
            </a>
            <a
              href="https://www.instagram.com/al_karamh/profilecard/?igsh=d3k3a2E2czAxaHJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4D7C0F] transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
            href="https://www.tiktok.com/@al_karamh?_t=8sXG0ara2Do&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4D7C0F] transition-colors duration-200"
          >
           <svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
