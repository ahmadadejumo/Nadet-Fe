import "./App.css";
import Discover from "./components/discover/Discover";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <div className="">
      <Header />
      <ProductList />
      <Discover />
    </div>
  );
}

export default App;
