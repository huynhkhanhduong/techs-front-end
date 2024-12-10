function PhoneSeri() {
    const iphoneSeries = [
      "iPhone 16 Series",
      "iPhone 15 Series",
      "iPhone 14 Series",
      "iPhone 13 Series",
      "iPhone 12 Series",
      "iPhone 11 Series",
    ];
  
    return (
      <div className="flex gap-4 flex-wrap mt-4">
        {iphoneSeries.map((series, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-md border border-black text-sm bg-white text-gray-800 focus:outline-none font-semibold"
          >
            {series}
          </button>
        ))}
      </div>
    );
  }
  
  export default PhoneSeri;
  