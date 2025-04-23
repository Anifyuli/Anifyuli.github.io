import { useCallback } from "react";
import { Code } from "lucide-react";
import {
  SiGithub,
  SiLinux,
  SiOpensourceinitiative,
} from "@icons-pack/react-simple-icons";
import Avatar from "@/assets/img/ava.jpg";
import MyCv from "/docs/my-cv.pdf";
import { Download } from "lucide-react";
import { IconTextComponent } from "@/components/ui/IconTextComponent";

export function Hero() {
  const items = [
    { icon: <Code />, text: "Self taught programmer" },
    { icon: <SiLinux />, text: "Linux wizard" },
    { icon: <SiOpensourceinitiative />, text: "FLOSS enthusiast" },
  ];

  // Handling download button function
  const downloadCvAction = useCallback(() => {
    fetch(MyCv)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Anifyuli CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading CV:", error));
  }, []);

  return (
    <div className="my-16 lg:my-3">
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row items-center justify-between max-w-6xl w-full mx-auto gap-8">
          <div className="w-full lg:w-2/5 flex justify-center">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-sm rounded-full shadow-2xl"
            />
          </div>

          <div className="w-full lg:w-3/5 px-4 flex flex-col items-center lg:items-center justify-between space-y-6">
            <h1 className="text-center lg:text-left text-4xl sm:text-5xl font-bold">
              Moh. Anif Yuliansyah
            </h1>

            <div className="flex flex-col w-full space-y-3 my-2 lg:px-16">
              {items.map((item, index) => (
                <IconTextComponent
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>

            <div className="flex justify-center lg:justify-center w-full pt-6 gap-3">
              <a
                className="btn btn-primary flex items-center gap-2"
                onClick={downloadCvAction}
              >
                <Download /> Download CV
              </a>
              <a
                className="btn btn-primary flex items-center gap-2"
                href="https://github.com/Anifyuli"
                target="blank"
              >
                View on <SiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
