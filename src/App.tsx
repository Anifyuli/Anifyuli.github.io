import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skill } from "@/components/Skill";

function App() {
  return (
    <div className="pt-2 px-2">
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </div>
  );
}

export default App;
