import React from 'react';
import Carousel from "./Carousel";

const TwoWheeler = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.GQNntkSYdiQPBZ6C8K1aBQHaEK?pid=ImgDet&w=203&h=114&c=7&dpr=1.3',
    'https://th.bing.com/th/id/OIP.L-NIyy9d9yXBFUTb6_NaDgHaHw?rs=1&pid=ImgDetMain'
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-row justify-center items-center bg-white shadow-md rounded-lg overflow-hidden">
        {/* Carousel Section */}
        <div className="w-1/2 p-4">
          <Carousel images={images} />
        </div>

        {/* Text Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Go For a Ride and Release Your Stress
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore a variety of two-wheelers in our collection. From the latest models to classic designs, 
            find your perfect ride today. Start your journey with the best!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoWheeler;
