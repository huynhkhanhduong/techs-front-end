import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList"; // Import ProductList

const Laptop = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0); // Chỉ số bắt đầu
  const [error, setError] = useState(null); // State để lưu lỗi
  const [favorites, setFavorites] = useState([]); // Lưu trữ sản phẩm yêu thích

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        const laptops = response.data.filter((product) => product.category === "laptop"); // Lọc laptop
        setProducts(laptops);
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
    "Macbook",
    "Asus",
    "MSI",
    "Lenovo",
    "HP",
    "Acer",
    "Dell",
    "Huawei",
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
        <h1 className="text-2xl font-semibold text-center">LAPTOP</h1>
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
          className="px-4 py-2 bg-gray-300 text-white rounded-l-lg hover:bg-gray-400 text-2xl absolute z-10 left-0"
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
          className="px-4 py-2 bg-gray-300 text-white rounded-r-lg hover:bg-gray-400 text-2xl absolute z-10 right-0"
        >
          &gt;
        </button>
      </div>
      </div>
  );
};

export default Laptop;
