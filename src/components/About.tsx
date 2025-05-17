import { TypewriterText } from './ui/TypewriterText'

export function About() {
    const pStyle =
        'text-lg sm:text-xl text-justify sm:leading-relaxed leading-loose my-4'
    const delay = 60

    return (
        <section
            id="about"
            className="flex scroll-mt-20 flex-col justify-center px-8 py-8 md:px-24 lg:h-full"
        >
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                About Me
            </h2>
            <div className="mx-auto w-full max-w-4xl">
                <p className={pStyle}>
                    Hi! I am
                    <TypewriterText
                        content={
                            ' a Computer Science student with a strong passion for programming, Linux system administration, and DevOps. I believe in the transformative power of technology and strive to contribute meaningfully to the world of open source through FLOSS (Free/Libre and Open Source Software) projects.'
                        }
                        delay={delay}
                        className={pStyle}
                    />
                </p>
                <p className={pStyle}>
                    Through this website,
                    <TypewriterText
                        content={
                            " I'm excited to showcase some of my best projects that reflect my skills and interests. Feel free to reach out to me via the contact information provided if you'd like to discuss, collaborate, or share ideas!"
                        }
                        delay={delay}
                        className={pStyle}
                    />
                </p>
            </div>
        </section>
    )
}
