import { useState, useEffect } from "react";
import { Code } from "lucide-react";
import {
  SiLinux,
  SiOpensourceinitiative,
} from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Avatar from "@/assets/img/ava.jpg";
import { IconTextComponent } from "@/components/ui/IconTextComponent";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { icon: <Code />, text: "Self taught programmer" },
    { icon: <SiLinux />, text: "Linux wizard" },
    { icon: <SiOpensourceinitiative />, text: "FLOSS enthusiast" },
  ];

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setScrolled(true);
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`my-10 transition-all duration-500 ease-in-out ${
        scrolled ? "opacity-40 scroll-up-custom" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="hero min-h-full">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="flex justify-center w-full lg:w-auto">
            <img
              src={Avatar}
              className="max-w-sm rounded-full shadow-2xl mt-4"
            />
          </div>
          <div className="px-4 flex flex-col items-start justify-between h-full">
            <h1 className="text-left md:mx-auto md:text-center text-5xl font-bold">
              Moh. Anif Yuliansyah
            </h1>
            <div className="flex flex-col flex-wrap my-4 items-start text-left">
              {items.map((item, index) => (
                <IconTextComponent
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <a className="btn btn-primary" href="" onClick={handleNext}>
                <Mail /> Mail Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
