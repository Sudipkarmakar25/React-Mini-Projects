import React, { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const App = (props) => {
  const images = props.images;
  const length = images.length;
  const [index, setIndex] = useState(0);

  function next() {
    const curr = (index + 1) % length;
    setIndex(curr);
  }

  function prev() {
    const curr = index - 1;
    if (curr < 0) {
      setIndex(length - 1);
    } else {
      setIndex(curr);
    }
  }

  return (
    <div className="w-3/4 relative mx-auto  rounded-xl shadow-xl overflow-hidden mt-10">
      <div className="relative flex justify-center items-center">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white hover:bg-gray-100 shadow-lg transition duration-300 z-10"
          aria-label="Previous Image"
        >
          <GoArrowLeft size={30} className="text-gray-800" />
        </button>

        {/* Image */}
        <img
          className="h-[300px] w-[4/5] object-cover"
          src={images[index]}
          alt={`Carousel Slide ${index + 1}`}
        />

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white hover:bg-gray-100 shadow-lg transition duration-300 z-10"
          aria-label="Next Image"
        >
          <GoArrowRight size={30} className="text-gray-800" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              dotIndex === index
                ? "bg-white shadow-lg scale-125"
                : "bg-gray-500 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
