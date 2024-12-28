import { ArrowRight, Truck, Search, Award, Clock, Subtitles } from "lucide-react";
import honeyimg from "./../../images/home/honey.png";


export default function Whatweoffer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold josefin-sans-heading text-[#2c6343] text-center mb-8 text-gray-700">What we Offer!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Truck className="h-12 w-12 text-orange-500" />, title: "Shipping",Subtitles:'We offer reliable and timely delivery services to ensure your animal feed products reach you in perfect condition. Customer satisfaction is our top priority in every shipment.' },
            { icon: <Search className="h-12 w-12 text-blue-500" />, title: "Easy Search",Subtitles:'Quickly find the animal feed products you need with our user-friendly search tools, designed to save you time and effort.' },
            { icon: <Award className="h-12 w-12 text-yellow-500" />, title: "Quality Products",Subtitles:'Quickly find the animal feed products you need with our user-friendly search tools, designed to save you time and effort.' },
            { icon: <Clock className="h-12 w-12 text-green-500" />, title: "On-time Delivery",Subtitles:'We guarantee prompt and dependable delivery, ensuring your orders arrive exactly when you need them.' },
          ].map((item, index) => (
            <div key={index} className="text-center border-md bg-white  p-4 rounded-lg shadow-xl">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg josefin-sans-heading font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm josefin-sans-heading text-gray-600">
                {item.Subtitles}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
