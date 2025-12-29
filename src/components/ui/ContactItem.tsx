import { SimpleIcon } from 'simple-icons'
import { BrandIcon } from './BrandIcon'

interface ContactItemProps {
    icon: SimpleIcon
    username: string
    tooltip: string
    link: string
}

export function ContactItem({
    icon,
    username,
    tooltip,
    link,
}: ContactItemProps) {
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="tooltip tooltip-bottom mx-3 flex items-center justify-center px-2"
                    data-tip={tooltip}
                >
                    <BrandIcon
                        icon={icon}
                        className="mx-2 h-16 w-16 rounded-sm p-2"
                    />{' '}
                    <p className="text-base hover:font-bold">{username}</p>
                </div>
            </a>
        </>
    )
}
