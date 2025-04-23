import {
  SiDaisyui,
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="footer items-center p-8 bg-neutral-700 text-base-content w-screen">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-center text-primary flex flex-wrap items-center justify-center gap-2">
            Built with <Heart fill="#CC241C" strokeWidth={0} className="inline"/> using
            <a
              href="http://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiReact className="inline mx-0 text-primary  " />
            </a>
            <a
              href="http://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiVite className="inline mx-0 text-primary" />
            </a>
            <a
              href="https://daisyui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiDaisyui className="inline mx-0 text-primary" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiTailwindcss className="inline mx-0 text-primary" />
            </a>
          </p>
          <p className="text-center text-primary flex flex-wrap items-center justify-center mt-4">
            &copy; {new Date().getFullYear()}
          </p>
          <p className="text-center text-primary mt-2">
            Source code in{" "}
            <span>
              <a
                href="https://github.com/Anifyuli/Anifyuli.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="inline mx-0 text-primary" />
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
