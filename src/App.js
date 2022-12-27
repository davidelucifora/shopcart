import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        mainHeading="The Best Surf Boards You can Buy."
        subHeading="Three types. No Fuss. Choose based on your skills"
        ctaText="Shop Now"
      />
    </div>
  );
}

export default App;
