import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
