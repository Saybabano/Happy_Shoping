import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function FoodDrinks() {
  const products = [
    {
      id: 1,
      image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c428434-df61-41a1-886a-802a41269705.jpg?ts=1715152371",
      ProductName: "Frooti Mango Drink",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/41b6af78-5d96-4f4e-bceb-325192c3081a.jpg?ts=1721410091",
      ProductName: "Coca-Cola Soft Drink (300 ml)",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/6d20d79f-c60f-4e2b-941e-f7375e3395ac.jpg?ts=1728485904",
      ProductName: "Paper boat Aamras Mango Drink",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/7eaebd48-71d2-41a9-b285-b00e2bb8d498.jpg?ts=1722343982",
      ProductName: "Prasuma Veg Supreme Pizza Minis",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/d472a2c3-fd25-411f-af27-40f53633c90e.jpg?ts=1727193354",
      ProductName: "Drools Optimum",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/76064713-debd-400b-a267-494e8b9734ba.jpg?ts=1717260084",
      ProductName: "The Original Shikanji Co Aam Panna Mango Drink",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/b4e77588-8bd4-40a9-8ddd-dab766a2d32b.jpg?ts=1723800401",
      ProductName: "Dabur Keora Water Essence",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/407395b3-b7c6-43a2-88bd-815418c67192.jpg?ts=1733989811",
      ProductName: "Tops Baking Powder",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/7a914a42-9077-4a7d-becc-e79904d9d07f.jpg?ts=1717418544",
      ProductName: "Pepsi Cola Soft Drink-Pack of 2",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a1fd561-f816-416c-8336-d745c9804a02.jpg?ts=1739951968",
      ProductName: "Real Fruit Power Cranverry Juice",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/dfdecb20-ca1b-4b04-ab44-ec384e5549e4.jpg?ts=1738649272",
      ProductName: "Only Earth Plant Based Almond Drink (Non-Dairy)",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/9d1a9c8a-c8ef-40f2-bdb6-9ad65e968162.jpg?ts=1729514605",
      ProductName: "Sting Energy Drink 250 ml",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/d7a8a917-35a5-4ad6-9710-20dc516f79a7.jpg?ts=1738140322",
      ProductName: "O'cean flavoured water (",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/23608009-a2bb-4c28-96ae-06f9dcd499cd.jpg?ts=1738137451",
      ProductName: "XTCY Electrolyte Grape Energy Drink",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/266713a.jpg?ts=1717745599",
      ProductName: "B Natural Mango Drink",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/538980a.jpg",
      ProductName: "POko LoKo Juice (Grape)",
      Price: '₹589',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews',


    },

  ]
  return (
    <> 
      <Navbar/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 justify-items-center">
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

export default FoodDrinks
