import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList"; // Import ProductList

const Tablet = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Chỉ số bắt đầu
  const [error, setError] = useState(null); // State để lưu lỗi
  const [favorites, setFavorites] = useState([]); // Lưu trữ sản phẩm yêu thích

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        const tables = response.data.filter((product) => product.category === "tablet"); // Lọc laptop
      setProducts(tables);
      })
      .catch((error) => {
        setError("Không thể tải dữ liệu sản phẩm.");
        console.error(error);
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500 font-bold">{error}</div>; // Hiển thị lỗi nếu có
  }

  // Hàm chuyển đến sản phẩm trước (di chuyển 1 bước)
  const prevProducts = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + products.length) % products.length
    );
  };

  // Hàm chuyển đến sản phẩm tiếp theo (di chuyển 1 bước)
  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  if (products.length === 0) {
    return <div className="text-center text-gray-500">Không có sản phẩm nào.</div>;
  }

  // Lấy 5 sản phẩm liên tiếp từ startIndex
  const currentProducts = [
    ...products.slice(startIndex, startIndex + 5),
    ...products.slice(0, Math.max(0, startIndex + 5 - products.length)),
  ];

  const categories = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Oppo",
    "vivo",
    "realme",
    "ASUS",
    "TECNO",
    "Xem tất cả",
  ];

  // Hàm toggle yêu thích
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <div className="mb-12 ">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-semibold text-center">MÁY TÍNH BẢNG</h1>
        {/* Các nút loại điện thoại */}
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-xl text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center relative">
        {/* Nút Prev */}
        <button
          onClick={prevProducts}
          className="px-2 py-2 bg-gray-200 text-white rounded-r-full hover:bg-gray-400 text-2xl absolute z-10 -left-2"
        >
          &lt;
        </button>

        {/* Hiển thị sản phẩm */}
        <ProductList
          products={currentProducts}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        {/* Nút Next */}
        <button
          onClick={nextProducts}
          className="px-2 py-2 bg-gray-200 text-white rounded-l-full hover:bg-gray-400 text-2xl absolute z-10 -right-2"
        >
          &gt;
        </button>
      </div>
      </div>
  );
};

export default Tablet;
