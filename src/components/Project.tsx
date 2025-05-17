import {
    SiVuedotjs,
    SiExpress,
    SiMongodb,
    SiExpo,
    SiDjango,
    SiBootstrap,
    SiFlutter,
    SiKotlin,
    SiPhp,
    SiMariadb,
    SiNestjs,
    SiTypescript,
    SiPostgresql,
    SiJson,
} from '@icons-pack/react-simple-icons'
import { ProjectCard } from './ui/ProjectCard'

export function Project() {
    const projectItem = [
        {
            Icon: SiVuedotjs,
            projectName: 'TuxSanctuary',
            projectDetail: (
                <>
                    Simple blogging platform about Linux and FLOSS updates using
                    <SiVuedotjs className="mx-1 inline h-4 w-4" />
                    <SiExpress className="mx-1 inline h-4 w-4" />
                    and
                    <SiMongodb className="mx-1 inline h-4 w-4" />
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/tux_sanctuary',
        },
        {
            Icon: SiExpo,
            projectName: 'Simple To-Do List',
            projectDetail: (
                <>
                    Simple ToDo list app using{' '}
                    <SiExpo className="mx-1 inline h-4 w-4" /> and{' '}
                    <SiJson className="mx-1 inline h-4 w-4" /> as saved data
                    format
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/simple-todo-list',
        },
        {
            Icon: SiDjango,
            projectName: 'Bakulan',
            projectDetail: (
                <>
                    Simple e-commerce using
                    <SiDjango className="mx-1 inline h-4 w-4" />
                    as backend and
                    <SiBootstrap className="mx-1 inline h-4 w-4" />
                    for styling
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/bakulan',
        },
        {
            Icon: SiFlutter,
            projectName: 'MyPati',
            projectDetail: (
                <>
                    Simple app developed using{' '}
                    <SiFlutter className="mx-1 inline h-4 w-4" /> for
                    introducing Pati regency for Dicoding rookie Flutter course
                    submission
                </>
            ),
            projectLink:
                'https://github.com/Anifyuli/dicoding-submission-flutter-rookie',
        },
        {
            Icon: SiKotlin,
            projectName: 'SimpleToDo List',
            projectDetail: (
                <>
                    Older To-Do list project using{' '}
                    <SiKotlin className="mx-1 inline h-4 w-4" /> as Android
                    frontend with <SiPhp className="mx-1 inline h-4 w-4" /> as
                    backend API with{' '}
                    <SiMariadb className="mx-1 inline h-4 w-4" /> as database
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/SimpleToDoList',
        },
        {
            Icon: SiNestjs,
            projectName: 'Eunomia',
            projectDetail: (
                <>
                    Task management RESTful API using{' '}
                    <SiTypescript className="mx-1 inline h-4 w-4" /> as
                    language, <SiNestjs className="mx-1 inline h-4 w-4" /> as
                    backend, & <SiPostgresql className="mx-1 inline h-4 w-4" />{' '}
                    as database manager
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/eunomia',
        },
    ]

    return (
        <div id="projects" className="mb-6 mt-12 scroll-mt-20">
            <h2 className="mb-6 text-center text-2xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projectItem.map((item, index) => (
                    <ProjectCard
                        key={index}
                        Icon={item.Icon}
                        projectName={item.projectName}
                        projectDetail={item.projectDetail}
                        projectLink={item.projectLink}
                    />
                ))}
            </div>
        </div>
    )
}
