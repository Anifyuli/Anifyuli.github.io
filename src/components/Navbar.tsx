import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

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

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smooth scroll & close dropdown function
  const handleSmoothScrollAndCloseDropdown = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    handleSmoothScroll(e, targetId);
    
    // Close dropdown
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <nav className={`navbar bg-base-100 fixed z-10 w-full py-2 shadow-lg transition-all duration-300 ${scrolled ? 'bg-opacity-90' : ''}`}>
      <div className="navbar-start flex items-center">
        {/* Dropdown for mobile */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-lg" href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a className="text-lg" href="#expertise" onClick={(e) => handleSmoothScroll(e, "expertise")}>
                Expertise
              </a>
            </li>
            <li>
              <a className="text-lg" href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a className="text-lg" href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost normal-case" href="/">
          <img src="/svg/Anifyuli.svg" alt="Logo" className="h-8 w-auto px-1" />
        </a>
      </div>

      {/* Navbar center for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul tabIndex={0} className="menu menu-horizontal w-full">
          <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
          </li>
          <li>
            <details ref={detailsRef}>
              <summary tabIndex={0}>Skills</summary>
              <ul className="bg-base-100 rounded-lg">
                <li>
                  <a 
                    href="#expertise" 
                    onClick={(e) => handleSmoothScrollAndCloseDropdown(e, "expertise")}
                  >
                    Expertise
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    onClick={(e) => handleSmoothScrollAndCloseDropdown(e, "projects")}
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}