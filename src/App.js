import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
    </div>
  );
}

export default App;
