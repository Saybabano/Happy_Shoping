import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function HomeKitchen() {
  const products = [
    {
      id: 1,
      image: "https://images.meesho.com/images/products/495823079/emkyt_400.webp",
      ProductName: "Uniqe Kitchen Knives & Knife",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://images.meesho.com/images/products/236566204/qlgtv_400.webp",
      ProductName: "Classy Peeler",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://images.meesho.com/images/products/395639958/n1frp_400.webp",
      ProductName: "Wonderful Manual CHoppers & Classy",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-container/j/n/4/fridge-container-6-premium-fridge-storage-space-saving-original-imah2f5yh4cjkrga.jpeg?q=70",
      ProductName: "FEEDNIX Plastic Fridge Container",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kitchen-rack/f/e/q/gp-stainless-steel-spice-2-tier-trolley-container-organizer-original-imah83zethzzhhhy.jpeg?q=70",
      ProductName: "Pearl beads stylish women party clutch purse",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/kvtuxe80/container/d/b/3/3-glass-cosmetic-cream-containers-jars-with-golden-cap-for-original-imag8nffpswnx8qf.jpeg?q=70",
      ProductName: "nsb herbals Gold Plated Utility Container - 15 ml  (Pack of 3, Gold)",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/container/n/n/m/flowerblue-24-coolequal-original-imah8984rzgs8zmr.jpeg?q=70",
      ProductName: "NEXTVIEW Plastic Grocery Container - 1250 ml, 680 ml, ..",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/condiment-set/i/d/e/storagejar-glass-jar-grocery-container-kitchen-storage-masala-original-imah8puz3m8f7hnj.jpeg?q=70&crop=false",
      ProductName: "JIGSHTIAL Spice Set Glass",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kitchen-rack/1/q/f/dish-rack-24x18-umar-original-imag6y2hzusxgms3.jpeg?q=70",
      ProductName: "MAGS 4 Shelf 24 Inch Stainless Steel Wall Mount Kitchen...",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/612/612/jvb9tow0/cutlery-set/f/w/g/sstt14-woms-original-imafftdahbpqwqnv.jpeg?q=70",
      ProductName: "WOMS Stainless Steel Spoon stand / rack Steel Cutlery S...",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kitchen-trolley/q/t/2/4-3-layer-kitchen-trolley-with-wheels-kitchen-organizer-items-original-imah27tsn5hvsa5e.jpeg?q=70",
      ProductName: "LATESTTREND 3 Layer Trolley with Wheels Fruit & Vegetab...",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://rukminim2.flixcart.com/image/612/612/jl41nrk0/glass/v/g/f/stainless-steel-g5-12-limetro-original-imaf8a4zxwn2hyh8.jpeg?q=70",
      ProductName: "LIMETRO STEEL (Pack of 12) Stainless Steel G5-12 Glass ...",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/casserole/w/f/i/3-3-turquoise-casserole-combo-nariya-original-imah8s93hhgxkynh.jpeg?q=70",
      ProductName: "nariya NEW CASSEROLE SET COMES WITH 3 DIFFERENT CAPACIT...",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/casserole/c/h/b/1-37484-prestige-original-imagxzbbvv4btw8y.jpeg?q=70",
      ProductName: "Prestige Tri-ply Tope -14 cm, 1 L Cook and Serve Casser...",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/fork/l/c/l/stainless-steel-appetizer-forks-set-vortipu-no-original-imah8zqtgd2kuks9.jpeg?q=70",
      ProductName: "Vortipu Stainless Steel Gold Appetizer Forks Set - Dess...",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://rukminim2.flixcart.com/image/612/612/k51cpe80/casserole/v/a/v/1500ml-steel-ever-n-green-original-imafng3mmzd7phdg.jpeg?q=70",
      ProductName: "EVER N GREEN Stainless Steel Insulated Serving Casserol...",
      Price: '₹589',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews',


    },

  ]
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[230px] min-h-[420px] p-4 rounded-md shadow-md flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.ProductName}
              className="w-11/12 mx-auto"
            />
            <h5 className="mb-2">{product.ProductName}</h5>
            <p className="text-sm font-serif w-[110px] bg-green-200 text-gray-800 rounded-full p-1 mb-2">
              {product.Charges}
            </p>
            <div>
              <p className="bg-blue-700 w-12 rounded-full text-center text-white font-semibold inline-block mb-2">
                {product.rate}
              </p>
              <span className="p-2 text-sm">{product.reviews}</span>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <p className="font-bold">{product.Price}</p>
              <button className="p-2 border border-blue-700 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default HomeKitchen
