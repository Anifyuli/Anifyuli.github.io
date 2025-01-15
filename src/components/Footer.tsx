import {
  SiDaisyui,
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
    <>
      <footer className="footer items-center p-8 bg-neutral-700 text-base-content w-screen">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-center text-primary flex flex-wrap items-center justify-center gap-2">
            Built with ❤️ using
            <a
              href="http://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiReact className="inline w-6 h-6 mx-0 text-primary  " />
            </a>
            <a
              href="http://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiVite className="inline w-6 h-6 mx-0 text-primary" />
            </a>
            <a
              href="https://daisyui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiDaisyui className="inline w-6 h-6 mx-0 text-primary" />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <SiTailwindcss className="inline w-6 h-6 mx-0 text-primary" />
            </a>
          </p>
          <p className="text-center text-primary flex flex-wrap items-center justify-center mt-4">
            &copy; {new Date().getFullYear()}
          </p>
          <p className="text-center mt-2">
            Source code in{" "}
            <span>
              <a
                href="https://github.com/Anifyuli/Anifyuli.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="inline w-4 h-4 mx-0 text-primary" />
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
