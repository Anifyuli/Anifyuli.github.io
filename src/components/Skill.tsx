import { Expertise } from "@/components/Expertise";
import { Project } from "@/components/Project";

export function Skill() {
  return (
    <>
      <div className="my-3 mx-8 md:mx-24">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <Expertise />
        <Project />
      </div>
    </>
  );
}
