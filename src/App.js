import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Products from "./pages/Products/Products";
import Faqs from "./pages/FAQs/Faqs";
import Pricing from "./pages/Pricing/Pricing";
import ReferAFriend from "./pages/ReferAFriend/ReferAFriend";
import Events from "./pages/Events/Events";
import Affiliates from "./pages/Affiliates/Affiliates";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import CompanyValues from "./pages/CompanyValues/CompanyValues";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import LiveSessions from "./pages/LiveSessions/LiveSessions";
import AffiliateAgreement from "./pages/AffiliateAgreement/AffiliateAgreement";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import { AuthProvider } from "./Context/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="products" element={<Products />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="refer" element={<ReferAFriend />} />
            <Route path="events" element={<Events />} />
            <Route path="affiliates" element={<Affiliates />} />
            <Route path="terms-&-condition" element={<TermsOfService />} />
            <Route path="company-values" element={<CompanyValues />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="live-sessions" element={<LiveSessions />} />
            <Route
              path="affiliate-agreement"
              element={<AffiliateAgreement />}
            />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="change-password/:uid/:token"
              element={<ChangePassword />}
            />
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
