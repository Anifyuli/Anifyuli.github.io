import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
    icon: SimpleIcon
    className?: string
    title?: string
    color?: string
}

export function BrandIcon({ icon, className, title, color }: BrandIconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            class={`fill-current ${className ?? ''}`}
            style={color ? { color } : undefined}
            role="img"
            aria-label={title ?? icon.title}
        >
            {title && <title>{title}</title>}
            <path d={icon.path} />
        </svg>
    )
}
