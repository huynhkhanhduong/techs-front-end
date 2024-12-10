
function HomePage() {
  return (
    <div>
    <div className="flex flex-row justify-start mb-4 ml-7">
    <img
      className="w-20 h-20 rounded-full border-2 border-indigo-500"
      src="public/gau.png"
      alt="User Profile"
    />
    <div className="flex flex-col justify-center align-middle ml-2">
      <h2 className="text-xl  font-semibold text-purple-600">
        TRẦN SÁNG
      </h2>
      <p className=" text-gray-500">03*****005</p>
      </div>
      </div>
      <div className="w-11/12 h-40 bg-white flex items-center justify-around shadow-md rounded-lg p-4 ml-7">
        {/* Đơn hàng */}
        <div className="flex flex-col items-center justify-center h-full w-40">
          <p className="text-3xl font-semibold text-gray-800">0</p>
          <p className="text-sm text-gray-600">Đơn hàng</p>
        </div>

        {/* Đường phân cách */}
        <div className="w-px h-16 bg-gray-300"></div>

        {/* Tổng tiền tích luỹ */}
        <div className="flex flex-col items-center justify-center h-full w-40">
          <p className="text-3xl font-semibold text-red-600">0đ</p>
          <p className="text-sm text-gray-600">Tổng tiền tích luỹ</p>
        </div>
      </div>
      <div className="w-11/12 h-32 bg-white flex items-center justify-start shadow-md rounded-lg p-6 ml-7 mt-7">
          {/* Hạng thành viên */}
          <a href="#" className="flex flex-col items-center text-center mr-8 ">
            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center rounded-full">
              <img src="/public/Rank.svg" alt="Hạng thành viên" className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm text-gray-700 font-medium">Hạng thành viên</p>
          </a>

          {/* Mã giảm giá */}
          <a href="#" className="flex flex-col items-center text-center mr-8">
            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center rounded-full">
              <img src="/public/Link.svg" alt="Mã giảm giá" className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm text-gray-700 font-medium">Mã giảm giá</p>
          </a>

          {/* Lịch sử mua hàng */}
          <a href="#" className="flex flex-col items-center text-center mr-8">
            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center rounded-full">
              <img src="/public/History.svg" alt="Lịch sử mua hàng" className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm text-gray-700 font-medium">Lịch sử mua hàng</p>
          </a>

          {/* Liên kết tài khoản */}
          <a href="#" className="flex flex-col items-center text-center mr-8">
            <div className="w-12 h-12 bg-teal-50 flex items-center justify-center rounded-full">
              <img src="/public/Count.svg" alt="Liên kết tài khoản" className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm text-gray-700 font-medium">Liên kết tài khoản</p>
          </a>
        </div>
  </div>
  )
}

export default HomePage