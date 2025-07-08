import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Homepage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import CartPage from "./pages/CartPage"
import ShopPage from "./pages/shopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
