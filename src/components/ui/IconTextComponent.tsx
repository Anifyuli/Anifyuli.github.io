import { TypewriterText } from "./TypewriterText";

interface IconTextComponentProps {
  icon: React.ReactNode;
  text: string;
}

export function IconTextComponent({ icon, text }: IconTextComponentProps) {
  return (
    <div className="flex flex-row justify-start py-2 px-3 m-2 border-transparent rounded-lg">
      <div className="px-2">
        {icon}
      </div>
      <div className="mx-1">
        <TypewriterText content={text} delay={40} className="font-bold text-sm sm:text-base" repeatCount={3}/>
      </div>
    </div>
  );
}
