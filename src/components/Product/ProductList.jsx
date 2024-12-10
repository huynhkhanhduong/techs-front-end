import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductList = ({ products, favorites, toggleFavorite }) => {
  return (
    <div className="flex justify-between items-stretch gap-4 w-full ">
      {products.map((product) => (
        <Link
        to="buy"
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105 hover:shadow-lg w-full sm:w-1/5 flex flex-col relative"
        >
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs p-2 rounded-r-lg font-semibold">
           Giảm 17%
            </div>
          <div className="absolute top-0 right-0 text-blue-400 text-xs p-1 border border-blue-400 rounded-lg">Trả góp 0%</div>
          <img
            src={`/public/${product.image}`}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <h2 className="text-sm mt-3 font-semibold text-gray-800">{product.name}</h2>
          <p className="text-red-500 font-bold text-lg">{product.price}</p>

          {/* Chứa sao và nút yêu thích */}
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
        </Link>
      ))}
    </div>
  );
};
// Prop Types validation
ProductList.propTypes = {
  products: PropTypes.array.isRequired, // Array of products (should be required)
  favorites: PropTypes.array.isRequired, // Array of favorite product IDs (should be required)
  toggleFavorite: PropTypes.func.isRequired, // Function to toggle favorite status (should be required)
};
export default ProductList;
