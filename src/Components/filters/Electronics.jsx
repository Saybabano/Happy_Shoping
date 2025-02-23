import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Electronics() {
    const products = [
        {
          id: 1,
          image: "https://m.media-amazon.com/images/I/31lYlI1JNlL._AC._SR120,120.jpg",
          ProductName: "Projector Remote with Timer & Sle",
          Price: '₹549',
          Charges: "Free Delivery",
          rate: '4.5',
          reviews: '1234 reviews'
    
        },
        {
          id: 2,
          image: "https://m.media-amazon.com/images/I/5155XZ+EHyL._AC._SR240,240.jpg",
          ProductName: "Media Streaming Device and Remote with Timer & Sle",
          Price: '₹599',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
        },
        {
          id: 3,
          image: "https://m.media-amazon.com/images/I/61b-kiCqW5L._AC._SR360,460.jpg",
          ProductName: "Oboe Silicone TV Remote,Remote with Timer & Sle",
          Price: '₹459',
          Charges: "Free Delivery",
          rate: '3.8',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 4,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcV74bfgohjDbHMlWXe99NXxWjS5urh-6Zhw&s",
          ProductName: "Electric Refrigerator,Remote with Timer & Sle",
          Price: '₹759',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 5,
          image: "https://luckybee.in/wp-content/uploads/2022/06/Philips-HD697500-25-Litre-Digital-Oven-Toaster-Grill-Grey-25-liter-0-6.jpg",
          ProductName: "Philips Viva Collection 25L Oven Toaster Grill",
          Price: '₹659',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 6,
          image: "https://m.media-amazon.com/images/I/41QqyMrjZlS._AC_UF1000,1000_QL80_.jpg",
          ProductName: "KISAN PUMP 12 mm Wires Electric,Remote with Timer & Sle",
          Price: '₹309',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 7,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUp2XZDIM_Y0sIzfV-I-gJqjkSqFNeNSG7H6moUBS9lsOg9tNCiEFLKyldBqF6UTLKasH0WzRpmxHryZ_9UH7vbee75G5pb3X3m9ZqJl4&usqp=CAE",
          ProductName: "TTS-120 120pcs T Tap Electrical Wire Connectors Kit",
          Price: '₹259',
          Charges: "Free Delivery",
          rate: '4.1',
          reviews: '12960 Reviews'
    
    
        },
        {
          id: 8,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhc2pbIUYcapzBYtBqCNS6Jfx5Oz748qg69mgapjWfy8h5W1uQ2ykhr-E3pS16wg_ApcluQ_M3NARNp7LhP3HjN_Qcxe60J1oMHaPr_LDVsI5AUUGYqXytwA&usqp=CAE",
          ProductName: "Mini Portable TV | Worldtech Tft977p 9 Mini Portable Tv",
          Price: '₹279',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 9,
          image: "https://m.media-amazon.com/images/I/711yPjrCASL._AC_UY218_.jpg",
          ProductName: "Tapo TP-Link C200 360° 2MP 1080p Full HD Pan/Tilt Home Security Wi-Fi Smart Camera| Alexa Enabled| 2-Way",
          Price: '₹399',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 10,
          image: "https://m.media-amazon.com/images/I/71Yootv6u3L._AC_CR0%2C0%2C0%2C0_SX410_SY308_.jpg",
          ProductName: "Boult X Mustang Newly Launched Torq TWS Earbuds with 60H Playtime, App",
          Price: '₹359',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 11,
          image: "https://m.media-amazon.com/images/I/31hGmv4D5WL._SX300_SY300_QL70_FMwebp_.jpg",
          ProductName: "ZEBRONICS Zeb-Bro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Blue)",
          Price: '₹459',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 12,
          image: "https://m.media-amazon.com/images/I/61TRKPzWmBL._AC_UY218_.jpg",
          ProductName: "Lenovo IdeaPad Slim 3 12th Gen Intel® Core™ i5-12450H 15.6 inch (39.6cm) FHD Laptop (16GB/512GB",
          Price: '₹678',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 13,
          image: "https://m.media-amazon.com/images/I/81m8RU7ZV0L._AC_UY218_.jpg",
          ProductName: "atomberg Renesa 400mm Wall Mount Fan  Remote with Timer & Sle",
          Price: '₹248',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 14,
          image: "https://m.media-amazon.com/images/I/51ZQgbCUI-L._SY445_SX342_QL70_FMwebp_.jpg",
          ProductName: " Sunset Projection Lamp with Remote & USB – 360° Rotating LED Light for Ambiance, Selfies, Parties & Home Decor",
          Price: '₹559',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 15,
          image: "https://m.media-amazon.com/images/I/61PzdtWJETL._AC_UY218_.jpg",
          ProductName: "Wireless Mouse | 2.4 GHz Connection, 1600 DPI | Type - C Adapter | Upto 12 Months",
          Price: '₹189',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 16,
          image: "https://m.media-amazon.com/images/I/41igFcfu4VL._SY445_SX342_QL70_FMwebp_.jpg",
          ProductName: "XERGY Outdoor String Lights 25 Feet G40 Globe Lights ",
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

export default Electronics
