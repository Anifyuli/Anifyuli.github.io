interface TechLogoProps {
    Icon: React.ElementType
    color?: string
    tooltip: string
}

export function TechLogo({ Icon, color = 'default', tooltip }: TechLogoProps) {
    return (
        <div
            className="tooltip tooltip-bottom mx-3 flex items-center justify-center px-2"
            data-tip={tooltip}
        >
            <Icon className="h-24 w-24 rounded-full p-2" color={color} />{' '}
        </div>
    )
}
