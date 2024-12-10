import { useState, useEffect } from "react";

const Advertisement = () => {
  // Array of image URLs
  const images = [
    "public/qc1.png",
    "public/qc2.png",
    "public/qc3.png",
    "public/qc4.png",
    "public/qc5.png",
    "public/qc6.png",
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false); // Track hover state

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, );

  return (
    <div
      className="relative flex justify-center items-center max-w-full w-full h-56 pt-24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Nút Prev */}
      <button
        onClick={prevImage}
        className={`px-2 py-2 bg-gray-200 text-gray-800 rounded-r-full hover:bg-gray-400 text-2xl absolute z-10 left-0 ${
          hovered ? "block" : "hidden"
        }`}
      >
        &lt;
      </button>

      {/* Hình ảnh hiện tại */}
      <img
        src={images[currentImageIndex]}
        alt={`Advertisement ${currentImageIndex + 1}`}
        className="object-cover w-full h-full max-w-full rounded-lg"
      />

      {/* Nút Next */}
      <button
        onClick={nextImage}
        className={`px-2 py-2 bg-gray-200 text-gray-800 rounded-l-full hover:bg-gray-400 text-2xl absolute z-10 right-0 ${
          hovered ? "block" : "hidden"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Advertisement;
