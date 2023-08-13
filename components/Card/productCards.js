// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (

<div className='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
            <div className='max-w-md mx-auto'>
              <img className="p-8 rounded-t-lg" src={product.productIcon} alt={product.productName}/>
              <div className='p-4 sm:p-6'>
                <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{product.productName}</p>
                <div className='flex flex-row'>
                  <p className='text-[#3C3C4399] text-[17px] mr-2 line-through'>${product.productPrice}</p>
                  <p className='text-[17px] font-bold text-[#0FB478]'>${product.productPrice}</p>
                </div>
                <p className='text-[#7C7C80] font-[15px] mt-6'>{product.productDescription}</p>
    
    
                  <a target='_blank' href='foodiesapp://food/1001' className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                      Add Cart
                  </a>
                <a target='_blank' href="https://apps.apple.com/us/app/id1493631471" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                      Download app
                  </a>
              </div>
            </div>
            </div>
            </div>

/*
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={product.productIcon} alt={product.productName}/>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">

            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.productPrice}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
*/



/*
    <div>
      <img src={product.productIcon} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>Price: ${product.productPrice}</p>
    </div>*/
  );
};

export default ProductCard;
