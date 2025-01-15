interface ContactItemProps {
  Icon: React.ElementType;
  username: string;
  tooltip: string;
  link: string;
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
          className="flex items-center justify-center mx-3 px-2 tooltip tooltip-bottom"
          data-tip={tooltip}
        >
          <Icon className="w-14 h-14 p-2 mx-2 rounded-full" />{" "}
          <p className="text-base hover:font-bold">{username}</p>
        </div>
      </a>
    </>
  );
}
