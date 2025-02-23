import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Mobiles() {
  const products = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/61rriyfRKwL._AC_UF1000,1000_QL80_.jpg",
      ProductName: "Apple iPhone 16 Pro Max (256 Go) - Titane Sable",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://images.jdmagicbox.com/quickquotes/images_main/oneplus-8-ram-12-gb-256-gb-onyx-black-184491740-g6yt2.png",
      ProductName: "ONEPLUS 8 Mobile Phone (12GB, 256GB, Onyx Black)",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/51zmjtNE6EL._AC_UF1000,1000_QL80_.jpg",
      ProductName: "OnePlus Nord 3 Dual-SIM 256GB ROM + 16GB RAM (Only GSM |",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/51Ha+7qs5JL._AC_UF1000,1000_QL80_.jpg",
      ProductName: "OnePlus 10 Pro Dual Sim - 256 GB, 12 GB RaM, Volcanic Black - NE221",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord4.jpg",
      ProductName: "Pearl beads stylish women party clutch purse",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71JTIdBUvYL._AC_UF1000,1000_QL80_.jpg",
      ProductName: "Google Pixel 8a – Unlocked Android smartphone with advanced Pixel",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold2.jpg",
      ProductName: "The best-sounding smartphones",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=90&crop=false",
      ProductName: "vivo Y200 5G ( 128 GB Storage, 8 GB RAM )",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://www.themobileindian.com/wp-content/uploads/2021/06/Vivo-Y30.jpg",
      ProductName: "Top 5 Competitors of Vivo Y30",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://fdn2.gsmarena.com/vv/bigpic/hmd-110-4g-.jpg",
      ProductName: "Men's full Sleeve Regular Polo Cotton Blend Tshirt",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/382270860/AB/MC/VQ/48530103/oneplus-nord-3-5g-misty-green-8gb-ram-128gb-storage-500x500.jpg",
      ProductName: "Aqua Surge Slim OnePlus Nord CE 3 5G Mobile",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://www.godigit.com/content/dam/godigit/directportal/en/vivo-y200-pro-mobile.JPG",
      ProductName: "Top 16 Vivo Mobiles Under ₹25000 in India in 2025 with Prices ",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "https://image.oppo.com/content/dam/oppo/it/mkt/smartphones/series-a/A53s-navigation-blue-v2.png",
      ProductName: "OPPO Mobile Phones - Smartphone List | OPPO South",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://m.media-amazon.com/images/I/41LOMRbrljL.jpg",
      ProductName: "CMF BY NOTHING Phone 1 5G (128 GB) (8 GB RAM) (Light Green) :",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://www.godigit.com/content/dam/godigit/directportal/en/oppo-f21-pro.jpg",
      ProductName: "Cotton Back Printed Boxy T-shirt",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://cdn.storech.com/uploads/products/000/000/000/000/017/269/300_1654159705-1647772211-web-chapser-5x5-maxeri-hamar-two-sides-.png",
      ProductName: "Adrika Voguish Women Kurta Sets",
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

export default Mobiles
