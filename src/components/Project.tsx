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
} from "@icons-pack/react-simple-icons";
import { ProjectCard } from "./ui/ProjectCard";

export function Project() {
  const projectItem = [
    {
      Icon: SiVuedotjs,
      projectName: "TuxSanctuary",
      projectDetail: (
        <>
          Simple blogging platform about Linux and FLOSS updates using
          <SiVuedotjs className="inline w-4 h-4 mx-1" />
          <SiExpress className="inline w-4 h-4 mx-1" />
          and
          <SiMongodb className="inline w-4 h-4 mx-1" />
        </>
      ),
      projectLink: "https://github.com/Anifyuli/tux_sanctuary",
    },
    {
      Icon: SiExpo,
      projectName: "Simple To-Do List",
      projectDetail: (
        <>
          Simple ToDo list app using <SiExpo className="inline w-4 h-4 mx-1" />{" "}
          and <SiJson className="inline w-4 h-4 mx-1" /> as saved data format
        </>
      ),
      projectLink: "https://github.com/Anifyuli/simple-todo-list",
    },
    {
      Icon: SiDjango,
      projectName: "Bakulan",
      projectDetail: (
        <>
          Simple e-commerce using
          <SiDjango className="inline w-4 h-4 mx-1" />
          as backend and
          <SiBootstrap className="inline w-4 h-4 mx-1" />
          for styling
        </>
      ),
      projectLink: "https://github.com/Anifyuli/bakulan",
    },
    {
      Icon: SiFlutter,
      projectName: "MyPati",
      projectDetail: (
        <>
          Simple app developed using{" "}
          <SiFlutter className="inline w-4 h-4 mx-1" /> for introducing Pati
          regency for Dicoding rookie Flutter course submission
        </>
      ),
      projectLink:
        "https://github.com/Anifyuli/dicoding-submission-flutter-rookie",
    },
    {
      Icon: SiKotlin,
      projectName: "SimpleToDo List",
      projectDetail: (
        <>
          Older To-Do list project using{" "}
          <SiKotlin className="inline w-4 h-4 mx-1" /> as Android frontend with{" "}
          <SiPhp className="inline w-4 h-4 mx-1" /> as backend API with{" "}
          <SiMariadb className="inline w-4 h-4 mx-1" /> as database
        </>
      ),
      projectLink: "https://github.com/Anifyuli/SimpleToDoList",
    },
    {
      Icon: SiNestjs,
      projectName: "Eunomia",
      projectDetail: (
        <>
          Task management RESTful API using{" "}
          <SiTypescript className="inline w-4 h-4 mx-1" /> as language,{" "}
          <SiNestjs className="inline w-4 h-4 mx-1" /> as backend, &{" "}
          <SiPostgresql className="inline w-4 h-4 mx-1" /> as database manager
        </>
      ),
      projectLink: "https://github.com/Anifyuli/eunomia",
    },
  ];

  return (
    <div id="projects" className="mt-12 mb-6 scroll-mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
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
  );
}
