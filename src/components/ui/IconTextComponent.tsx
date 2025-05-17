import { TypewriterText } from './TypewriterText'

interface IconTextComponentProps {
    icon: React.ReactNode
    text: string
}

export function IconTextComponent({ icon, text }: IconTextComponentProps) {
    return (
        <div className="m-2 flex flex-row justify-start rounded-lg border-transparent px-3 py-2">
            <div className="px-2">{icon}</div>
            <div className="mx-1">
                <TypewriterText
                    content={text}
                    delay={60}
                    className="text-sm font-bold sm:text-base"
                    repeatCount={3}
                />
            </div>
        </div>
    )
}
