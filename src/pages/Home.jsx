import Laptop from '../components/Product/Laptop';
import Navbar from '../components/Navbar';
import Phone from '../components/Product/Phone';
import Monitor from '../components/Product/Monitor';
import Tablet from '../components/Product/Tablet';
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="h-full  flex flex-col items-center justify-center pt-20"
        style={{
          backgroundImage: "url('/public/pexels-ozgomz-845405.jpg')",
        }}
      >
        <div className="px-4 py-6 bg-white ml-4 mr-4 mt-4 rounded-lg max-w-7xl">
          <Phone />
          <Laptop />
          <Monitor/>
          <Tablet/>
        </div>
      </div>
    </>
  )
}

export default Home