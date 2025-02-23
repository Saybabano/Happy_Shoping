import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function MusicalInstruments() {
  const products = [
    {
      id: 1,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249",
      ProductName: "Pakistani Suits Tranding black suits",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "",
      ProductName: "Princess Elegant Girls Frocks & Dresses",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "",
      ProductName: "Georgette Blue Mirror Work Saree With Blouse",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "",
      ProductName: "White Designer georgette sequence saree",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "",
      ProductName: "Pearl beads stylish women party clutch purse",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "",
      ProductName: " Long Sleeve T-shirt, Casual Square Neck Top",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "",
      ProductName: "New Stylish Men's Warist Watch",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "",
      ProductName: "Elasticated Side Slit Skirt for Women",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "",
      ProductName: "White Stylish Comfortable Casual Sneaker Shoes",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "",
      ProductName: "Men's full Sleeve Regular Polo Cotton Blend Tshirt",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "",
      ProductName: "Lightly Padded Sport Bra Underwear Women",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "",
      ProductName: "New Dubai Design Embroidery work Abaya",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "",
      ProductName: "Cute baby Girls Frocks Dresses",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "",
      ProductName: "Urbane Elegant Women Trousers",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "",
      ProductName: "Cotton Back Printed Boxy T-shirt",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "",
      ProductName: "Adrika Voguish Women Kurta Sets",
      Price: '₹589',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews',


    },

  ]
  return (
    <> 
      <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {products.map((product) => (
          <div
            key={product.id}
            className="w-[230px] h-[420px] p-4 rounded-md shadow-md "
          >
            <img 
              src={product.image} 
              alt={product.ProductName} 
              className="w-11/12" 
            />
            <h5 className='  mb-2 '>{product.ProductName}</h5>
            <p className='text-sm font-serif w-[110px] bg-green-200 text-gray-800 rounded-full p-1 mb-2'>{product.Charges}</p>
            <div className='flex justify-between items-center'>
              <p className=' font-bold mb-2'>{product.Price}</p>
              {/* <button className='p-2  border border-blue-700 bg-blue-100 '>Add</button> */}
            </div>
            <p className='bg-blue-700 w-12 rounded-full text-center text-white font-semibold inline-block mb-2'>{product.rate}</p>
            <span className='p-2 text-sm'>{product.reviews}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default MusicalInstruments
