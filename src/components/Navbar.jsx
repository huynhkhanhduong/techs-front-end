import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-red-600 text-white py-3 px-5 flex items-center justify-between fixed left-0 right-0 z-20">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 mr-5 ml-4">
        <span className="text-2xl font-bold ">TechS</span>
      </Link>

      {/* Danh mục */}
      <div className="flex items-center gap-3">
        <button className="flex items-center text-sm bg-red-500 text-white px-2 py-4 rounded-xl hover:bg-red-700">
          <img
            src="/public/Collapse.svg" /* Thay đường dẫn ảnh tại đây */
            alt="Icon"
            className="w-5 h-5 mr-2"
          />
          Danh mục
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white text-gray-600 rounded-md px-3 py-1 w-56">
        <button className="flex items-center justify-center bg-transparent border-none focus:outline-none">
          <img src="/public/Find.svg" alt="Icon" className="max-w-4 h-8 mr-2" />
        </button>
        <input type="text" placeholder="Tìm kiếm" className="flex-grow bg-transparent border-none focus:outline-none" />
      </div>

      {/* Menu with Icons */}
      <div className="flex items-center gap-5 text-sm">

        {/* Tra cứu đơn hàng */}
        <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-red-500">
          <img
            src="/public/Delivery.svg" 
            alt="Order"
            className="w-8 h-8 "
          />
          Tra cứu đơn hàng
        </a>

        {/* Giỏ hàng */}
        <Link to="/shoppingcart" className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-red-500">
          <img
            src="/public/Shopping-Cart.svg" 
            alt="Cart"
            className="w-6 h-6"
          />
          Giỏ hàng
        </Link>

        {/* Đăng nhập */}
        <Link to="/user-profile" className="flex flex-col justify-center items-center text-sm bg-red-500 text-white px-2 py-2 rounded-xl hover:bg-red-700">
          <img src="/public/User.svg" alt="Icon" className="w-5 h-5" />
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
