import { Expertise } from "@/components/Expertise";
import { Project } from "@/components/Project";

export function Skill() {
  return (
    <>
      <div id="expertise" className="my-3 mx-8 md:mx-24 py-8 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <Expertise />
        <Project />
      </div>
    </>
  );
}
