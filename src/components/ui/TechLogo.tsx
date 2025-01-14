interface TechLogoProps {
  Icon: React.ElementType;
  color?: string;
  tooltip: string;
}

export function TechLogo({ Icon, color = "default", tooltip }: TechLogoProps) {
  return (
    <div
      className="flex items-center justify-center mx-3 px-2 tooltip tooltip-bottom  "
      data-tip={tooltip}
    >
      <Icon className="w-24 h-24 p-2 rounded-full" color={color} />{" "}
    </div>
  );
}
