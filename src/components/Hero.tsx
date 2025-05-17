import { useCallback } from 'react'
import { Code } from 'lucide-react'
import {
    SiGithub,
    SiLinux,
    SiOpensourceinitiative,
} from '@icons-pack/react-simple-icons'
import Avatar from '@/assets/img/ava.jpg'
import MyCv from '/docs/my-cv.pdf'
import { Download } from 'lucide-react'
import { IconTextComponent } from '@/components/ui/IconTextComponent'

export function Hero() {
    const items = [
        { icon: <Code />, text: 'Self taught programmer' },
        { icon: <SiLinux />, text: 'Linux wizard' },
        { icon: <SiOpensourceinitiative />, text: 'FLOSS enthusiast' },
    ]

    // Handling download button function
    const downloadCvAction = useCallback(() => {
        fetch(MyCv)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = 'Anifyuli CV.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
            })
            .catch((error) => console.error('Error downloading CV:', error))
    }, [])

    return (
        <div className="my-16 h-full lg:my-3">
            <div className="hero min-h-screen w-full">
                <div className="hero-content mx-auto w-full max-w-6xl flex-col items-center justify-between gap-8 lg:flex-row">
                    <div className="flex w-full justify-center lg:w-2/5">
                        <img
                            src={Avatar}
                            alt="Avatar"
                            className="w-3/4 max-w-sm rounded-full shadow-2xl sm:w-2/3 md:w-1/2 lg:w-full"
                        />
                    </div>

                    <div className="flex w-full flex-col items-center justify-between space-y-6 px-4 lg:w-3/5 lg:items-center">
                        <h1 className="text-center text-4xl font-bold sm:text-5xl lg:text-left">
                            Moh. Anif Yuliansyah
                        </h1>

                        <div className="my-2 flex w-full flex-col space-y-3 lg:px-16">
                            {items.map((item, index) => (
                                <IconTextComponent
                                    key={index}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>

                        <div className="flex w-full justify-center gap-3 pt-6 lg:justify-center">
                            <a
                                className="btn btn-primary flex items-center gap-2"
                                onClick={downloadCvAction}
                            >
                                <Download /> Download CV
                            </a>
                            <a
                                className="btn btn-primary flex items-center gap-2"
                                href="https://github.com/Anifyuli"
                                target="blank"
                            >
                                View on <SiGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
