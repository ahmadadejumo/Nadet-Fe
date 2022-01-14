import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Products from "./pages/Products/Products";
import Faqs from "./pages/FAQs/Faqs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
