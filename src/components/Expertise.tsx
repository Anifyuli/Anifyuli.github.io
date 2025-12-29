import {
    siDaisyui,
    siExpo,
    siJavascript,
    siNestjs,
    siReact,
    siTailwindcss,
    siTypescript,
    siVite,
} from 'simple-icons'
import { TechLogo } from './ui/TechLogo'

export function Expertise() {
    const languageItems = [
        { icon: siJavascript, color: '#F7DF1E', tooltip: 'Javascript' },
        { icon: siTypescript, color: '#3178C6', tooltip: 'Typescript' },
    ]

    const techItems = [
        { icon: siDaisyui, color: '#1AD1A5', tooltip: 'daisyUI' },
        { icon: siExpo, color: '#1C2024', tooltip: 'Expo' },
        { icon: siNestjs, color: '#E0234E', tooltip: 'NestJS' },
        { icon: siReact, color: '#61DAFB', tooltip: 'React' },
        { icon: siReact, color: '#28292C', tooltip: 'React Native' },
        { icon: siTailwindcss, color: '#06B6D4', tooltip: 'TailwindCSS' },
        { icon: siVite, color: '#646CFF', tooltip: 'Vite' },
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
                            icon={languageItem.icon}
                            color={languageItem.color}
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
                        icon={techItem.icon}
                        color={techItem.color}
                        tooltip={techItem.tooltip}
                    />
                ))}
            </div>
        </>
    )
}
