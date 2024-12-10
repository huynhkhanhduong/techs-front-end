// import { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const ShoppingCart = () => {
//   const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-full h-screen bg-gray-100">
    <div className="w-full max-w-2xl  mx-auto   ">
        <Navbar/>
      {/* Header */}
      <div className="flex items-center border-b pb-3 pt-24">
        {/* Back Button */}
        <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-800 ml-52">Giỏ hàng của bạn</h1>
      </div>

      {/* Select All */}
      <div className="flex flex-col items-start mt-4">
        <Link className="p-2 pl-4 pr-4 bg-red-600 text-white rounded-xl">
            Giỏ hàng
        </Link>
        <div className="flex items-center mt-4">
        <input
            type="checkbox"
            id="select-all"
            className="w-6 h-6 rounded-full border-2 border-gray-300 appearance-none cursor-pointer peer"
        />
        <label htmlFor="select-all"
            className="w-6 h-6 absolute bg-white rounded-full border-2 border-gray-300 peer-checked:bg-red-700 flex items-center justify-center cursor-pointer"
        >
        </label>
        <label htmlFor="select-all" className="ml-2 text-gray-600 text-sm">
            Chọn tất cả
        </label>
        </div>

        </div>


      {/* Cart Item */}
      <div className="flex items-start mt-4 border rounded-lg p-4  bg-white">
        {/* Product Image */}
        <div className="flex items-center justify-start mr-2 mt-2">
        <input
            type="checkbox"
            id="select"
            className="w-6 h-6 rounded-full border-2 border-gray-300 appearance-none cursor-pointer peer"
        />
        <label htmlFor="select"
            className="w-6 h-6 absolute bg-white rounded-full border-2 border-gray-300 peer-checked:bg-red-700 flex items-center justify-center cursor-pointer"
        >
        </label>
        </div>
        <img
          src="public/ss-s24-ultra-xam-222.png"
          alt="Ốp lưng iPhone 16 Pro Max"
          className="w-ful h-32 object-cover rounded"
        />
        {/* Product Details */}
        <div className="ml-4 flex-grow mt-2 ">
          <h2 className="text-base font-medium text-gray-800 w-96 mb-4">
            Ốp lưng iPhone 16 Pro Max Slimcase Unique 3 Clear-Trong suốt
          </h2>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-500 font-bold text-lg">450.000đ</span>
            <span className="text-gray-400 line-through text-sm">500.000đ</span>
          </div>
        </div>
        {/* Quantity and Remove */}
        <div className="flex flex-col items-center">
        <button
            className="text-gray-500 hover:text-red-500 -mr-14"
            title="Xóa sản phẩm"
          >
            <img src="public/logo-remove.png" alt="" className="w-6 h-7 mb-9 mt-2"/>
          </button>
          <div className="flex items-center space-x-2 mb-2">
            <button
              className="w-7 h-7 bg-gray-200 text-gray-600 rounded flex items-center justify-center hover:bg-gray-300"
            //   onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              -
            </button>
            <span className="text-gray-800">1</span>
            <button
              className="w-7 h-7 bg-gray-200 text-gray-600 rounded flex items-center justify-center hover:bg-gray-300 mr-4"
            //   onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-start justify-between mt-4 border rounded-lg p-4  bg-white h-20 fixed bottom-0 right-80 left-80">
        <p>Tạm tính:  
            <span className="font-semibold text-red-600"> 450.000đ</span>
        </p>
        <button className="pt-2 pb-2 pl-4 pr-4 bg-red-600 text-white rounded-lg">Mua ngay</button>
    </div>  
    </div>
    </div>
  );
};

export default ShoppingCart;
