import { useState } from 'preact/hooks'
import { lazy, Suspense } from 'preact/compat'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'

const About = lazy(() =>
    import('@/components/About').then((m) => ({ default: m.About }))
)
const Skill = lazy(() =>
    import('@/components/Skill').then((m) => ({ default: m.Skill }))
)
const Contact = lazy(() =>
    import('@/components/Contact').then((m) => ({ default: m.Contact }))
)
const Footer = lazy(() =>
    import('@/components/Footer').then((m) => ({ default: m.Footer }))
)
const SkillsOverlay = lazy(() =>
    import('@/components/ui/SkillsOverlay').then((m) => ({
        default: m.SkillsOverlay,
    }))
)

function App() {
    const [skillsOpen, setSkillsOpen] = useState(false)

    return (
        <main className="w-full overflow-x-hidden overflow-y-visible">
            <Navbar onOpenSkills={() => setSkillsOpen(true)} />
            <Hero />
            <Suspense fallback={null}>
                <About />
                <Skill />
                <Contact />
                <Footer />
                {skillsOpen && <SkillsOverlay
                    isOpen={skillsOpen}
                    onClose={() => setSkillsOpen(false)}
                />}
            </Suspense>
        </main>
    )
}

export default App