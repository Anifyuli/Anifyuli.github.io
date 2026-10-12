import { TypewriterText } from './TypewriterText'
import type { ReactNode } from 'preact/compat'

interface IconTextComponentProps {
    icon: ReactNode
    text: string
}

export function IconTextComponent({ icon, text }: IconTextComponentProps) {
    return (
        <div className="m-2 flex flex-row justify-start rounded-lg border-transparent px-3 py-2">
            <div className="px-2">{icon}</div>
            <div className="mx-1">
                <div className="relative inline-block w-max">
                    <span
                        aria-hidden="true"
                        className="invisible whitespace-nowrap text-sm font-bold sm:text-base"
                    >
                        {text}
                    </span>
                    <span className="absolute inset-0 whitespace-nowrap text-sm font-bold sm:text-base">
                        <TypewriterText
                            content={text}
                            delay={60}
                            repeatCount={3}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
