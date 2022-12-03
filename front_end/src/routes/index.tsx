import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesMain;
