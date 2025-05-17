import {
    SiDaisyui,
    SiGithub,
    SiReact,
    SiTailwindcss,
    SiVite,
} from '@icons-pack/react-simple-icons'
import { Heart } from 'lucide-react'

export function Footer() {
    return (
        <>
            <footer className="footer w-screen items-center bg-neutral-700 p-8 text-base-content">
                <div className="mx-auto flex flex-col items-center">
                    <p className="flex flex-wrap items-center justify-center gap-2 text-center text-primary">
                        Built with{' '}
                        <Heart
                            fill="#CC241C"
                            strokeWidth={0}
                            className="inline"
                        />{' '}
                        using
                        <a
                            href="http://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <SiReact className="mx-0 inline text-primary" />
                        </a>
                        <a
                            href="http://vite.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <SiVite className="mx-0 inline text-primary" />
                        </a>
                        <a
                            href="https://daisyui.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <SiDaisyui className="mx-0 inline text-primary" />
                        </a>
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <SiTailwindcss className="mx-0 inline text-primary" />
                        </a>
                    </p>
                    <p className="mt-4 flex flex-wrap items-center justify-center text-center text-primary">
                        &copy; {new Date().getFullYear()}
                    </p>
                    <p className="mt-2 text-center text-primary">
                        Source code in{' '}
                        <span>
                            <a
                                href="https://github.com/Anifyuli/Anifyuli.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub className="mx-0 inline text-primary" />
                            </a>
                        </span>
                    </p>
                </div>
            </footer>
        </>
    )
}
