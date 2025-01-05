import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  const totalNoofStars = 7; 
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0); 
  function handleclick(index) {
    console.log("Clicked",index)
    setRating(index)
  }
  function handleMove(index) {
    console.log(index)
    setHover(index)
  }
  function handleMouseLeave() {
    setHover(rating)
  }
  return (
    <>
      <h1 className="text-center py-14 text-2xl font-extrabold">Star Rating</h1>
      <div className="flex justify-center">
        {[...Array(totalNoofStars)].map((_, index) => {
          const currentStar = index + 1; 

          return (
            <FaStar
              key={index}
              size={40}
              color={currentStar <= (hover || rating) ? "gold" : "lightgrey"} 
              onClick={()=>handleclick(currentStar)} 
              onMouseMove={()=>handleMove(currentStar)} 
              onMouseLeave={() => handleMouseLeave()} 
            />
          );
        })}
      </div>
      <p className="text-center mt-4 text-lg">
        Selected Rating: {rating} / {totalNoofStars}
      </p>
    </>
  );
};

export default App;
