function Account() {
    return (
      <div className="w-11/12 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center">
        {/* Tiêu đề */}
        <div className="flex flex-col justify-center items-center mb-4">
        <img
            className="w-20 h-20 rounded-full border-2 border-indigo-500"
            src="public/gau.png"
            alt="User Profile"
        />
        <div className="flex flex-col justify-center items-center mt-2">
            <h2 className="text-xl font-semibold text-purple-600 text-center">
            TRẦN SÁNG
            </h2>
            <p className="text-gray-500 text-center">03*****005</p>
        </div>
        </div>

  
        {/* Thông tin tài khoản */}
        <div className="space-y-4 w-4/6">
          {/* Họ và tên */}
          <div className="flex justify-between items-center">
            <input
              id="name"
              type="text"
              placeholder="Họ và tên:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
  
          {/* Email */}
          <div className="flex justify-between items-center">
            <input
              id="email"
              type="email"
              placeholder="Email:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
  
          {/* Giới tính */}
          <div className="flex justify-between items-center">
            <input
              id="gender"
              type="text"
              placeholder="Giới tính:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
  
          {/* Số điện thoại */}
          <div className="flex justify-between items-center">
            <input
              id="phone"
              type="text"
              placeholder="Số điện thoại:0333844005"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
  
          {/* Sinh nhật */}
          <div className="flex justify-between items-center">
            <input
              id="birthday"
              type="text"
              placeholder="Sinh nhật:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Tổng tiền tích lũy */}
          <div className="flex justify-between items-center">
            <input
              id="totalAccumulated"
              type="text"
              placeholder="Tổng tiền tích lũy từ 01/01/2023:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              disabled
            />
          </div>
  
          {/* Tổng tiền đã mua sắm */}
          <div className="flex justify-between items-center">
            <input
              id="totalSpent"
              type="text"
              placeholder="Tổng tiền đã mua sắm:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              disabled
            />
          </div>
  
          {/* Địa chỉ */}
          <div className="flex justify-between items-center">

            <input
              id="address"
              type="text"
              placeholder="Địa chỉ:"
              className="w-full mt-1 px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
  
        {/* Nút hành động */}
        <div className="flex justify-between mt-8">
          {/* Cập nhật thông tin */}
          <button className="px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-green-600">
            Cập nhật thông tin
          </button>
        </div>
      </div>
    );
  }
  
  export default Account;
  