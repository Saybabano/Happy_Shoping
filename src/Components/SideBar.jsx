import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SideBar = () => {
  const categories = [
    'Category',
    'Gender',
    'Color',
    'Fabric',
    'Dial Shape',
    'Size',
    'Price',
    'Rating',
    'Occasion',
    'Combo',
    'Kurta Fabric',
    'Dupatta Color',
    'Discount',
    'Reversible',
    'Used For',
    'Smartecoins',
    'Body Material',
  ];

  const genderOptions = ['Boys', 'Girls', 'Men', 'Women'];
  const colorOptions = ['Red', 'Blue', 'Green', 'Black', 'White','Maroon'];
  const fabricOptions = ['Cotton', 'Silk', 'Wool', 'Linen', 'Polyester'];

  // State to manage open categories
  const [openCategory, setOpenCategory] = useState('');

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? '' : category); // Toggle open/close
  };

  return (
    <div className="w-[300px] p-4">
      {/* Sort By Dropdown */}
      <div className="mb-4 border border-gray-400">
        <select id="sort-by" className="p-2 border-none w-full outline-none text-gray-500">
          <option value="relevance">Sort by: <b>Relevance</b></option>
          <option value="popularity">Popularity</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      {/* Filters Section */}
      <div className="border border-gray-400 p-2 mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <p className="text-gray-600 mb-4 text-sm">1000+ Products</p>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          {/* Category Header */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleCategory(category)}
          >
            <h4 className="text-lg font-medium text-gray-800">{category}</h4>
            <span className={`transform transition-transform ${openCategory === category ? 'rotate-180' : ''}`}>
              <KeyboardArrowDownIcon/>
            </span>
          </div>

          {category === 'Gender' && openCategory && (
            <div className="space-y-2 grid grid-cols-3 gap-2 p-2 ">
                {genderOptions.map((Gender, idx) => (
                <p
                    key={idx}
                    className="w-20 border border-gray-300 rounded-full text-center p-1 cursor-pointer items-center hover:bg-blue-100 hover:border-blue-700 hover:text-blue-800 hover:font-bold"
                >
                     {Gender}
                </p>
                ))}
            </div>
            )}

          {/* Color Options */}
          {category === 'Color' && openCategory === 'Color' && (
            <div className=" grid grid-cols-3 gap-2 p-2 ">
              {colorOptions.map((color, idx) => (
                <p key={idx}
                    className=" border border-gray-300 rounded-full text-center p-1 cursor-pointer items-center hover:bg-blue-100 hover:border-blue-700 hover:text-blue-800 hover:font-bold"

                >{color}</p>
              ))}
            </div>
          )}

          {/* Fabric Options */}
          {category === 'Fabric' && openCategory === 'Fabric' && (
            <div className="mt-2">
              {fabricOptions.map((fabric, idx) => (
                <p key={idx} className="text-gray-700">{fabric}</p>
              ))}
            </div>
          )}

          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
