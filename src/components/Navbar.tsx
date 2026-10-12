import { useState, useEffect } from 'preact/hooks'
import { TargetedEvent } from 'preact'
import { Menu } from 'lucide-preact'
import { ThemeSwitcher } from './ThemeSwitcher'

interface NavbarProps {
    onOpenSkills: () => void
}

export function Navbar({ onOpenSkills }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Smooth scroll function
    const handleSmoothScroll = (
        e: TargetedEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault()
        const targetSection = document.getElementById(targetId)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            className={`navbar fixed z-10 w-full bg-base-100 py-2 shadow-lg transition-all duration-300 ${scrolled ? 'bg-opacity-90' : ''}`}
        >
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
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                    >
                        <li>
                            <a
                                className="text-lg"
                                href="#about"
                                onClick={(e) => handleSmoothScroll(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg"
                                href="#expertise"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onOpenSkills()
                                }}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg"
                                href="#contact"
                                onClick={(e) =>
                                    handleSmoothScroll(e, 'contact')
                                }
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <a className="btn btn-ghost normal-case" href="/">
                    <img
                        src="/svg/Anifyuli.svg"
                        alt="Logo"
                        width={184}
                        height={47}
                        className="h-8 w-auto px-1"
                    />
                </a>
            </div>

            {/* Navbar center for larger screens */}
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex={0} className="menu menu-horizontal w-full gap-2">
                    <li>
                        <a
                            href="#about"
                            onClick={(e) => handleSmoothScroll(e, 'about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#expertise"
                            onClick={(e) => {
                                e.preventDefault()
                                onOpenSkills()
                            }}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, 'contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end">
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
