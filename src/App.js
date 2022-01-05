import "./App.css";
import Discover from "./components/discover/Discover";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import Reasons from "./components/reasons/Reasons";
import SocialProfile from "./socialProfile/SocialProfile";

function App() {
  return (
    <div className="">
      <Header />
      <ProductList />
      <Discover />
      <Reasons />
      <SocialProfile />
    </div>
  );
}

export default App;
