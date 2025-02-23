import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

function BeautyHealth() {
  const products = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/kqmo8sw0/diaper/n/2/w/adult-diaper-pull-ups-large-xl-l-xl-10-glider-original-imag4hfyk5zyxryj.jpeg?q=70",
      ProductName: "GLIDER Adult Diaper Pull Ups LARGE-XL Pant Style (35-47...",
      Price: '₹549',
      Charges: "Free Delivery",
      rate: '4.5',
      reviews: '1234 reviews'

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/ko0d6kw0/adhesive-band-aid/b/a/9/elastic-adhesive-bandage-10-cm-x-4-m-pack-of-2-2-nuvo-medsurg-original-imaffv8tm9vquyut.jpeg?q=70",
      ProductName: "NUVO MEDSURG Elastic Adhesive Bandage 10 Cm X 4 M Crepe...",
      Price: '₹599',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'

    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-treatment/q/n/c/100-organic-hibiscus-powder-100-pure-natural-boost-skin-glow-original-imagxy3sy6ckfreg.jpeg?q=70",
      ProductName: "Neuherbs Organic Hibiscus Powder | 100% Pure & Natural ...",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.8',
      reviews: '1234 reviews'


    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/toothpaste/v/z/3/-original-imah7fczhf2hfg2p.jpeg?q=70",
      ProductName: "Colgate Total Advance Health Toothpaste",
      Price: '₹759',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/a/p/w/onion-oil-can-benefit-the-scalp-including-its-potential-effects-original-imah2vzycdg2hahv.jpeg?q=70",
      ProductName: "INDO CHALLENGE Onion Oil Can Benefit The Scalp,Includin...",
      Price: '₹659',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/diaper/p/f/f/l-xl-adult-diaper-pull-ups-large-xl-pant-style-35-47-inch-90-120-original-imagp7pb954zacyn.jpeg?q=70",
      ProductName: "GLIDER Adult Diaper Pull Ups LARGE-XL Pant Style (35-47...",
      Price: '₹309',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/contact-lens-new/e/w/q/color-contact-lense-0-00-1-4-freddy-original-imah4zz42ghz9zmp.jpeg?q=70",
      ProductName: "Freddy Monthly Disposable",
      Price: '₹259',
      Charges: "Free Delivery",
      rate: '4.1',
      reviews: '12960 Reviews'


    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/612/612/jzk5xu80/antiseptic/a/z/h/15-boro-aloe-ayurvedic-antiseptic-cream-pack-of-2-eraser-original-imafjjj7y4qsvvcs.jpeg?q=70",
      ProductName: "Eraser Boro Aloe Ayurvedic Antiseptic Cream (Pack of 2)...",
      Price: '₹279',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 9,
      image: "https://rukminim2.flixcart.com/image/612/612/jhuvjww0/ph-test-strip/s/t/b/10u-microsidd-original-imaf5ra6nym6ezje.jpeg?q=70",
      ProductName: "MICROSIDD 10U Ph Test Strip",
      Price: '₹399',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/vitamin-supplement/r/7/1/21-beauty-collagen-complex-for-hair-skin-nail-formula-blueberry-original-imah9jx6hstdefeu.jpeg?q=70",
      ProductName: "WISHNEW WELLNESS BEAUTY COLLAGEN COMPLEX for Hair, Skin...",
      Price: '₹359',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 11,
      image: "https://rukminim2.flixcart.com/image/612/612/k4lmv0w0/contact-lens-new/t/5/4/2-pair-zero-power-monthly-contact-lens-with-solution-aqua-pink-original-imafngwwhjfbkahy.jpeg?q=70",
      ProductName: "Choice Empire Monthly Disposable",
      Price: '₹459',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 12,
      image: "https://rukminim2.flixcart.com/image/612/612/kl8ccy80/contact-lens-new/e/0/u/lacelle-premium-with-biotrue-60ml-1-0-00-2-bausch-lomb-original-imaemxezjyyy7drg.jpeg?q=70",
      ProductName: "BAUSCH & LOMB Monthly Disposable",
      Price: '₹678',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 13,
      image:"https://rukminim2.flixcart.com/image/612/612/jyug0i80/diaper/g/g/2/comfort-m-10-healthemate-original-imafgzmhhru262p8.jpeg?q=70",
      ProductName: "HealthEmate Comfort Adult Diapers - M",
      Price: '₹248',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 14,
      image: "https://rukminim2.flixcart.com/image/612/612/jsj90280/nose-shaper/7/q/s/certified-original-3-in-1-pack-of-3-pink-and-blue-butterfly-nose-original-imafe3fq4gjqg3fm.jpeg?q=70",
      ProductName: "AlexVyan Certified Original 3 in 1- Pack of 3 Pink and ...",
      Price: '₹559',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 15,
      image: "https://rukminim2.flixcart.com/image/612/612/je09ua80/antiseptic/w/9/p/80-antiseptic-cream-pack-of-2-boroplus-original-imaf2sazunth2ffm.jpeg?q=70",
      ProductName: "BOROPLUS Cream ( Pack of 2 ) Antiseptic Crea...",
      Price: '₹189',
      Charges: "Free Delivery",
      rate: '3.5',
      reviews: '1234 reviews'


    },
    {
      id: 16,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo/u/c/p/1280-vatika-health-shampoo-heena-amla-pack-of-2-dabur-vatika-original-imahyhf5brkryygn.jpeg?q=70",
      ProductName: "DABUR VATIKA Health Shampoo For Problem Free Hair Pack ...",
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

export default BeautyHealth
