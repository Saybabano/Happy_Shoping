import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function BagsFootwear() {
  const products = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/x/r/l/10-r111-brown-4-ortho-rest-brown-original-imahfyqfnfwvapgq.jpeg?q=70",
      ProductName: "Pakistani Suits Tranding black suits",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/5/y/3-new-trendy-stylish-women-girl-s-ladies-boots-for-women-girl-s-original-imah22fhfthnwjxq.jpeg?q=70",
      ProductName: "Trendy Stylish Women /Girl's/Ladies Boots For Women...",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/k/2/j/-original-imagr6wjpemv9zf2.jpeg?q=70",
      ProductName: "Sparx Casual , Dailywear , Room , B",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/h/s/x/5-zxt332-calibrel-black-original-imahf4fhbrzebt9g.jpeg?q=70",
      ProductName: "CALIBREL Men Slippers",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/f/h/i/-original-imaghdrzhxsqdqxt.jpeg?q=70",
      ProductName: "SAFARI Small Cabin Suitc",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/d/1/i/-original-imagt2zuaqaccgmg.jpeg?q=70",
      ProductName: "SAFARI arge Check-in Suitcase (75 cm) 4 Wheels - ECLIPSE 75 -...",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/6/8/c/-original-imaghdry2zv2rhka.jpeg?q=70",
      ProductName: "New Stylish Men's Warist Watch",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/z/y/w/-original-imah2kxnsfcxzg5q.jpeg?q=70",
      ProductName: "SAFARI Hard Body Set 4 Wheels - ECLIPSE 75 -...",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/s/q/w/-original-imagrwh4kmb7fckb.jpeg?q=70",
      ProductName: "Safari Large Cabin & Check-in Set (81 cm) 4 Wheels - STORM 77 ...",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/y/z/x/81-storm-77-4w-1-storm774wred-cabin-check-in-set-magnum-by-original-imah4dczezqurmg4.jpeg?q=70",
      ProductName: "SAFARI edium Check-in Suitcase (66 cm) 4 Wheels - EXPLORE 65 ...",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/l/p/j/-original-imagkuxzgmzxhfes.jpeg?q=70",
      ProductName: "SAFARI Soft Body Set of 2 Luggage 4 Wheels - STAR 55/ 65 4W - ...",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/w/l/e/16-backpack-large-50l-for-outdoor-sport-hiking-travel-bags-blue-original-imah56r54ktrdvkr.jpeg?q=70",
      ProductName: "sky spirit Large 50 L Laptop Backpack Backpack large 50L for Outdo...",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/p/6/5-firefly-04-5-asian-white-pink-original-imah3nxx9uhy8xca.jpeg?q=70",
      ProductName: "asian Firefly-04 White Sports,Gym,Jogging,Walking,Training,St...",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/f/r/k/8-rkt-1205-8-atom-white-original-imah883fqcxe5s7a.jpeg?q=70",
      ProductName: "ATOM Alpha Predator High Tops For Men",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/r/0/v/7-flip-flop-6065-bersache-green-original-imah59m6g28rdkbh.jpeg?q=70",
      ProductName:"BERSACHE Men Flip Flops.....",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/c/u/v/6-ladies-342-navy-grey-flite-navy-grey-original-imah94bgbxjfugjt.jpeg?q=70",
      ProductName: "FLITE new Women Slippers...",
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

export default BagsFootwear
