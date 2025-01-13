import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost"><img src="/svg/Anifyuli.svg" alt="" /></a>
      </div>
      <div className="flex-none px-5">
        <ThemeSwitcher />
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>Skills</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Expertise</a>
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
  );
}
