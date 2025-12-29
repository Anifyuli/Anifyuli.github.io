import {
    siDaisyui,
    siGithub,
    siPreact,
    siTailwindcss,
    siVite,
} from 'simple-icons'
import { Heart } from 'lucide-preact'
import { BrandIcon } from './ui/BrandIcon'

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
                            href="http://preactjs.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <BrandIcon
                                icon={siPreact}
                                className="mx-0 inline h-5 w-5 text-primary"
                            />
                        </a>
                        <a
                            href="http://vite.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <BrandIcon
                                icon={siVite}
                                className="mx-0 inline h-5 w-5 text-primary"
                            />
                        </a>
                        <a
                            href="https://daisyui.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <BrandIcon
                                icon={siDaisyui}
                                className="mx-0 inline h-5 w-5 text-primary"
                            />
                        </a>
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <BrandIcon
                                icon={siTailwindcss}
                                className="mx-0 inline h-5 w-5 text-primary"
                            />
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
                                <BrandIcon
                                    icon={siGithub}
                                    className="mx-0 inline h-6 w-6 text-primary"
                                />
                            </a>
                        </span>
                    </p>
                </div>
            </footer>
        </>
    )
}
