import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skill } from "@/components/Skill";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="pt-2 max-w-full">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
