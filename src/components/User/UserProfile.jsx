import { useState } from 'react';
import Navbar from '../Navbar'
import HomePage from './HomePage';
import Accout from './Accout';
const UserProfile = () => {
  // Dùng state để theo dõi lựa chọn của người dùng
  const [selectedSection, setSelectedSection] = useState('home');  // 'home' là mặc định
  
  // Hàm để xử lý sự thay đổi khi người dùng chọn một mục
  const handleSelection = (section) => {
    setSelectedSection(section);
  };

  // Hàm hiển thị nội dung tùy theo mục đã chọn
  const renderContent = () => {
    switch (selectedSection) {
      case 'home':
        return (
          <div className="">
            <HomePage />
          </div>
        );
      case 'purchaseHistory':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Lịch sử mua hàng</h1>
            <p>Đây là lịch sử mua hàng của bạn.</p>
          </div>
        );
        case 'user':
          return (
            <div className="">
              <Accout/>
            </div>
          );
      case 'offers':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Ưu đãi của bạn</h1>
            <p>Đây là các ưu đãi hiện tại của bạn.</p>
          </div>
        );
      case 'membership':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Hạng thành viên</h1>
            <p>Đây là thông tin hạng thành viên của bạn.</p>
          </div>
        );
      default:
        return <div className="p-6">Chưa chọn mục nào.</div>;
    }
  };

  return (
    <div className="flex bg-gray-100 ">
      {/* Thanh module bên trái */}
      <div className="w-1/4 bg-teal-50 p-4 rounded-lg shadow-rounded-xl h-screen mt-24 ml-7">
  <ul className=" space-y-2">
    <li 
      onClick={() => handleSelection('home')} 
      className={`cursor-pointer block p-2 text-gray-600 rounded-xl ${selectedSection === 'home' ? 'bg-red-100 text-red-500 border border-red-500' : 'hover:bg-red-100 hover:text-red-500'}`}
    >
      <div className="flex items-center">
        <img
          src="public/Home.svg" // Thay bằng URL của ảnh của bạn
          alt="Home Icon"
          className="mr-3 ml-2 w-6 h6" // Khoảng cách giữa ảnh và chữ
        />
        Trang chủ
      </div>
    </li>
    <li 
      onClick={() => handleSelection('purchaseHistory')}
      className={`cursor-pointer block p-2 text-gray-600 rounded-xl ${selectedSection === 'purchaseHistory' ? 'bg-red-100 text-red-500 border border-red-500' : 'hover:bg-red-100 hover:text-red-500'}`}
    >
      <div className="flex items-center">
        <img
          src="public/History.svg" // Thay bằng URL của ảnh của bạn
          alt="Purchase Icon"
          className="mr-3 ml-2 w-6 h6"
        />
        Lịch sử mua hàng
      </div>
    </li>
    <li
      onClick={() => handleSelection('offers')}
      className={`cursor-pointer block p-2 text-gray-600 rounded-xl ${selectedSection === 'offers' ? 'bg-red-100 text-red-500 border border-red-500' : 'hover:bg-red-100 hover:text-red-500'}`}
    >
      <div className="flex items-center">
        <img
          src="public/Gift.svg" // Thay bằng URL của ảnh của bạn
          alt="Offers Icon"
          className="mr-3 ml-2 w-6 h6"
        />
        Ưu đãi của bạn
      </div>
    </li>
    <li
      onClick={() => handleSelection('user')}
      className={`cursor-pointer block p-2 text-gray-600 rounded-xl ${selectedSection === 'user' ? 'bg-red-100 text-red-500 border border-red-500' : 'hover:bg-red-100 hover:text-red-500'}`}
    >
      <div className="flex items-center">
        <img
          src="public/User.png" // Thay bằng URL của ảnh của bạn
          alt="Membership Icon"
          className="mr-3 ml-2 w-6 h6"
        />
        Tài khoản của bạn
      </div>
    </li>
    <li
      onClick={() => handleSelection('membership')}
      className={`cursor-pointer block p-2 text-gray-600 rounded-xl ${selectedSection === 'membership' ? 'bg-red-100 text-red-500 border border-red-500' : 'hover:bg-red-100 hover:text-red-500'}`}
    >
      <div className="flex items-center">
        <img
          src="public/Rank.svg" // Thay bằng URL của ảnh của bạn
          alt="Membership Icon"
          className="mr-3 ml-2 w-6 h6"
        />
        Hạng thành viên
      </div>
    </li>
  </ul>
</div>


      {/* Thông tin người dùng bên phải */}
      <Navbar/>
      <div className="flex-1 pt-24">
        {/* Render nội dung tương ứng với mục đã chọn */}
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
