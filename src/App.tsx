import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skill } from "@/components/Skill";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-visible">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
