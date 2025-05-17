import { Expertise } from '@/components/Expertise'
import { Project } from '@/components/Project'

export function Skill() {
    return (
        <>
            <div
                id="expertise"
                className="mx-8 my-3 scroll-mt-20 py-8 md:mx-24"
            >
                <h2 className="mb-6 text-center text-3xl font-bold">Skills</h2>
                <Expertise />
                <Project />
            </div>
        </>
    )
}
