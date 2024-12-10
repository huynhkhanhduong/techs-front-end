import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Buy = () => {
  return (
    <>
    <Navbar/>
    <div className="pt-24 pl-10 flex flex-row"> 
    <div className="flex justify-center items-center h-96 w-3/5 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mr-3 ml-3">
        <div className="flex flex-col items-center ">
          <img
            src="public/iphone-15-pro-max_3.png" // Thay bằng link hình ảnh thực tế
            alt="iPhone 16 Pro Max"
            className="rounded-lg w-full h-64"
          />
        </div>
      </div>
      <div className="flex flex-col text-center justify-center w-3/5 mr-2">
      <h1 className="text-xl font-bold text-white mb-4">TÍNH NĂNG NỔI BẬT</h1>
          <ul className="text-left space-y-3 text-white">
            <li>
              <span className="font-semibold">• Màn hình Super Retina XDR 6,9 inch:</span> lớn hơn, viền mỏng hơn, đem đến cảm giác tuyệt vời khi cầm trên tay.
            </li>
            <li>
              <span className="font-semibold">• Điều khiển Camera:</span> Chỉ cần trượt ngón tay để điều chỉnh camera, giúp chụp ảnh hoặc quay video hoàn hảo và siêu nhanh.
            </li>
            <li>
              <span className="font-semibold">• Thiết kế titan:</span> với 5 lớp hoàn thiện mới, bề mặt tinh tế và bền bỉ.
            </li>
            <li>
              <span className="font-semibold">• iOS 18:</span> được cài đặt sẵn, mang đến nhiều tính năng mới.
            </li>
          </ul>
      </div>
    </div>
    <div className="flex flex-col items-center space-y-2 ml-10 mt-5 mr-4">
      {/* Button Mua Ngay */}
      <div className="flex flex-col lg:flex-row w-full justify-between gap-2">
      <Link to="/shoppingcart" className="w-full bg-red-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-600 transition flex flex-col items-center justify-center">
        MUA NGAY
        <span className="block text-sm font-normal">
          (Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)
        </span>
      </Link>
      <Link to="/shoppingcart" className="w-24 bg-white border-2 border-red-500 text-white font-bold rounded-lg shadow-md flex flex-col items-center justify-center">
        <img src="public/ShoppingCart.png" alt="" className="w-10 h-8 p-1 " />
        <p className="text-red-500 text-xs text-center">Thêm vào giỏ</p>
      </Link>
    </div>
      {/* Button Trả Góp 0% */}
      <div className="flex flex-col lg:flex-row w-full justify-between gap-2">
        <button className="flex-1 bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          TRẢ GÓP 0%
          <span className="block text-sm font-normal">Trả trước chỉ từ 10.197.000₫</span>
        </button>
        <button className="flex-1 bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          TRẢ GÓP 0% QUA THẺ
          <span className="block text-sm font-normal">
            (Không phí chuyển đổi 3 - 6 tháng)
          </span>
        </button>
      </div>

      {/* Button Thu Cũ Lên Đời */}
      <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
        Thu cũ lên đời
        <span className="block text-sm font-normal">Chỉ từ 32.990.000₫</span>
      </button>
    </div>
    </div>
    </>
  );
};

export default Buy;
