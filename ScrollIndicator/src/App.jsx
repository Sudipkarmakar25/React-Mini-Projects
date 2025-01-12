import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [scrollPercent, setScrollPercent] = useState(0);
 
  async function fetchProducts() {
    const data = await fetch('https://dummyjson.com/products');
    const response = await data.json();
    console.log(response);
    setProducts(response.products); 
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleScrollPercent() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScrollableHeight = documentHeight - windowHeight;
    const scrollPercent = (scrollTop / totalScrollableHeight) * 100;

    setScrollPercent(scrollPercent);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercent);
    return () => {
      window.removeEventListener('scroll', handleScrollPercent);
    };
  }, []);

  return (
    <div>
      <h1 className='text-center m-0 p-0 w-full h-[50px] bg-black text-white sticky top-0'>
        This is my Scroll indicator: {Math.round(scrollPercent)}%
      </h1>
      <div
        style={{ width: `${scrollPercent}%` }}
        className="bg-blue-500 h-[5px] sticky top-[50px]"
      ></div>
      <div className="flex flex-col items-center h-auto ">
        {
          products.map((element, index) => {
            return (
              <h2 key={index}>{index + 1}. {element.title}</h2>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;