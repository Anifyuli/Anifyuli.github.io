import { Menu } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 bg-opacity-60 fixed z-10 px-4 py-2 rounded-lg">
      <div className="navbar-start flex-1">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost" href="/">
          <img src="/svg/Anifyuli.svg" alt="" />
        </a>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Skills</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a href="#expertise">Expertise</a>
                  </li>
                  <li>
                    <a>Projects</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end flex-none px-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
