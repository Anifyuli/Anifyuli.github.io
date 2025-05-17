interface ProjectCardProps {
    Icon: React.ElementType
    projectName: string
    projectDetail: React.ReactNode
    projectLink?: string
}

export function ProjectCard({
    Icon,
    projectName,
    projectDetail,
    projectLink,
}: ProjectCardProps) {
    return (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <div className="flex h-full max-w-xs flex-col rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 flex flex-row items-center space-x-4">
                    <Icon className="h-12 w-12 rounded-sm" />
                    <h4 className="text-xl font-medium">{projectName}</h4>
                </div>
                <div className="w-full flex-grow">
                    <p className="break-words text-base leading-relaxed">
                        {projectDetail}
                    </p>
                </div>
            </div>
        </a>
    )
}
