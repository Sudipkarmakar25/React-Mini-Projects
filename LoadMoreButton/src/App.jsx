import React, { useEffect, useState } from 'react';
import Card from './Components/Card';

const App = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);


  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}&select=title,price,thumbnail`
      );
      const result = await response.json(); 
      console.log(result.products); 
      setProducts(result.products); 
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          product_name={product.title}
          product_price={product.price}
          product_Owner="Default Owner" 
          product_image={product.thumbnail} 
        />
      ))}

      <div className="w-full flex justify-around mt-6">
        
        {count>0?<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={()=>setCount(count-1)}
        >Previous</button>:null}
        { 
        count<10?<button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>:null
        }

        
      </div>
    </div>
  );
};

export default App;
