import { BrandIcon } from './BrandIcon'
import type { SimpleIcon } from 'simple-icons'

interface TechLogoProps {
    icon: SimpleIcon
    tooltip: string
    class?: string
    color?: string
}

export function TechLogo({ icon, tooltip, class: cls, color }: TechLogoProps) {
    return (
        <div
            class="tooltip tooltip-bottom mx-3 flex items-center justify-center px-2"
            data-tip={tooltip}
        >
            <BrandIcon
                icon={icon}
                className={cls ?? 'h-24 w-24 rounded-full p-2'}
                color={color}
            />
        </div>
    )
}
