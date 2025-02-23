import React, { useState, useEffect } from "react";

const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/373914b13f0b4dfb.jpg?q=20",
  "https://rrpicks.com/wp-content/uploads/2023/09/Free-Happy-Shopping-PowerPoint-Template-thumbnai-0-min.jpg",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5dbe24535d092e63.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/b53a32a9c1158ad0.jpeg?q=20",
];

function MeeshoPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-4">

      <div className="overflow-hidden relative rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Product"
         className="w-[3000px] h-60 object-cover transition-all duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
}

export default MeeshoPage;
