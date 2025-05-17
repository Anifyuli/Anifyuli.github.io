interface ContactItemProps {
    Icon: React.ElementType
    username: string
    tooltip: string
    link: string
}

export function ContactItem({
    Icon,
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
                    <Icon className="mx-2 h-16 w-16 rounded-sm p-2" />{' '}
                    <p className="text-base hover:font-bold">{username}</p>
                </div>
            </a>
        </>
    )
}
