import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const loaderRef = useRef();
  const [data, setdata] = useState([]);
  const [index, setindex] = useState(1);

  async function fetchdata() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=15`
      );
      const newData = await response.json();
      setdata((prevData) => [...prevData, ...newData]); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setindex((prevIndex) => prevIndex + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current); 
    };
  }, [loaderRef]);

  useEffect(() => {
    fetchdata();
  }, [index]); 

  return (
    <div className="bg-slate-200">
      <h1 className="text-center text-lg font-bold py-4">Infinite Scroll</h1>
      <div className="flex flex-col items-center gap-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id} 
              className="h-[70px] w-[620px] border-[2px] border-red-500 flex justify-center items-center shadow-lg rounded-md text-pink-800"
            >
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
     
      <div
        ref={loaderRef}
        className="h-16 w-full flex justify-center items-center text-gray-500"
      >
        Loading...
      </div>
    </div>
  );
};

export default App;
