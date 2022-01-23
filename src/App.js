import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Products from "./pages/Products/Products";
import Faqs from "./pages/FAQs/Faqs";
import Pricing from "./pages/Pricing/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReferAFriend from "./pages/ReferAFriend/ReferAFriend";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="refer" element={<ReferAFriend />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
