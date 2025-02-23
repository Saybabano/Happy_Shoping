import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import Scrollbar from "./Scrollbar";
import DeliveryInfo from "./DeliveryInfo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 transition-all duration-300">
      {/* Navbar Container */}
      <div className="flex flex-wrap justify-between items-center border-b p-4 dark:border-gray-700">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif italic text-yellow-900 dark:text-white flex items-center">
        <img 
            src="https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-spa-logo-png-image_4721219.png" 
            alt="Logo" 
            className="navbar-logo rounded-full w-14 h-14"
          /> Happy <span className="block">Shopping</span>
          </h1> 

        {/* Delivery Info (Hidden on Small Screens) */}
        <div className="hidden lg:block">
          <DeliveryInfo />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-black dark:border-gray-500 rounded-md w-full sm:w-[400px] p-2">
          <SearchIcon className="text-blue-700 dark:text-white mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-gray-700 dark:text-white placeholder-gray-400 w-full"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Profile Link */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `relative flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-700 ${
                isActive ? "text-blue-700" : ""
              }`
            }
          >
            <PersonOutlineIcon />
            <span className="hover:underline">Profile</span>
          </NavLink>

          {/* Cart Link */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-700 ${
                isActive ? "text-blue-700" : ""
              }`
            }
          >
            <ShoppingCartOutlinedIcon />
            <span className="hover:underline">Cart</span>
          </NavLink>

          {/* Dark Mode Toggle (Switch) */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-white">Light</span>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
            />
            <span className="text-gray-700 dark:text-white">Dark</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-blue-700 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-800 shadow-md py-4 space-y-4">
          <NavLink to="/profile" className="text-gray-700 dark:text-white hover:text-blue-700">
            Profile
          </NavLink>
          <NavLink to="/cart" className="text-gray-700 dark:text-white hover:text-blue-700">
            Cart
          </NavLink>

          {/* Dark Mode Toggle (Mobile) */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-white">Light</span>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
            />
            <span className="text-gray-700 dark:text-white">Dark</span>
          </div>
        </div>
      )}

      <Scrollbar />
    </div>
  );
}

export default Navbar;
