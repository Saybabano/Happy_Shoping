import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
// import './MusicalInstruments.css'

function MusicalInstruments() {
  const products = [
    {
      id: 1,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTBwTwdGSO7wvEI6MvZ-92DdqNm5ElFo7a58x3NHwu1tJy7odPUG-0DIIGm_1ITYL30KUbhWAYWC8qwShpaZg8cTn_5Loa0TmDtoxr9S2yenP33RK157PURQ&usqp=CAE",
      ProductName: "Intern INT-38C Acoustic Guitar Kit (Black)",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ69DJqcFcAbg7nRfOrCsUgTBigg2UO4QY_DzE3YGA_fwvpgfOm0dBtJnWmYDjFTHqjwT1MdzNe9etnNYPUL9p2tW0UeikOhybC6uQiBizFZFZTCWRG_JN3bg&usqp=CAE",
      ProductName: "Casio SA-81 Casiotone 44 Key Kids Mini Portable Keyboard ",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWBpOjiHD_Cv0-rwXmHv6FgtVw8FVNh05yQ&s",
      ProductName: "Intern INT-UK21LD-NT Concert Ukele with Bag (Natural)",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://www.tanotis.com/cdn/shop/files/1708077044_1811619_800x.jpg?v=1737778916",
      ProductName: "Hammond M-solo 49-Key Portable Organ Matte ",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT99XHssLem_5KklK7iYbWXE0ZYP95OCp8QjT_J1cS7jJCzNv_D7p8mXFIRUtQXI_zCZApTntu2UBl7MC3syhgZbC1nT9pYwmeU389pqd0U0HnnL5Wj1c_7&usqp=CAE",
      ProductName: "Orientalmusicsanctuary Ensemb",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8RFwKHDff2EIMRriYYe447BtngWYrguHSG8jHZt1BPwuWd10nliAlea1YnsYY-kDsVgOhtwIwUjUx_Pn2T_p89iucsYcKuwlr8ahH-98&usqp=CAE",
      ProductName: "Otamatone Japanese Electronic M",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRzWCuv5SvnwvuBQRnxJZC2PvDUf5c_8zd6ETfCasSXudqMgJNjSNK_7QGGv3oEbqZYD5RQ2O5Sv0F8yDxKQgjtLavOwo2FHw88oxtgKpDOojjvdpJDQanwg&usqp=CAE",
      ProductName: "Yamaha V20G Natural Acoustic Violin",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQScP131AsDC4u39xcwFhgS2BB4BIr6QmF7COIOrMhmmzeBgJ3ZQ6SWSwJMcsoB13lXM6Vm_o5kh2nbSfiJ7emRCTdKS9FJzo2pELbg_Kkl9A4KgLlT52hS5g&usqp=CAE",
      ProductName: "Hohner Accordions Harmonica, Ozzy Osbourne Harp -Key C M666",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTicns8WZr6eTFBCCn7JF1qbjc8KDzRuLcxs-rLjyS6gw-extU1ExpEBpJkt1wVbRMMnhpNEYTbL0go_W7OYHX_FEI8ZC2AfQNnNeurDA&usqp=CAE",
      ProductName: "Roland HPD-20 HandSonic Digital Hand Percussion",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaneinEiaf3lLxnPTrvRckTcrdWHkbqSKJYOi5zFx1sp9TnZ1LobH2CscgH3zLb2hHZq8USPZCYGF7D_19IZKmYexr1QJB6uBqPcuWm5osuOdQNjJPG_Av_w&usqp=CAE",
      ProductName: "Yamaha PSR-F52 Keyboard",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4GfketGwxE_J0oIrVH1mAJg_lans1xlIr6S99my1W8_SO2cH5ETOSJ7j7oOPY1TL01rNZ5xNXq_E_ulSvPbc-HTThfxe0AU_rFi4PpIvWoRao0r6U8XMi-w&usqp=CAE",
      ProductName: "4 Pieces Professional percussion names of musical instrument bongo drum",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSEKvr5vD-yhNyk5k7O-5zR2NffPOghK0TKs5V9N2iP0OlgRtXaPWJP7k71x7wD1qy2vQCMvTvG8--oIE_8pj4NkHW6K-tyZBZEYvz6zrt227H_RH5kNuXb&usqp=CAE",
      ProductName: "Fellix 100% Original Pittal Handmade Manjeera Pair With Straps Kartal Instrument ...",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image: "https://www.bajaao.com/cdn/shop/files/yamaha-acoustic-guitar-bundles-black-bundle-yamaha-fs80c-the-ultimate-concert-body-cutaway-acoustic-guitar-with-strap-picks-ebook-30843984150707_large.jpg?v=1687657712",
      ProductName: "Yamaha FS80C Acoustic Guitar - Natural",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://m.media-amazon.com/images/I/71HCnX6qvJL.jpg",
      ProductName: "32 Strings Harp Musical Instrument Round Engraved Made ",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://www.musicstores.in/img/p/5/5/1/0/5510-large_default.jpg",
      ProductName: "Auris Pentatonic Xylophone – 7 Note",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://rajmusical.com/ekart/images11/1595tarshahnai_-_special_model_with_swan_head.jpg",
      ProductName: "Tarshahnai With Swan Head and Case",
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

export default MusicalInstruments
