import React from 'react'

function ProdectMeesho() {
  const products=[
    {
      id:1,
      image:"https://images.meesho.com/images/products/318858183/ueg1h_512.webp",
      ProductName:"Pakistani Suits Tranding black suits",
      Price:'₹549',
      Charges:"Free Delivery",
      rate:'4.5', 
      reviews:'1234 reviews'
       
    },
    {
      id:2,
      image:"https://wholesalemegamart.com/wp-content/uploads/2024/05/MURTI-TRENDS-COTTON-MUGAL-PRINTED-ANARKALI-GOWN-2.jpeg",
      ProductName:"Princess Elegant Girls Frocks & Dresses",
      Price:'₹599',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews' 
  
    },
    {
      id:3,
      image:"https://thelotusfab.in/cdn/shop/files/ShrijiAvadh-SC-252_1.jpg?v=1714126752",
      ProductName:"Georgette Blue Mirror Work Saree With Blouse",
      Price:'₹459',
      Charges:"Free Delivery",
      rate:'3.8', 
      reviews:'1234 reviews' 
      
  
    },
    {
      id:4,
      image:"https://images.meesho.com/images/products/329923632/fwpiu_512.webp",
      ProductName:"White Designer georgette sequence saree",
      Price:'₹759',
      Charges:"Free Delivery",
      rate:'3.5',
      reviews:'1234 reviews'  
      
  
    },
    {
      id:5,
      image:"https://images.meesho.com/images/products/377819345/pqjws_512.webp",
      ProductName:"Pearl beads stylish women party clutch purse",
      Price:'₹659',
      Charges:"Free Delivery",
      rate:'3.5',
      reviews:'1234 reviews'   
      
  
    },
    {
      id:6,
      image:"https://images.meesho.com/images/products/376272585/dca2w_512.webp",
      ProductName:" Long Sleeve T-shirt, Casual Square Neck Top",
      Price:'₹309',
      Charges:"Free Delivery",
      rate:'3.5',
      reviews:'1234 reviews'    
      
  
    },
    {
      id:7,
      image:"https://images.meesho.com/images/products/228143446/xso8v_512.webp",
      ProductName:"New Stylish Men's Warist Watch",
      Price:'₹259',
      Charges:"Free Delivery",
      rate:'4.1', 
      reviews:'12960 Reviews' 
      
  
    },
    {
      id:8,
      image:"https://images.meesho.com/images/products/424152951/aqprb_512.webp",
      ProductName:"Elasticated Side Slit Skirt for Women",
      Price:'₹279',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews'   
      
  
    },
    {
      id:9,
      image:"https://images.meesho.com/images/products/478520398/c7vtg_400.webp",
      ProductName:"White Stylish Comfortable Casual Sneaker Shoes",
      Price:'₹399',
      Charges:"Free Delivery",
      rate:'3.5',  
      reviews:'1234 reviews'
      
  
    },
    {
      id:10,
      image:"https://images.meesho.com/images/products/338361691/6wvdf_512.webp",
      ProductName:"Men's full Sleeve Regular Polo Cotton Blend Tshirt",
      Price:'₹359',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews' 
      
  
    },
    {
      id:11,
      image:"https://images.meesho.com/images/products/378130273/obroq_400.webp",
      ProductName:"Lightly Padded Sport Bra Underwear Women",
      Price:'₹459',
      Charges:"Free Delivery",
      rate:'3.5',
      reviews:'1234 reviews'  
      
  
    },
    {
      id:12,
      image:"https://images.meesho.com/images/products/460979918/yw0vg_512.webp",
      ProductName:"New Dubai Design Embroidery work Abaya",
      Price:'₹678',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews'  
      
  
    },
    {
      id:13,
      image:"https://images.meesho.com/images/products/340208354/6wrr0_400.webp",
      ProductName:"Cute baby Girls Frocks Dresses",
      Price:'₹248',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews' 
      
  
    },
    {
      id:14,
      image:"https://images.meesho.com/images/products/423230757/hnuvj_512.webp",
      ProductName:"Urbane Elegant Women Trousers",
      Price:'₹559',
      Charges:"Free Delivery",
      rate:'3.5',  
       reviews:'1234 reviews'
      
  
    },
    {
      id:15,
      image:"https://images.meesho.com/images/products/468485320/rb11c_512.webp",
      ProductName:"Cotton Back Printed Boxy T-shirt",
      Price:'₹189',
      Charges:"Free Delivery",
      rate:'3.5',
      reviews:'1234 reviews'  
      
  
    },
    {
      id:16,
      image:"https://images.meesho.com/images/products/422106062/ioefu_512.webp",
      ProductName:"Adrika Voguish Women Kurta Sets",
      Price:'₹589',
      Charges:"Free Delivery",
      rate:'3.5', 
      reviews:'1234 reviews' , 
      
  
    },
    
  ]
   
  return (
    <> 
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

    </>
  )
}

export default ProdectMeesho
