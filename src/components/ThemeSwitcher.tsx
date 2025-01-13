import { Moon, Sun } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";

export function ThemeSwitcher() {
  // Use localStorage for checking initial theme or set fallback theme
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  // Handle theme toggling changes
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // Synchronize theme with saved localStorage value
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            aria-label="Toggle Theme"
          />
          <Sun className="w-5 h-5 swap-on" />
          <Moon className="w-5 h-5 swap-off" />
        </label>
      </button>
    </div>
  );
}
