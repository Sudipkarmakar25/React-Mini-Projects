import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#3498db");
  const [isHex,setisHex]=useState(true)

  function GenerateHEX() {
    setisHex(true);
    console.log("clicked");
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(randomColor);
    setColor(randomColor);
  }

  function GenerateRGB() {
    setisHex(false);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  function GenerateRandom() {
    if(isHex)
    {
      GenerateHEX()
    }
    else{
      GenerateRGB()
    }

  }
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="space-x-3 p-4">
        <button
          className="text-xl border-2 bg-slate-500 text-white rounded px-4 py-2"
          onClick={()=>GenerateHEX()}
        >
          Generate Hex-Color
        </button>
        <button
          className="text-xl border-2 bg-slate-500 text-white rounded px-4 py-2"
          onClick={()=>GenerateRGB()}
        >
          Generate RGB-Color
        </button>
        <button className="text-xl border-2 bg-slate-500 text-white rounded px-4 py-2" onClick={()=>GenerateRandom()}>
          Generate Random Color
        </button>
      </div>
      <h1 className="text-2xl text-white font-bold mt-6">{color}</h1>
    </div>
  );
};

export default App;
