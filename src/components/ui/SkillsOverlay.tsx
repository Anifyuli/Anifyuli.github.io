import { useEffect, useState } from 'preact/hooks'
import { X } from 'lucide-preact'
import { Expertise } from '@/components/Expertise'
import { Project } from '@/components/Project'

interface SkillsOverlayProps {
    isOpen: boolean
    onClose: () => void
}

export function SkillsOverlay({ isOpen, onClose }: SkillsOverlayProps) {
    const [isClosing, setIsClosing] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleAnimationEnd = () => {
        if (isClosing) {
            setIsClosing(false)
            onClose()
        }
    }

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Skills and projects"
            className={`fixed inset-0 z-50 overflow-y-auto bg-base-100 ${
                isClosing ? 'overlay-zoom-out' : 'overlay-zoom-in'
            }`}
            onAnimationEnd={handleAnimationEnd}
        >
            <button
                type="button"
                aria-label="Close fullscreen"
                className="btn btn-circle fixed right-4 top-4 z-10 border-0 bg-base-content/10 text-base-content backdrop-blur-sm"
                onClick={() => setIsClosing(true)}
            >
                <X />
            </button>
            <div className="mx-8 my-16 py-8 md:mx-24">
                <Expertise />
                <Project />
            </div>
        </div>
    )
}