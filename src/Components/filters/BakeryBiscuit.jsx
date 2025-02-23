import { HelpOutline } from '@mui/icons-material'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function BakeryBiscuit() {
    const products = [
        {
          id: 1,
          image: "https://images.meesho.com/images/products/138912918/27rya_400.webp",
          ProductName: "Himanshi food services-jeera Cookie BISCUIT 400GRAM",
          Price: '₹549',
          Charges: "Free Delivery",
          rate: '4.5',
          reviews: '1234 reviews'
    
        },
        {
          id: 2,
          image: "https://images.meesho.com/images/products/177811606/scuhx_512.webp",
          ProductName: "Pack of 4 Pran Potata Spicy Flavoured Biscuit original imported Potato Biscuit- 75Gm Each",
          Price: '₹599',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
        },
        {
          id: 3,
          image: "https://m.media-amazon.com/images/I/51+WGQsEKYL._SX300_SY300_.jpg",
          ProductName: "Karachi Bakery Almond Millet Biscuits, 300g Biscuit",
          Price: '₹459',
          Charges: "Free Delivery",
          rate: '3.8',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 4,
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTigHkXokDueAAB6v5n102rZLekf8MZYZkF7LiwdVO14KXfBo2AgW9qREDJOOIeVKhiny5pm63A_xgq9xIZhCXhmLP4rJzyptluHg3n6OY_LW4_WlN2TMgDEQ&usqp=CAE",
          ProductName: "Karachi Bakery Pistachio Biscuits ",
          Price: '₹759',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 5,
          image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/12/16/1/MW1002_molly-yeh-italian-bakery-cookies-2_s4x3.jpg.rend.hgtvcom.686.515.suffix/1639703749954.webp",
          ProductName: "Italian Cookies | Fancy Bakery Cookies | Gourmet Cookies | Fudge Cookies ... Butter Biscuit",
          Price: '₹659',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 6,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhUkYqgvZw-c-buPTx_qpwZ8leW_EpyjRXUoRUOSdvSxfEAdy3WOzLlUqMZeZGp0D4wWXl1QdjdcKUVdUR7ztXFboY-45K&usqp=CAE",
          ProductName: "Hyderabadi Cookies 250g",
          Price: '₹309',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 7,
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR28qZD24_ZmoLAQwFG_HvYlgwjQmeqLoX0hQuZMTKvhwtJle66D-8ShFG5e-5GP3FkzWvKBSKBn67g11NIiGCg9boORup1ctBnGgeRqupdRuKVIveE_kjLAg&usqp=CAE",
          ProductName: "Bikaji Bhujia No.1",
          Price: '₹259',
          Charges: "Free Delivery",
          rate: '4.1',
          reviews: '12960 Reviews'
    
    
        },
        {
          id: 8,
          image: "https://www.marcellinaincucina.com/wp-content/uploads/2023/08/italian-butter-cookies-hero.jpg",
          ProductName: "Italian Butter Cookies,",
          Price: '₹279',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 9,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBHOqgR-SGd7fTaVtYxc2TVBGV-4TcgLERQ&s",
          ProductName: "pagran Namkeen Snacks Biscuits Cookeis",
          Price: '₹399',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 10,
          image: "https://i.gadgets360cdn.com/products/butter-delite-namkeen-biscuits-large-94329-163598-1591880032-1.jpeg",
          ProductName: "Priyagold Butter Delite Namkeen Biscuits",
          Price: '₹359',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 11,
          image: "https://bombaysweetshop.com/cdn/shop/files/Namkeen_Jeera_Cookies_-_Pack_of_3_-_Web_-4.5_-_processed.png?v=1727157636&width=1445",
          ProductName: "Namkeen Jeera Cookies – Bombay Sweet Shop",
          Price: '₹459',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 12,
          image: "https://myhealthytreat.in/cdn/shop/products/ComboImage1_Allproducts_1200x.png?v=1662691655",
          ProductName: "4-Pack High Protein Roasted Namkeen Combo by Healthy Treat - HEALTHY TREAT",
          Price: '₹678',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 13,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWXQhkRgTB-B3yMxVMd_JQNyyHPeFlYpUcg&s",
          ProductName: "Namkeen Biscuit",
          Price: '₹248',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 14,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn-xe7ndDIaXvbMJMXnAOEyLbTnGfCNtOUTUQa3Qme-lLmvhjMcvvEFwE_OvBN1846_8&usqp=CAU",
          ProductName: "Mansoon में नमकीन, बिस्किट, स्नैक्स जल्दी हो जाते हैं नरम, तो Follow करें ये Tips, ताकि कुरकुरे-क्रंची रहें स्नैक्स ... - Lalluram",
          Price: '₹559',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 15,
          image: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2017/10/bakery-style-butter-cookies.jpg?fit=750%2C500&ssl=1",
          ProductName: "Bakery-Style Butter Cookies- Bakery-Style Butter Cookies",
          Price: '₹189',
          Charges: "Free Delivery",
          rate: '3.5',
          reviews: '1234 reviews'
    
    
        },
        {
          id: 16,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoQjY0mBZozuAzsiwpdmnsrqvOa707vc7AQ&s",
          ProductName: "DORITOS® FLAMIN' HOT® Limon Flavored Tortilla Chips | Doritos",
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

export default BakeryBiscuit
