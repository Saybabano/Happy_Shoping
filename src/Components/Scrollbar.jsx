import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Scrollbar = () => {
  const navRef = useRef(null);

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center p-4">
      {/* Left Arrow */}
      <button
        className="absolute left-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Scrollable Navbar (Locked for manual scrolling) */}
      <div
        ref={navRef}
        className="flex justify-between space-x-14 px-10 mx-3 ml-14 "
        style={{
          overflowX: "hidden", // Hides scrollbar and prevents manual scrolling
          whiteSpace: "nowrap",
        }}
      >
        {[
          { to: "/Fashion", label:"Fashion"},
          { to: "/VegetablesFruits", label: "Vegetables & Fruits" },
          { to: "/Mobiles", label: "Mobiles" },
          { to: "/Electronics", label: "Electronics" },
          { to: "/HomeKitchen", label: "Home & Kitchen" },
          { to: "/BeautyHealth", label: "Beauty & Health" },
          { to: "/BakeryBiscuit", label: "Bakery & Biscuits" },
          { to: "/BagsFootwear", label: "Bags & Footwear" },
          { to: "/FoodDrinks", label: "Food & Drinks" },
          { to: "/MusicalInstruments", label: "Musical Instruments" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `relative after:content-[''] after:block after:w-0 after:h-1 after:bg-blue-700 after:transition-all after:duration-300 after:mt-1 hover:text-blue-700 hover:after:w-full ${
                isActive ? "text-blue-700 after:w-full" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 "
        onClick={scrollRight}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Scrollbar;
