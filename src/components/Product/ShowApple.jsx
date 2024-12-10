import { useEffect, useState } from "react";
import axios from "axios";

const ShowApple = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // To store error state
  const [favorites, setFavorites] = useState([]); // Store favorite products

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        // Filter only Apple ShowApples
        const appleShowApples = response.data.filter((product) => product.category === "phone" );
        setProducts(appleShowApples);
      })
      .catch((error) => {
        setError("Không thể tải dữ liệu sản phẩm.");
        console.error(error);
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500 font-bold">{error}</div>;
  }


  if (products.length === 0) {
    return <div className="text-center text-gray-500">Không có sản phẩm nào.</div>;
  }


  // Function to toggle favorite status
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg relative"
          >
                      <div className="absolute top-0 left-0 bg-red-600 text-white text-xs p-2 rounded-r-lg font-semibold z-10">
           Giảm 17%
            </div>
          <div className="absolute top-0 right-0 text-blue-400 text-xs p-1 border border-blue-400 rounded-lg z-10">Trả góp 0%</div>
            {/* Product Content */}
            <div className="relative">
              <img
                src={`/public/${product.image}`}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="text-sm mt-3 font-semibold text-gray-800">{product.name}</h2>
              <p className="text-red-500 font-bold text-lg">{product.price}</p>
  
              <div className="flex items-center justify-between mt-auto gap-4">
            {/* Hiển thị 5 sao */}
            <div className="flex gap-0 -ml-1">
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
            </div>

            {/* Nút yêu thích */}
            <div className="flex items-center gap-0 -mr-1">
              <span className="text-xs text-zinc-500">Yêu thích</span>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`flex items-center text-lg ${
                  favorites.includes(product.id) ? "text-red-500" : "text-gray-500"
                } hover:text-red-500`}
              >
                <span
                  className={`p-1 ${
                    favorites.includes(product.id)
                      ? "text-red"
                      : "border-gray-500"
                  }  text-3xl `}
                >
                  &#9829;
                </span>
              </button>
            </div>
          </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ShowApple;
