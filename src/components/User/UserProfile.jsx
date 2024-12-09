import { useState } from 'react';
import Home from './Home';

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
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Trang chủ</h1>
            <Home/>
          </div>
        );
      case 'purchaseHistory':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Lịch sử mua hàng</h1>
            <p>Đây là lịch sử mua hàng của bạn.</p>
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
    <div className="flex">
      {/* Thanh module bên trái */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              onClick={() => handleSelection('home')}
              className="text-gray-700 hover:text-purple-600"
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleSelection('purchaseHistory')}
              className="text-gray-700 hover:text-purple-600"
            >
              Lịch sử mua hàng
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleSelection('offers')}
              className="text-gray-700 hover:text-purple-600"
            >
              Ưu đãi của bạn
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleSelection('membership')}
              className="text-gray-700 hover:text-purple-600"
            >
              Hạng thành viên
            </a>
          </li>
        </ul>
      </div>

      {/* Thông tin người dùng bên phải */}
      <div className="flex-1 p-6">
        {/* Render nội dung tương ứng với mục đã chọn */}
        {renderContent()}


      </div>
    </div>
  );
};

export default UserProfile;
