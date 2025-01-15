interface ProjectCardProps {
  Icon: React.ElementType;
  projectName: string;
  projectDetail: React.ReactNode;
  projectLink?: string;
}

export function ProjectCard({
  Icon,
  projectName,
  projectDetail,
  projectLink,
}: ProjectCardProps) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col max-w-xs h-full p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-row items-center space-x-4 mb-3">
          <Icon className="w-12 h-12 rounded-sm" />
          <h4 className="text-xl font-medium">{projectName}</h4>
        </div>
        <div className="w-full flex-grow">
          <p className="text-base leading-relaxed break-words">
            {projectDetail}
          </p>
        </div>
      </div>
    </a>
  );
}
