import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <nav className="navbar bg-base-100 bg-opacity-60 fixed z-10 w-full py-2 shadow-lg">
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
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost normal-case" href="/">
          <img
            src="/svg/Anifyuli.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>
      </div>

      {/* Navbar center for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal w-full">
          <li>
            <details>
              <summary>Skills</summary>
              <ul className="bg-base-100 rounded-t-none w-full">
                <li>
                  <a href="#expertise">Expertise</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
