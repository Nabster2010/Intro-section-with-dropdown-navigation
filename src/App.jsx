import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="relative bg-AlmostWhite w-full px-4 md:px-8 py-4">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
