import {
    siVuedotjs,
    siExpress,
    siMongodb,
    siExpo,
    siDjango,
    siBootstrap,
    siFlutter,
    siKotlin,
    siPhp,
    siMariadb,
    siNestjs,
    siTypescript,
    siPostgresql,
    siJson,
} from 'simple-icons'
import { ProjectCard } from './ui/ProjectCard'
import { BrandIcon } from './ui/BrandIcon'

export function Project() {
    const projectItem = [
        {
            icon: siVuedotjs,
            projectName: 'TuxSanctuary',
            projectDetail: (
                <>
                    Simple blogging platform about Linux and FLOSS updates using
                    <BrandIcon
                        icon={siVuedotjs}
                        className="mx-1 inline h-4 w-4"
                    />
                    <BrandIcon
                        icon={siExpress}
                        className="mx-1 inline h-4 w-4"
                    />
                    and
                    <BrandIcon
                        icon={siMongodb}
                        className="mx-1 inline h-4 w-4"
                    />
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/tux_sanctuary',
        },
        {
            icon: siExpo,
            projectName: 'Simple To-Do List',
            projectDetail: (
                <>
                    Simple ToDo list app using{' '}
                    <BrandIcon icon={siExpo} className="mx-1 inline h-4 w-4" />{' '}
                    and{' '}
                    <BrandIcon icon={siJson} className="mx-1 inline h-4 w-4" />{' '}
                    as saved data format
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/simple-todo-list',
        },
        {
            icon: siDjango,
            projectName: 'Bakulan',
            projectDetail: (
                <>
                    Simple e-commerce using
                    <BrandIcon
                        icon={siDjango}
                        className="mx-1 inline h-4 w-4"
                    />
                    as backend and
                    <BrandIcon
                        icon={siBootstrap}
                        className="mx-1 inline h-4 w-4"
                    />
                    for styling
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/bakulan',
        },
        {
            icon: siFlutter,
            projectName: 'MyPati',
            projectDetail: (
                <>
                    Simple app developed using{' '}
                    <BrandIcon
                        icon={siFlutter}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
                    for introducing Pati regency for Dicoding rookie Flutter
                    course submission
                </>
            ),
            projectLink:
                'https://github.com/Anifyuli/dicoding-submission-flutter-rookie',
        },
        {
            icon: siKotlin,
            projectName: 'SimpleToDo List',
            projectDetail: (
                <>
                    Older To-Do list project using{' '}
                    <BrandIcon
                        icon={siKotlin}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
                    as Android frontend with{' '}
                    <BrandIcon icon={siPhp} className="mx-1 inline h-4 w-4" />{' '}
                    as backend API with{' '}
                    <BrandIcon
                        icon={siMariadb}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
                    as database
                </>
            ),
            projectLink: 'https://github.com/Anifyuli/SimpleToDoList',
        },
        {
            icon: siNestjs,
            projectName: 'Eunomia',
            projectDetail: (
                <>
                    Task management RESTful API using{' '}
                    <BrandIcon
                        icon={siTypescript}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
                    as language,{' '}
                    <BrandIcon
                        icon={siNestjs}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
                    as backend, &{' '}
                    <BrandIcon
                        icon={siPostgresql}
                        className="mx-1 inline h-4 w-4"
                    />{' '}
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
                        icon={item.icon}
                        projectName={item.projectName}
                        projectDetail={item.projectDetail}
                        projectLink={item.projectLink}
                    />
                ))}
            </div>
        </div>
    )
}
