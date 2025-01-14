import {
  SiDaisyui,
  SiExpo,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { TechLogo } from "./ui/TechLogo";

export function Expertise() {
  const languageItems = [
    { icon: SiJavascript, tooltip: "Javascript" },
    { icon: SiTypescript, tooltip: "Typescript" },
  ];

  const techItems = [
    { icon: SiDaisyui, tooltip: "daisyUI" },
    { icon: SiExpo, tooltip: "Expo" },
    { icon: SiReact, tooltip: "React" },
    { icon: SiReact, color: "#E7E1D6", tooltip: "React Native" },
    { icon: SiTailwindcss, tooltip: "TailwindCSS" },
    { icon: SiVite, tooltip: "Vite" },
  ];

  return (
    <>
      <div id="expertise">
        <div className="my-3">
          <h2 className="text-2xl font-bold text-center mb-6">
            Programming Language
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center px-24 py-3 gap-4">
          {languageItems.map((languageItem, index) => (
            <TechLogo
              key={index}
              Icon={languageItem.icon}
              tooltip={languageItem.tooltip}
            />
          ))}
        </div>
      </div>
      <div className="my-3">
        <h2 className="text-2xl font-bold text-center mt-8 mb-6">
          Frameworks & Tech Stacks
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center px-24 py-3 gap-4">
        {techItems.map((techItem, index) => (
          <TechLogo
            key={index}
            Icon={techItem.icon}
            color={techItem.color}
            tooltip={techItem.tooltip}
          />
        ))}
      </div>
    </>
  );
}
