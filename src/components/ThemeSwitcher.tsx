import { Moon, Sun } from 'lucide-preact'
import { useState, useEffect } from 'preact/hooks'
import { TargetedEvent } from 'preact'

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
    const handleToggle = (e: TargetedEvent<HTMLInputElement>) => {
        const newTheme = e.currentTarget.checked ? 'dark' : 'light'
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
