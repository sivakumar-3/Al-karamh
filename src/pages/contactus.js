import React, { useState } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from '../components/footer/footer';
import Nav from '../components/navbar/nav';
import Header from '../components/navbar/header';
import { useLanguage } from "./../components/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const selectedLanguage = language || "en";

  const translations = {
    en: {
      aboutUsTitle: "Information About Us",
      aboutUsContent:
        "Welcome to our store. We're dedicated to providing you with the finest quality products and exceptional service.",
      getInTouchTitle: "Get In Touch",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Type Your Message",
      sendMailButton: "Send Mail",
      contactWayTitle: "Contact Way",
      contactEmail: "Email",
      contactPhone: "Phone",
      contactAddress: "Address",
      addressDetails:
        "Al Karam Store, Mazzraty Compound, Abu Nakhla, Street 646, Building 23, Doha, Qatar",
    },
    ar: {
      aboutUsTitle: "معلومات عنا",
      aboutUsContent:
        "مرحبًا بكم في متجرنا. نحن ملتزمون بتزويدكم بأفضل جودة للمنتجات وخدمة استثنائية.",
      getInTouchTitle: "ابقى على تواصل",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      subjectPlaceholder: "الموضوع",
      messagePlaceholder: "اكتب رسالتك",
      sendMailButton: "إرسال البريد",
      contactWayTitle: "وسائل الاتصال",
      contactEmail: "البريد الإلكتروني",
      contactPhone: "الهاتف",
      contactAddress: "العنوان",
      addressDetails:
        "مخزن الكرامة، مجمع مزرعتي، أبو نخلة، شارع 646، مبنى 23، الدوحة، قطر",
    },
  };

  const content = translations[selectedLanguage];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl =
      "https://script.google.com/macros/s/AKfycbzsZEqQagK-yvhT51uE5RpJToK0W5qpYiperIXHHkG-v_lwqxR9J5B1xmfQsjlKyrM6/exec";

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time_stamp: getIndianTime()
    };

    fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(content.messageSentSuccess);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert(content.messageSentError);
      });
  };

  function getIndianTime() {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const currentTime = new Date().toLocaleString("en-IN", options);
    return currentTime.replace(",", "");
  }

  return (
    <>
      <Header />
      <Nav />
      <div className="container mx-auto lg:mx-[15%] w-[85%] px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{content.aboutUsTitle}</h2>
              <p className="text-gray-600 mb-4">{content.aboutUsContent}</p>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">{content.getInTouchTitle}</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={content.namePlaceholder}
                    className="border rounded p-2 w-full"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={content.emailPlaceholder}
                    className="border rounded p-2 w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder={content.subjectPlaceholder}
                  className="border rounded p-2 w-full"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder={content.messagePlaceholder}
                  rows={4}
                  className="border rounded p-2 w-full"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">
                  {content.sendMailButton}
                </button>
              </form>
            </section>
          </div>
          <div className="md:w-1/2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{content.contactWayTitle}</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Mail className="text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold">{content.contactEmail}</p>
                    <p className="text-gray-600">hamad@alkaramh.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Phone className="text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold">{content.contactPhone}</p>
                    <p className="text-gray-600">+974 5108 8899</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <MapPin className="text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold">{content.contactAddress}</p>
                    <p className="text-gray-600">{content.addressDetails}</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="relative w-full h-[300px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3611.0111967980533!2d51.2757453753809!3d25.169099777729063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEwJzA4LjgiTiA1McKwMTYnNDIuMCJF!5e0!3m2!1sen!2sin!4v1735400727164!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
