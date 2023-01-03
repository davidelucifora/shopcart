import "./App.css";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Hero
        mainHeading="The Best Surf Boards You can Buy."
        subHeading="Three types. No Fuss. Choose based on your skills"
        ctaText="Shop Now"
      />
    </div>
  );
}

export default App;
