import { FaSortAmountDown, FaSortAmountUp, FaHotjar, FaEye } from "react-icons/fa";

function SortBy() {
  return (
    <div className="pt-2 flex flex-col w-full max-w-4xl ">
      <h1 className="text-lg font-bold text-gray-800 mb-2">Sắp xếp theo</h1>
      <div className="flex flex-row gap-3">
        {/* Nút Giá cao - thấp */}
        <button className="flex items-center justify-start gap-2 w-full p-2 border border-gray-300 rounded-lg hover:bg-blue-100">
          <FaSortAmountDown className="text-blue-500 text-xl" />
          <span className="text-gray-700 font-medium">Giá cao - thấp</span>
        </button>

        {/* Nút Giá thấp - cao */}
        <button className="flex items-center justify-start gap-2 w-full p-2 border border-gray-300 rounded-lg hover:bg-blue-100">
          <FaSortAmountUp className="text-blue-500 text-xl" />
          <span className="text-gray-700 font-medium">Giá thấp - cao</span>
        </button>

        {/* Nút Khuyến mãi hot */}
        <button className="flex items-center justify-start gap-2 w-full p-2 border border-gray-300 rounded-lg hover:bg-blue-100">
          <FaHotjar className="text-red-500 text-xl" />
          <span className="text-gray-700 font-medium">Khuyến mãi hot</span>
        </button>

        {/* Nút Xem nhiều */}
        <button className="flex items-center justify-start gap-2 w-full p-2 border border-gray-300 rounded-lg hover:bg-blue-100">
          <FaEye className="text-green-500 text-xl" />
          <span className="text-gray-700 font-medium">Xem nhiều</span>
        </button>
      </div>
    </div>
  );
}

export default SortBy;
