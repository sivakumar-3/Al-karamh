import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";


export default function Header() {

  return (
    <header className="bg-green-800 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-sm">
        <Mail className="h-4 w-4" />
        <a 
          href="mailto:hamad@alkaramh.com"
          className="hover:underline"
        >
          hamad@alkaramh.com
        </a>
      </div>
      <div className="flex items-center space-x-2 text-sm ml-auto">
        <Phone className="h-4 w-4" />
        <a 
          href="tel:+97451088899"
          className="hover:underline"
        >
          +974 5108 8899
        </a>
      </div>
    </header>
  );
}
