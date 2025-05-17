import {
    SiDaisyui,
    SiExpo,
    SiJavascript,
    SiNestjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from '@icons-pack/react-simple-icons'
import { TechLogo } from './ui/TechLogo'

export function Expertise() {
    const languageItems = [
        { icon: SiJavascript, tooltip: 'Javascript' },
        { icon: SiTypescript, tooltip: 'Typescript' },
    ]

    const techItems = [
        { icon: SiDaisyui, tooltip: 'daisyUI' },
        { icon: SiExpo, tooltip: 'Expo' },
        { icon: SiNestjs, tooltip: 'NestJS' },
        { icon: SiReact, tooltip: 'React' },
        { icon: SiReact, color: '#E7E1D6', tooltip: 'React Native' },
        { icon: SiTailwindcss, tooltip: 'TailwindCSS' },
        { icon: SiVite, tooltip: 'Vite' },
    ]

    return (
        <>
            <div>
                <div className="my-3">
                    <h2 className="mb-6 text-center text-2xl font-bold">
                        Programming Language
                    </h2>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-4 px-24 py-3">
                    {languageItems.map((languageItem, index) => (
                        <TechLogo
                            key={index}
                            Icon={languageItem.icon}
                            tooltip={languageItem.tooltip}
                        />
                    ))}
                </div>
            </div>
            <div className="my-3">
                <h2 className="mb-6 mt-8 text-center text-2xl font-bold">
                    Frameworks & Tech Stacks
                </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 px-24 py-3">
                {techItems.map((techItem, index) => (
                    <TechLogo
                        key={index}
                        Icon={techItem.icon}
                        color={techItem.color}
                        tooltip={techItem.tooltip}
                    />
                ))}
            </div>
        </>
    )
}
