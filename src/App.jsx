import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./components/User/UserProfile";
import Apple from "./components/Product/Apple";
import ShoppingCart from "./components/Product/ShoppingCart";
import Buy from "./components/Product/Buy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Router>
  );
}

export default App;
