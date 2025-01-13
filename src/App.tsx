import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

function App() {
  return (
    <div className="pt-2 px-2">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
