import { useState} from 'react'
import { NavLink } from 'react-router-dom';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Scrollbar from './ScrollBar';
import DarkModeToggle from './DarkModeToggle';
import DeliveryInfo from './DeliveryInfo';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <>
      <div className='shadow-md '>
        <div className="flex justify-around items-center border-b p-2">
          <h1 className=" text-2xl font-bold font-serif italic text-blue-700 mr-4">Happy <span className=' block'>Shoping</span></h1>
          <DeliveryInfo/>
          <div className="flex items-center p-2 border border-black rounded-md w-full sm:w-auto my-2 sm:my-0">
              <SearchIcon className="text-blue-700 mr-2" />
              <input
                type="text"
                placeholder="Search for Product Code,and More"
                className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-full sm:w-[400px]"
              />
            </div>
            <div className="mr-5">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `relative flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-700 ${
                    isActive ? "text-blue-700" : ""
                  } hidden sm:flex`
                }
              >
                <PersonOutlineIcon />
                <span className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                  Profile
                </span>
              </NavLink>
            </div>
            <div className="mr-5">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `relative flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-700 ${
                    isActive ? "text-blue-700" : ""
                  } hidden sm:flex`
                }
              >
                <ShoppingCartOutlinedIcon />
                <span className="relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-blue-700 after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Cart
                </span>
              </NavLink>
            </div>
            <DarkModeToggle/>

          <button
            className="block sm:hidden text-blue-700"
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
        <Scrollbar/>
      </div>
    </>
  );
}

export default Navbar;
