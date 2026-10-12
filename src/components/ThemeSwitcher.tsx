import { Moon, Sun, SunMoon } from 'lucide-preact'
import { useState, useEffect } from 'preact/hooks'

const THEMES = ['auto', 'light', 'dark'] as const
type Theme = (typeof THEMES)[number]

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem('theme')
        return stored === 'light' || stored === 'dark' ? stored : 'auto'
    })

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        const apply = () => {
            const resolved =
                theme === 'auto' ? (mq.matches ? 'dark' : 'light') : theme
            document.documentElement.setAttribute('data-theme', resolved)
        }
        apply()
        localStorage.setItem('theme', theme)
        mq.addEventListener('change', apply)
        return () => mq.removeEventListener('change', apply)
    }, [theme])

    const cycle = () => {
        const idx = THEMES.indexOf(theme)
        setTheme(THEMES[(idx + 1) % THEMES.length])
    }

    return (
        <div className="flex-none">
            <button
                className="btn btn-square btn-ghost"
                onClick={cycle}
                aria-label="Ganti tema"
            >
                {theme === 'auto' ? (
                    <SunMoon className="h-5 w-5" />
                ) : theme === 'dark' ? (
                    <Moon className="h-5 w-5" />
                ) : (
                    <Sun className="h-5 w-5" />
                )}
            </button>
        </div>
    )
}