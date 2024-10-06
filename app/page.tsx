"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [quantity, setQuantity] = useState(1); // State to control the counter

  useEffect(() => {
    // Fetch the product data from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Handle counter increment and decrement
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Increment quantity
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrement quantity, but not below 1
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans p-5 mx-auto lg:max-w-7xl md:max-w-3xl sm:max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
              src={product.thumbnail} // Using the 'thumbnail' field from the API response
              alt={product.title}      // Using 'title' as alt text
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              {product.title}
            </h3>
            <p className="text-normal font-normal text-gray-600">
              {product.description}
            </p>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <h4 className="text-lg font-bold text-gray-800">${product.price}</h4>
            </div>
            <div className="mt-5 mb-4">
              <button 
                onClick={openModal} // Open modal on button click
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                view Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {/* Close button (icon) */}
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}>
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
              src={product.thumbnail} // Using the 'thumbnail' field from the API response
              alt={product.title}      // Using 'title' as alt text
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">
              {product.title}
            </h3>
            <p className="text-normal font-normal text-gray-600">
              {product.description}
            </p>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              
            </div>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-6">
              <h4 className="text-lg font-bold text-gray-800">${product.price}</h4>
              <button
                onClick={decrementQuantity}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l">
                -
              </button>
              <span className="mx-4 text-lg font-bold">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r">
                +
              </button>
            </div>
            
          </div>

          

           
          </div>
        </div>
      )}
    </div>
  );
}
