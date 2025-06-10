"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isSelected, setIsSelected] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero"},
    { label: "About", href: "#about"},
    { label: "Experience", href: "#experience"},
    // { label: "Projects", href: "#projects"},
    { label: "Contact", href: "#contact"},
  ];

  return (
    <nav className="fixed top-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 px-4">

      <div className="relative z-50">
      {/** Web view */}
      <div className="bg-gray-900 backdrop:blur-sm border border-gray-800 shadow-md rounded-full px-6 py-2 flex items-center space-x-6 hidden md:flex">
          {
            navItems.map((navItem) => (
              <a key={navItem.href} href={navItem.href} className="text-sm font-medium text-gray-400 hover:text-gray-200 transition">{navItem.label}</a>
            ))
          }
      </div>

      
      <button className="md:hidden text-gray-400 hover:text-gray-200 transition z-60" onClick={() => setIsSelected(!isSelected)}>
        {isSelected ? <X size={20}/> : <Menu size={20}/>}
      </button>
      </div>

      {/** Mobile view */}

      <div className={`md:hidden top-0 left-0 w-1/2 fixed z-40 inset-0 transform transition-transform duration-300 ease-in-out ${isSelected ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mt-2 rounded-xl shadow-sm bg-gray-900 backdrop:blur-lg border border-gray-800 shadow-md p-8 flex flex-col md:hidden space-y-6 h-full justify-center text-center">
          {
            navItems.map((navItem) => (
              <a key={navItem.href} href={navItem.href} onClick={() => setIsSelected(false)} className="text-sm font-medium text-gray-400 hover:text-gray-200 transition">{navItem.label}</a>
            ))
          }
        </div>
      </div>
    </nav>
  )
}