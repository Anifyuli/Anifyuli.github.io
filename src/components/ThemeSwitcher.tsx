import { Moon, Sun } from 'lucide-react'
import { useState, useEffect, ChangeEvent } from 'react'

export function ThemeSwitcher() {
    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) return storedTheme
        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches
        return systemPrefersDark ? 'dark' : 'light'
    })

    // Toggle theme between dark and light
    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTheme = e.target.checked ? 'dark' : 'light'
        setTheme(newTheme)
    }

    // Save theme to localStorage and apply to HTML element
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
                <label className="swap swap-rotate h-12 w-12">
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        checked={theme === 'dark'}
                        data-toggle-theme="dark,light"
                        data-act-class="ACTIVECLASS"
                        aria-label="Toggle Theme"
                    />
                    <Sun className="swap-on h-5 w-5" />
                    <Moon className="swap-off h-5 w-5" />
                </label>
            </button>
        </div>
    )
}
